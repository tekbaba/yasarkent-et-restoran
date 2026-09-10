import { Instagram } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.5 3c.4 2.6 1.8 4.6 4.5 5v2.3c-1.5 0-2.9-.5-4.2-1.3v6.7c0 3.4-2.6 6.1-6.2 6.1S2.4 19.1 2.4 15.7 5 9.6 8.6 9.6c.4 0 .8 0 1.2.1v2.5c-.4-.1-.8-.2-1.2-.2-2 0-3.6 1.6-3.6 3.7s1.6 3.7 3.6 3.7 3.6-1.6 3.6-3.7V3h2.3Z" />
    </svg>
  );
}

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const { instagramUrl, tiktokUrl } = siteConfig.contact;
  const items = [
    {
      href: instagramUrl,
      label: "Instagram",
      icon: <Instagram className={cn("size-5", iconClassName)} />,
    },
    {
      href: tiktokUrl,
      label: "TikTok",
      icon: <TikTokIcon className={cn("size-5", iconClassName)} />,
    },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map((item) =>
        item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="inline-flex size-10 items-center justify-center border border-line text-cream transition-colors hover:border-gold/50 hover:text-gold"
          >
            {item.icon}
          </a>
        ) : (
          <span
            key={item.label}
            title={`${item.label} bağlantısı yakında`}
            aria-label={`${item.label} yakında`}
            className="inline-flex size-10 items-center justify-center border border-line text-cream-muted/70"
          >
            {item.icon}
          </span>
        ),
      )}
    </div>
  );
}
