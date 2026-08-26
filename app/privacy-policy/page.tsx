import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Twinkle Dairy collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy | Twinkle Dairy",
    description: "How Twinkle Dairy collects, uses, and protects your information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-20">
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl mb-4">
          Privacy Policy
        </h1>
        <p className="text-ink-500 text-sm mb-10">Last updated: July 2026</p>

        <div className="flex flex-col gap-8 text-ink-500 leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Information We Collect
            </h2>
            <p>
              When you contact us through this website, via our contact
              form, WhatsApp, or phone, we may collect your name, email
              address, phone number, and the contents of your message.
              We do not collect payment information, as this website does
              not process transactions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              How We Use Your Information
            </h2>
            <p>
              Information you share with us is used solely to respond to
              your inquiries, provide information about our products, and,
              if you opt in, send occasional updates about festival
              offerings via our newsletter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Third-Party Sharing
            </h2>
            <p>
              We do not sell, rent, or share your personal information
              with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Cookies
            </h2>
            <p>
              This website may use minimal, essential cookies to remember
              your theme preference (light or dark mode). We do not use
              tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Contact Us
            </h2>
            <p>
              If you have questions about this policy, reach out via our{" "}
              <a
                href="/contact"
                className="text-green-600 hover:underline"
              >
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
