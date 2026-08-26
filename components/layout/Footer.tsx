"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Share2, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { newsletterSchema, type NewsletterFormValues } from "@/lib/schemas";

const FOOTER_LINKS = {
  shop: [
    { label: "Fresh Milk", href: "/categories/milk" },
    { label: "Pure Ghee", href: "/categories/ghee" },
    { label: "Traditional Sweets", href: "/categories/traditional-sweets" },
    { label: "Gift Boxes", href: "/categories/premium-gift-boxes" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
  });

  function onSubmit() {
    setSubmitted(true);
    reset();
  }

  return (
    <footer className="bg-ink-900 text-white/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 sm:py-8">
        <div className="mb-5 sm:mb-8">
          <p className="font-display text-lg sm:text-xl text-white mb-2">
            Twinkle Dairy
          </p>
          <p className="text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 max-w-xs">
            Fresh dairy and handcrafted sweets, made in small batches every
            morning, for three generations.
          </p>
          <div className="flex gap-2">
            <Link
              href="https://instagram.com"
              aria-label="Twinkle Dairy on Instagram"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10"
            >
              <AtSign size={14} strokeWidth={1.75} />
            </Link>
            <Link
              href="https://facebook.com"
              aria-label="Twinkle Dairy on Facebook"
              className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-colors hover:bg-white/10"
            >
              <Share2 size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-5 sm:mb-8">
          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wide mb-2 sm:mb-3">
              Shop
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wide mb-2 sm:mb-3">
              Company
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="font-semibold text-white text-xs uppercase tracking-wide mb-2 sm:mb-3">
              Legal
            </p>
            <ul className="flex flex-row gap-4 lg:flex-col lg:gap-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 sm:pt-5 grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <MapPin size={13} strokeWidth={1.75} />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Phone size={13} strokeWidth={1.75} />
              <span>+977 1-XXXXXXX</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Mail size={13} strokeWidth={1.75} />
              <span>hello@twinkledairy.com</span>
            </div>
          </div>

          <div>
            <p className="font-semibold text-white text-xs uppercase tracking-wide mb-2">
              Get festival updates
            </p>
            {submitted ? (
              <p className="text-xs sm:text-sm text-gold-500">
                Thanks, you are on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
                noValidate
              >
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </Label>
                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-9 text-xs sm:text-sm bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-gold-500"
                      {...register("email")}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-9 text-xs sm:text-sm bg-gold-500 text-ink-900 hover:bg-gold-600 rounded-button px-4"
                  >
                    Join
                  </Button>
                </div>
                {errors.email && (
                  <p className="text-xs text-error">
                    {errors.email.message}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-3 sm:pt-4 text-[11px] text-white/50 text-center">
          (c) {new Date().getFullYear()} Twinkle Dairy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}