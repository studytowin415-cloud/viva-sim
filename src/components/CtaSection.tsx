"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#09090b]">
      {/* Glowing Orb / Grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-20 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#fafafa]"
        >
          Walk into your viva<br/> knowing you&apos;re ready.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#a1a1aa] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Upload your project. Challenge yourself. Find your weak spots before your examiner does.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/start"
            className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center justify-center gap-2"
          >
            Start Your Viva 
            <motion.span className="group-hover:translate-x-1 transition-transform">&rarr;</motion.span>
          </Link>
          <Link
            href="#demo"
            className="w-full sm:w-auto px-10 py-4 bg-[#09090b] border border-white/10 text-white text-lg font-bold rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center"
          >
            Explore Demo
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
