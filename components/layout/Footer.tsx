"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AtSign, Share2, Mail, MapPin, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  newsletterSchema,
  type NewsletterFormValues,
} from "@/lib/schemas";

const PHONE_NUMBER = "9847867651";

const FOOTER_LINKS = {
  shop: [
    { label: "Fresh Milk", href: "/categories/milk" },
    { label: "Pure Ghee", href: "/categories/ghee" },
    {
      label: "Traditional Sweets",
      href: "/categories/traditional-sweets",
    },
    {
      label: "Gift Boxes",
      href: "/categories/premium-gift-boxes",
    },
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
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-10">
        {/* Brand */}
        <div className="mb-7 sm:mb-8">
          <p className="mb-2 font-display text-lg text-white sm:text-xl">
            Twinkle Dairy
          </p>

          <p className="mb-4 max-w-xs text-xs leading-relaxed sm:text-sm">
            Fresh dairy and handcrafted sweets, made in small batches
            every morning, for three generations.
          </p>

          <div className="flex gap-2">
            <Link
              href="https://instagram.com"
              aria-label="Twinkle Dairy on Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <AtSign size={14} strokeWidth={1.75} />
            </Link>

            <Link
              href="https://facebook.com"
              aria-label="Twinkle Dairy on Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
            >
              <Share2 size={14} strokeWidth={1.75} />
            </Link>
          </div>
        </div>

        {/* Footer navigation */}
        <div className="mb-7 grid grid-cols-2 gap-6 sm:mb-8 sm:gap-8 lg:grid-cols-3">
          {/* Shop */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
              Shop
            </p>

            <ul className="space-y-2">
              {FOOTER_LINKS.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
              Company
            </p>

            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white">
              Legal
            </p>

            <ul className="flex flex-wrap gap-x-4 gap-y-2 lg:flex-col lg:gap-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-white sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + Newsletter */}
        <div className="mb-6 grid grid-cols-1 gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
          {/* Contact information */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <MapPin
                size={14}
                strokeWidth={1.75}
                className="shrink-0"
              />
              <span>Kathmandu, Nepal</span>
            </div>

            <a
              href={`tel:+977${PHONE_NUMBER}`}
              className="flex items-center gap-2 text-xs transition-colors hover:text-white sm:text-sm"
            >
              <Phone
                size={14}
                strokeWidth={1.75}
                className="shrink-0"
              />
              <span>+977 9847867651</span>
            </a>

            <a
              href="mailto:hello@twinkledairy.com"
              className="flex items-center gap-2 text-xs transition-colors hover:text-white sm:text-sm"
            >
              <Mail
                size={14}
                strokeWidth={1.75}
                className="shrink-0"
              />
              <span>hello@twinkledairy.com</span>
            </a>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
              Get festival updates
            </p>

            {submitted ? (
              <p className="text-xs text-gold-500 sm:text-sm">
                Thanks, you are on the list.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-2"
                noValidate
              >
                <div className="flex gap-2">
                  <div className="min-w-0 flex-1">
                    <Label
                      htmlFor="newsletter-email"
                      className="sr-only"
                    >
                      Email address
                    </Label>

                    <Input
                      id="newsletter-email"
                      type="email"
                      placeholder="you@example.com"
                      className="h-9 border-white/20 bg-white/10 text-xs text-white placeholder:text-white/40 focus-visible:ring-gold-500 sm:text-sm"
                      {...register("email")}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-9 rounded-button bg-gold-500 px-4 text-xs text-ink-900 hover:bg-gold-600 sm:text-sm"
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

        {/* Copyright */}
        <div className="border-t border-white/10 pt-4 text-center text-[11px] text-white/50">
          © {new Date().getFullYear()} Twinkle Dairy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}