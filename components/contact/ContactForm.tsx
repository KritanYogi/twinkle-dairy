"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactFormValues } from "@/lib/schemas";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  function onSubmit() {
    setSubmitted(true);
    reset();
  }

  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <p className="text-green-600 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
          Get in touch
        </p>
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl lg:text-5xl mb-12 max-w-xl">
          We'd love to hear from you.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-button bg-green-100 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} strokeWidth={1.75} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-ink-900 mb-1">Visit us</p>
                <p className="text-ink-500 text-sm">Kathmandu, Nepal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-button bg-green-100 flex items-center justify-center flex-shrink-0">
                <Phone size={18} strokeWidth={1.75} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-ink-900 mb-1">Call us</p>
                <p className="text-ink-500 text-sm">+977 1-XXXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-button bg-green-100 flex items-center justify-center flex-shrink-0">
                <Mail size={18} strokeWidth={1.75} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-ink-900 mb-1">Email us</p>
                <p className="text-ink-500 text-sm">hello@twinkledairy.com</p>
              </div>
            </div>
          </div>

          <div className="rounded-card bg-white shadow-soft p-6 sm:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <p className="font-display text-xl text-ink-900 mb-2">
                  Message sent.
                </p>
                <p className="text-ink-500 text-sm">
                  We'll get back to you within 1-2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" className="mt-1.5" {...register("name")} />
                    {errors.name && (
                      <p className="text-xs text-error mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1.5"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-error mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    className="mt-1.5"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-xs text-error mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    className="mt-1.5"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-error mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-button bg-green-500 hover:bg-green-600 text-white py-6 text-sm font-semibold uppercase tracking-wide mt-2"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}