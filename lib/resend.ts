import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY ?? "placeholder");
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  intent: string;
  budget: string;
  message: string;
}

export async function sendContactEmail(data: ContactEmailData) {
  const intentMap: Record<string, string> = {
    buying: "Buying a luxury home",
    general: "General inquiry",
    exploring: "Just exploring",
  };

  const budgetMap: Record<string, string> = {
    "800k-1.2m": "$800K – $1.2M",
    "1.2m-2m": "$1.2M – $2M",
    "2m+": "$2M+",
  };

  return getResend().emails.send({
    from: "Juli Valencia Website <noreply@julivalencia.com>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: data.email,
    subject: `New Consultation Request — ${data.name}`,
    html: `
      <div style="font-family: 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #1A1A1A; color: #FFFFF0;">
        <h1 style="font-size: 24px; font-weight: 300; color: #C9A96E; margin-bottom: 8px;">New Consultation Request</h1>
        <p style="color: #B5A99A; font-size: 13px; margin-bottom: 32px;">Via julivalencia.com</p>

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #B5A99A; font-size: 12px; width: 140px; text-transform: uppercase; letter-spacing: 0.12em;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #FFFFF0; font-size: 14px;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #B5A99A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #FFFFF0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #C9A96E;">${data.email}</a></td>
          </tr>
          ${data.phone ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #B5A99A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #FFFFF0; font-size: 14px;">${data.phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #B5A99A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Looking For</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #FFFFF0; font-size: 14px;">${intentMap[data.intent] ?? data.intent}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #B5A99A; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em;">Budget</td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(201,169,110,0.2); color: #FFFFF0; font-size: 14px;">${budgetMap[data.budget] ?? data.budget}</td>
          </tr>
        </table>

        ${data.message ? `
        <div style="margin-top: 24px; padding: 16px; border-left: 2px solid #C9A96E; background: rgba(201,169,110,0.05);">
          <p style="color: #B5A99A; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 8px;">Message</p>
          <p style="color: #FFFFF0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
        </div>
        ` : ""}

        <p style="color: #B5A99A; font-size: 11px; margin-top: 32px;">Reply directly to this email to respond to ${data.name}.</p>
      </div>
    `,
  });
}
