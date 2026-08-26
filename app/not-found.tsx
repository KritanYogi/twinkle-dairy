import Link from "next/link";
import { SearchX } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <main id="main-content">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-40 pb-24 text-center flex flex-col items-center">
        <SearchX
          size={64}
          strokeWidth={1.25}
          className="text-ink-500/40 mb-6"
        />
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl mb-4">
          Page not found.
        </h1>
        <p className="text-ink-500 text-lg leading-relaxed mb-10">
          The page you're looking for doesn't exist or may have moved.
          Let's get you back on track.
        </p>
        <Link
          href="/"
          className="rounded-button bg-green-500 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-transform hover:-translate-y-0.5"
        >
          Back to Home
        </Link>
      </div>
      <Footer />
    </main>
  );
}