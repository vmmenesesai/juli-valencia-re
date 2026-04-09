import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-block font-body text-xs tracking-[0.14em] uppercase px-8 py-4 transition-all duration-300 cursor-pointer";
  const variants = {
    primary:
      "bg-champagne text-warm-white hover:bg-champagne-dark disabled:opacity-50",
    outline:
      "border border-champagne text-champagne hover:bg-champagne hover:text-warm-white disabled:opacity-50",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
