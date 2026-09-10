"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { easePremium } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-ink/80 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto grid h-20 max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 md:px-8 lg:grid-cols-[auto_1fr_auto] lg:px-8"
        aria-label="Ana menü"
      >
        <Link href="/" className="flex min-w-0 items-center gap-3 justify-self-start">
          <Image
            src="/images/logo-96.webp"
            alt="Yaşarkent Et Restoran Kemalpaşa logosu"
            width={48}
            height={48}
            sizes="48px"
            quality={75}
            unoptimized
            className="size-11 shrink-0 object-contain p-0.5 sm:size-12"
          />
          <span className="truncate font-display text-xl tracking-[0.28em] text-cream sm:text-2xl">
            {siteConfig.shortName}
          </span>
        </Link>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "text-[12px] uppercase tracking-[0.22em] transition-colors duration-300",
                  pathname === item.href
                    ? "text-gold"
                    : "text-cream-muted hover:text-cream",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center justify-self-end gap-3">
          <Button href="/#rezervasyon" className="hidden lg:inline-flex" showArrow>
            Rezervasyon Yap
          </Button>
          <button
            type="button"
            className="relative z-50 inline-flex size-11 shrink-0 items-center justify-center border border-line text-cream lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-20 z-40 overflow-y-auto bg-ink lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easePremium }}
          >
            <ul className="flex h-full flex-col justify-center gap-6 px-8 pb-24">
              {siteConfig.nav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.5, ease: easePremium }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl text-cream"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: easePremium }}
                className="pt-4"
              >
                <Button href="/#rezervasyon" showArrow>
                  Rezervasyon Yap
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
