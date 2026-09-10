import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  showArrow?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
  external?: boolean;
  download?: boolean | string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
  external,
  download,
}: ButtonProps) {
  const styles = cn(
    "group inline-flex items-center justify-center gap-2.5 rounded-none px-7 py-3.5 text-[13px] font-medium tracking-[0.18em] uppercase transition-all duration-500 ease-out",
    "focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    variant === "primary" &&
      "bg-ember text-cream hover:bg-ember-hover hover:scale-[1.02] active:scale-[0.99]",
    variant === "ghost" &&
      "bg-transparent text-cream border border-line hover:border-gold/50 hover:bg-cream/5",
    variant === "outline" &&
      "bg-transparent text-cream border border-cream/25 hover:bg-cream hover:text-ink",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden
        />
      ) : null}
    </>
  );

  if (href) {
    if (download) {
      return (
        <a
          href={href}
          className={styles}
          aria-label={ariaLabel}
          download={typeof download === "string" ? download : true}
        >
          {content}
        </a>
      );
    }

    const offsite =
      external || /^(https?:|tel:|mailto:|sms:)/i.test(href);

    if (offsite) {
      const newTab = /^(https?:)/i.test(href);
      return (
        <a
          href={href}
          className={styles}
          aria-label={ariaLabel}
          {...(newTab
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
