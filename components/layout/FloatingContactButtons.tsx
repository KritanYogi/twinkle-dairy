"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "9847867651";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-3 right-3 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      {/* Call */}
      <motion.a
        href={`tel:+977${PHONE_NUMBER}`}
        aria-label="Call Twinkle Dairy"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.6,
          duration: 0.4,
        }}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-ink-900 text-white shadow-soft-hover sm:h-14 sm:w-14"
      >
        <Phone
          size={15}
          strokeWidth={1.8}
          className="sm:h-[22px] sm:w-[22px]"
        />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/977${PHONE_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Twinkle Dairy on WhatsApp"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.4,
        }}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.92,
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 text-white shadow-gold-glow sm:h-14 sm:w-14"
      >
        <MessageCircle
          size={16}
          strokeWidth={1.8}
          className="sm:h-6 sm:w-6"
        />
      </motion.a>
    </div>
  );
}