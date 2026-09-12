"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAnnouncementStore } from "@/lib/uiStore";

const NAV_LINKS = [
  { label: "Milk & Ghee", href: "/categories/milk" },
  { label: "Sweets", href: "/categories/traditional-sweets" },
  { label: "Gift Boxes", href: "/categories/premium-gift-boxes" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const isAnnouncementVisible = useAnnouncementStore(
    (s) => s.isAnnouncementVisible
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-40 transition-all duration-300",
        isAnnouncementVisible ? "top-[40px] sm:top-[40px]" : "top-0",
        scrolled
          ? "bg-white/90 dark:bg-ink-900/90 backdrop-blur-md shadow-[0_4px_24px_rgba(30,41,59,0.06)]"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className={cn(
            "font-display text-xl sm:text-2xl tracking-tight transition-colors",
            scrolled
              ? "text-ink-900 dark:text-white"
              : "text-white"
          )}
        >
          Twinkle Dairy
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors hover:opacity-70",
                  scrolled
                    ? "text-ink-900 dark:text-white"
                    : "text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 sm:gap-2">
          {mounted && (
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className={cn(
                "flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full transition-colors",
                scrolled
                  ? "text-ink-900 dark:text-white hover:bg-green-100 dark:hover:bg-white/10"
                  : "text-white hover:bg-white/10"
              )}
            >
              {theme === "dark" ? (
                <Sun size={18} strokeWidth={1.75} />
              ) : (
                <Moon size={18} strokeWidth={1.75} />
              )}
            </button>
          )}

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className={cn(
              "md:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              scrolled
                ? "text-ink-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10"
                : "text-white hover:bg-white/10"
            )}
          >
            {mobileOpen ? (
              <X size={21} strokeWidth={1.75} />
            ) : (
              <Menu size={21} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden max-h-[calc(100svh-104px)] overflow-y-auto bg-white dark:bg-ink-900 shadow-[0_12px_32px_rgba(30,41,59,0.12)]">
          <ul className="px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-sm sm:text-base font-medium text-ink-900 transition-colors hover:bg-green-100 dark:text-white dark:hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}