"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-15">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.16em] text-green-600 sm:mb-4 sm:text-sm sm:tracking-[0.2em]"
        >
          Trusted daily
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="mx-auto mb-8 max-w-2xl text-center font-display text-[2rem] leading-[1.1] text-ink-900 sm:mb-12 sm:text-4xl lg:text-5xl"
        >
          Stories from our neighbours.
        </motion.h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              custom={i + 2}
              className="flex flex-col rounded-card bg-white p-5 shadow-soft sm:p-8"
            >
              {/* Rating */}
              <div className="mb-3 flex gap-1 sm:mb-4">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={14}
                    className={
                      starIndex < testimonial.rating
                        ? "fill-gold-500 text-gold-500"
                        : "fill-transparent text-ink-500/30"
                    }
                  />
                ))}
              </div>

              {/* Story */}
              <p className="mb-5 flex-1 text-[15px] leading-6 text-ink-900 sm:mb-6 sm:text-lg sm:leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Customer */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 font-display text-base text-white sm:h-11 sm:w-11 sm:text-lg">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-ink-900 sm:text-sm">
                    {testimonial.name}
                  </p>

                  <p className="truncate text-[11px] text-ink-500 sm:text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}