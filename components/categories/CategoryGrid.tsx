"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { categories } from "@/data/categories";
import {
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-15">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {/* Section label */}
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-green-600 sm:mb-4 sm:text-sm sm:tracking-[0.2em]"
        >
          What we make
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={1}
          className="mb-7 max-w-xl font-display text-[2rem] leading-[1.1] text-ink-900 sm:mb-12 sm:text-4xl lg:text-5xl"
        >
          Every category, made the same honest way.
        </motion.h2>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              custom={i + 2}
            >
              <Link
                href={`/categories/${category.id}`}
                className="group relative block h-52 overflow-hidden rounded-card shadow-soft transition-shadow duration-300 hover:shadow-soft-hover sm:h-72"
              >
                {/* Category image */}
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />

                {/* Text */}
                <div className="relative flex h-full flex-col justify-end p-5 sm:p-6">
                  <h3 className="mb-1 font-display text-xl text-white sm:text-2xl">
                    {category.name}
                  </h3>

                  <p className="text-xs leading-5 text-white/80 sm:text-sm">
                    {category.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}