import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Star,
  ChevronLeft,
  MessageCircle,
  Phone,
} from "lucide-react";

import { products } from "@/data/products";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const PHONE_NUMBER = "9847867651";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found | Twinkle Dairy",
    };
  }

  return {
    title: `${product.name} | Twinkle Dairy`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main id="main-content">
      <Navbar />

      <Breadcrumbs />

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-8 sm:pb-20">
        {/* Back link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-xs text-ink-500 transition-colors hover:text-ink-900 sm:mb-8 sm:text-sm"
        >
          <ChevronLeft
            size={16}
            strokeWidth={1.75}
          />
          Back to home
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Product image */}
          <div className="relative h-72 overflow-hidden rounded-image bg-green-100 sm:h-96 lg:h-[520px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">
            {/* Bestseller */}
            {product.tags.includes("bestseller") && (
              <span className="mb-3 inline-block w-fit rounded-full bg-gold-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-gold-600 sm:mb-4 sm:text-[11px]">
                Bestseller
              </span>
            )}

            {/* Product name */}
            <h1 className="mb-3 font-display text-3xl leading-tight text-ink-900 sm:text-4xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4 flex items-center gap-1 sm:mb-5">
              <Star
                size={15}
                className="fill-gold-500 text-gold-500"
              />

              <span className="text-xs font-medium text-ink-900 sm:text-sm">
                {product.rating}
              </span>

              <span className="text-xs text-ink-500 sm:text-sm">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mb-5 text-[15px] leading-6 text-ink-500 sm:mb-6 sm:text-lg sm:leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-6 sm:mb-8">
              <span className="font-display text-2xl text-ink-900 sm:text-3xl">
                {product.currency} {product.price}
              </span>

              <span className="text-xs text-ink-500 sm:text-sm">
                {" "}
                / {product.unit}
              </span>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-col gap-2.5 min-[400px]:flex-row sm:gap-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/977${PHONE_NUMBER}?text=${encodeURIComponent(
                  `Hello Twinkle Dairy, I would like to enquire about ${product.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-button bg-green-500 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-green-600 sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm"
              >
                <MessageCircle
                  size={16}
                  strokeWidth={1.75}
                />
                Enquire on WhatsApp
              </a>

              {/* Call */}
              <a
                href={`tel:+977${PHONE_NUMBER}`}
                className="inline-flex min-h-10 items-center justify-center gap-2 rounded-button border border-ink-900/20 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-ink-900 transition-colors hover:bg-ink-900 hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white/10 sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm"
              >
                <Phone
                  size={16}
                  strokeWidth={1.75}
                />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}