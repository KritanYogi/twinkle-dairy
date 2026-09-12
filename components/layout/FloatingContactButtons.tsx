"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "+9779847867651";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-3 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      <motion.a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call Twinkle Dairy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 text-white shadow-soft-hover sm:h-14 sm:w-14"
      >
        <Phone
          size={17}
          strokeWidth={1.75}
          className="sm:h-[22px] sm:w-[22px]"
        />
      </motion.a>

      <motion.a
        href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Twinkle Dairy on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white shadow-gold-glow sm:h-14 sm:w-14"
      >
        <MessageCircle
          size={18}
          strokeWidth={1.75}
          className="sm:h-6 sm:w-6"
        />
      </motion.a>
    </div>
  );
}