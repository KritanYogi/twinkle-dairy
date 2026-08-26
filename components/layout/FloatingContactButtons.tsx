"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 sm:gap-3">
      <motion.a
        href="tel:+97710000000"
        aria-label="Call Twinkle Dairy"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 shadow-soft-hover flex items-center justify-center"
      >
        <Phone size={18} strokeWidth={1.75} className="sm:w-[22px] sm:h-[22px]" />
      </motion.a>

      <motion.a
        href="https://wa.me/97710000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Twinkle Dairy on WhatsApp"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.08 }}
        className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-green-500 text-white shadow-gold-glow flex items-center justify-center"
      >
        <MessageCircle size={20} strokeWidth={1.75} className="sm:w-6 sm:h-6" />
      </motion.a>
    </div>
  );
}