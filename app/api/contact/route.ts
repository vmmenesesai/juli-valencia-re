import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, intent, budget } = body;

  // Validate required fields
  if (!name || !email || !intent || !budget) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  // Basic email format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // TODO: Wire up email sending (Resend or other provider) before going live
  console.log("New consultation request:", {
    name,
    email,
    phone: body.phone,
    intent,
    budget,
    message: body.message,
  });

  return NextResponse.json({ success: true });
}
