"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-15">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInLeft}
          className="relative h-72 overflow-hidden rounded-image sm:h-80 lg:h-[480px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1605880980331-20a711b27338?auto=format&fit=crop&w=1000&q=80"
            alt="Traditional dairy-making, passed down through generations"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideInRight}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green-600 sm:mb-4 sm:text-sm sm:tracking-[0.2em]">
            Our story
          </p>

          <h2 className="mb-5 font-display text-[2rem] leading-[1.1] text-ink-900 sm:mb-6 sm:text-4xl lg:text-5xl">
            Three generations, one recipe book.
          </h2>

          <p className="mb-4 text-base leading-7 text-ink-500 sm:text-lg sm:leading-relaxed">
            It started with a single milk cart and a handwritten ledger.
            Today, the same family still oversees every batch, the ghee
            still simmers the slow way, and the sweets are still shaped
            by hand.
          </p>

          <p className="mb-7 text-base leading-7 text-ink-500 sm:mb-8 sm:text-lg sm:leading-relaxed">
            No shortcuts were ever added to the recipe. We just found
            better ways to keep it fresh, from our kitchen to your door.
          </p>

          <Link
            href="/about"
            className="inline-flex min-h-11 items-center justify-center rounded-button border border-ink-900/20 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-900 transition-colors hover:bg-ink-900 hover:text-white sm:px-8 sm:py-4 sm:text-sm"
          >
            Read Our Full Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}