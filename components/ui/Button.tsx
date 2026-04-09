import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outline-light";
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
    "inline-flex items-center justify-center font-ui text-xs tracking-[0.14em] uppercase px-8 min-h-[44px] rounded-full transition-all duration-300 cursor-pointer";
  const variants = {
    primary:
      "bg-forest text-white hover:bg-forest-light disabled:opacity-50",
    outline:
      "border border-forest text-forest hover:bg-forest hover:text-white disabled:opacity-50",
    "outline-light":
      "border border-gold text-gold hover:bg-gold hover:text-obsidian disabled:opacity-50",
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
