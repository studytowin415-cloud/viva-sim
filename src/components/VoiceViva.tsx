"use client";

import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";

export function VoiceViva() {
  return (
    <section className="py-24 bg-[#0a0a0c] border-y border-white/5 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-indigo-500/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Practice speaking, not just typing.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-lg text-zinc-400 font-medium">Because a viva isn't a chat. It's a conversation.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#0c0c0e] border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl relative glow"
        >
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex items-center gap-4 bg-zinc-900/50 p-4 rounded-2xl border border-white/5">
              <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <Volume2 className="w-5 h-5 text-indigo-400" />
              </div>
              <p className="text-zinc-200 text-left text-sm md:text-base font-medium">
                "Explain why your model architecture was chosen."
              </p>
            </div>

            <div className="h-16 flex items-center gap-1.5">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["10%", "100%", "30%"] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                  className="w-1.5 bg-red-500/80 rounded-full"
                />
              ))}
            </div>

            <div className="flex items-center gap-2 text-red-400">
              <Mic className="w-4 h-4 animate-pulse" />
              <span className="text-sm font-semibold tracking-wider uppercase">Recording...</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <button className="px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2">
            Try Voice Viva &rarr;
          </button>
        </motion.div>
      </div>
    </section>
  );
}
