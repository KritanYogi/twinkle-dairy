"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";
import { wordReveal, fadeUp, staggerContainer } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "Freshness, poured with purpose.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      !sectionRef.current ||
      !imageRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = HEADLINE.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[620px] h-[100svh] max-h-[900px] w-full overflow-hidden sm:min-h-[640px]"
    >
      <div
        ref={imageRef}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1920&q=80"
          alt="Fresh dairy products and traditional sweets at Twinkle Dairy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(15,23,31,0.25) 0%, rgba(15,23,31,0.72) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-4 pb-20 sm:px-8 sm:pb-24 lg:pb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold-500 sm:mb-5 sm:text-sm sm:tracking-[0.2em]"
          >
            Since three generations
          </motion.p>

          <h1 className="max-w-3xl overflow-hidden font-display text-[2.15rem] leading-[1.08] tracking-tight text-white sm:text-6xl sm:leading-[1.05] lg:text-7xl">
            {words.map((word, i) => (
              <span
                key={i}
                className="mr-1.5 inline-block overflow-hidden sm:mr-4"
              >
                <motion.span
                  custom={i}
                  variants={wordReveal}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={fadeUp}
            custom={words.length + 1}
            className="mt-4 max-w-xl text-sm leading-6 text-white/85 sm:mt-6 sm:text-lg sm:leading-relaxed"
          >
            Farm-fresh dairy and handcrafted sweets, made in small batches
            every morning — never the other way around.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={words.length + 2}
            className="mt-6 flex w-full flex-col gap-2.5 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Link
              href="/categories/milk"
              className="flex min-h-11 w-full items-center justify-center rounded-button bg-gold-500 px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-ink-900 shadow-gold-glow transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
            >
              Shop Fresh Dairy
            </Link>

            <Link
              href="/categories/traditional-sweets"
              className="flex min-h-11 w-full items-center justify-center rounded-button border border-white/40 px-5 py-3 text-center text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto sm:px-8 sm:py-4 sm:text-sm"
            >
              Explore Sweets
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/65 sm:bottom-8"
        aria-hidden="true"
      >
        <ChevronDown size={24} strokeWidth={1.5} />
      </motion.div>

      <div className="absolute -bottom-px left-0 right-0 z-10 leading-[0]">
        <svg
          viewBox="0 0 1440 80"
          className="h-[42px] w-full sm:h-[64px]"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,32 C120,60 200,0 320,24 C440,48 500,72 620,56 C740,40 800,4 920,20 C1040,36 1100,64 1220,44 C1320,28 1380,36 1440,24 L1440,80 L0,80 Z"
            fill="#FFFDF7"
          />
        </svg>
      </div>
    </section>
  );
}