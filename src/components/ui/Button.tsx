import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-gold text-navy-950 hover:bg-[#c29f2f]",
  secondary: "bg-action-navy text-white hover:bg-[#1b2942]",
  outline: "bg-transparent border border-current text-current hover:bg-current/10",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[15px] font-semibold " +
  "transition-colors duration-200 motion-reduce:transition-none " +
  "disabled:cursor-not-allowed disabled:opacity-50 " +
  "min-h-11 min-w-11";

type CommonProps = {
  variant?: Variant;
  className?: string;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function LinkButton({
  variant = "primary",
  className = "",
  href,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className = "",
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  );
}
