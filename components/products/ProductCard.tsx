"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import type { Product } from "@/types";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-soft transition-shadow hover:shadow-soft-hover"
    >
      <div className="relative h-44 sm:h-48">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 639px) 88vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {product.tags.includes("bestseller") && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-900 sm:px-3 sm:text-[11px]">
            Bestseller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-1 font-display text-base text-ink-900 sm:text-lg">
          {product.name}
        </h3>

        <p className="mb-3 flex-1 text-[13px] leading-5 text-ink-500 sm:text-sm">
          {product.shortDescription}
        </p>

        <div className="mb-3 flex items-center gap-1 sm:mb-4">
          <Star
            size={13}
            className="fill-gold-500 text-gold-500"
          />

          <span className="text-xs font-medium text-ink-900 sm:text-sm">
            {product.rating}
          </span>

          <span className="text-xs text-ink-500 sm:text-sm">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <span className="font-display text-lg text-ink-900 sm:text-xl">
              {product.currency} {product.price}
            </span>

            <span className="text-xs text-ink-500 sm:text-sm">
              {" "}
              / {product.unit}
            </span>
          </div>

          <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-green-600 transition-all group-hover:gap-2 sm:text-sm">
            <span className="hidden min-[360px]:inline">
              View Details
            </span>

            <ArrowUpRight
              size={15}
              strokeWidth={2}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}