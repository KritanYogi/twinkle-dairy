"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { featuredProducts } from "@/data/products";
import { fadeUp, staggerContainer } from "@/lib/motion";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-green-100/40 py-12 sm:py-15">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-4 sm:px-8"
      >
        <motion.p
          variants={fadeUp}
          className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-green-600 sm:mb-4 sm:text-sm sm:tracking-[0.2em]"
        >
          Customer favourites
        </motion.p>

        <motion.h2
          variants={fadeUp}
          custom={1}
          className="mb-8 max-w-xl font-display text-[2rem] leading-[1.1] text-ink-900 sm:mb-12 sm:text-4xl lg:text-5xl"
        >
          Featured, because they earned it.
        </motion.h2>

        <motion.div variants={fadeUp} custom={2}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={12}
            slidesPerView={1.05}
            breakpoints={{
              480: {
                slidesPerView: 1.25,
                spaceBetween: 14,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
            }}
            className="featured-swiper !pb-11 sm:!pb-12"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .featured-swiper {
          overflow: visible;
        }

        .featured-swiper .swiper-button-next,
        .featured-swiper .swiper-button-prev {
          width: 30px;
          height: 30px;
          color: #1e293b;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 9999px;
          box-shadow: 0 4px 14px rgba(30, 41, 59, 0.1);
        }

        .featured-swiper .swiper-button-next::after,
        .featured-swiper .swiper-button-prev::after {
          font-size: 11px;
          font-weight: 700;
        }

        .featured-swiper .swiper-pagination {
          bottom: 0;
        }

        .featured-swiper .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          transition: all 0.25s ease;
        }

        .featured-swiper .swiper-pagination-bullet-active {
          width: 18px;
          border-radius: 9999px;
        }

        @media (max-width: 639px) {
          .featured-swiper .swiper-button-next {
            right: 2px;
          }

          .featured-swiper .swiper-button-prev {
            left: 2px;
          }
        }

        @media (min-width: 640px) {
          .featured-swiper .swiper-button-next,
          .featured-swiper .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .featured-swiper .swiper-button-next::after,
          .featured-swiper .swiper-button-prev::after {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}