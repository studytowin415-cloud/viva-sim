"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-500/10 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#09090b] to-[#09090b] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Know your project before your examiner tests it.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-400 mb-10"
        >
          Upload your project. Start your first simulated viva in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="/start"
            className="px-10 py-4 bg-white text-black text-lg font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-xl shadow-white/10"
          >
            Start Your Viva &rarr;
          </Link>
          <p className="text-sm text-zinc-500 font-medium">
            Practice free &middot; No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
