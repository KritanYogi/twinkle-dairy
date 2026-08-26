"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 sm:px-8 pt-40 pb-24 text-center flex flex-col items-center">
        <AlertTriangle
          size={64}
          strokeWidth={1.25}
          className="text-error/60 mb-6"
        />
        <h1 className="font-display text-ink-900 text-3xl sm:text-4xl mb-4">
          Something went wrong.
        </h1>
        <p className="text-ink-500 text-lg leading-relaxed mb-10">
          We hit an unexpected error. You can try again, or head back
          to the homepage.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="rounded-button bg-green-500 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wide transition-transform hover:-translate-y-0.5"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="rounded-button border border-ink-900/20 dark:border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-ink-900 dark:text-white transition-colors hover:bg-ink-900 hover:text-white dark:hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}