import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Twinkle Dairy via phone, WhatsApp, or our contact form. We're based in Kathmandu, Nepal.",
  openGraph: {
    title: "Contact Twinkle Dairy",
    description:
      "Get in touch via phone, WhatsApp, or our contact form. We're based in Kathmandu, Nepal.",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}