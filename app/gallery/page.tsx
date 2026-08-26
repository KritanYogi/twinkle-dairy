import type { Metadata } from "next";
import GalleryView from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A closer look at Twinkle Dairy's products, from fresh milk to festival sweets.",
  openGraph: {
    title: "Gallery | Twinkle Dairy",
    description:
      "A closer look at Twinkle Dairy's products, from fresh milk to festival sweets.",
    images: [
      "https://images.unsplash.com/photo-1695568181363-af5c78f4d059?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
};

export default function GalleryPage() {
  return <GalleryView />;
}