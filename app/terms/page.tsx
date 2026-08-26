import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing the use of the Twinkle Dairy website.",
  openGraph: {
    title: "Terms & Conditions | Twinkle Dairy",
    description: "Terms governing the use of the Twinkle Dairy website.",
  },
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <Navbar />
      <Breadcrumbs />

      <div className="max-w-3xl mx-auto px-6 sm:px-8 pb-20">
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl mb-4">
          Terms & Conditions
        </h1>
        <p className="text-ink-500 text-sm mb-10">Last updated: July 2026</p>

        <div className="flex flex-col gap-8 text-ink-500 leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              About This Website
            </h2>
            <p>
              This website serves as an informational showcase for Twinkle
              Dairy's products and services. It does not support online
              ordering, payments, or account creation. All purchases and
              orders are arranged directly through our physical location,
              phone, or WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Product Information
            </h2>
            <p>
              Prices and product details shown on this website are for
              reference only and may vary at the time of purchase. Please
              confirm current pricing and availability by contacting us
              directly.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Intellectual Property
            </h2>
            <p>
              All content on this website, including images, text, and
              design elements, is the property of Twinkle Dairy unless
              otherwise noted, and may not be reproduced without
              permission.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Changes to These Terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use
              of this website after changes are posted constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-ink-900 mb-3">
              Contact Us
            </h2>
            <p>
              Questions about these terms can be directed to us via our{" "}
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
