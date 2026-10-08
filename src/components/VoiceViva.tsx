"use client";

import { motion } from "framer-motion";
import { Mic, Volume2 } from "lucide-react";

export function VoiceViva() {
  return (
    <section className="py-24 bg-[#09090b] border-y border-white/5 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#fafafa]"
        >
          Practice speaking.<br/> Not just typing.
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-xl text-[#a1a1aa] font-medium">Because a viva isn&apos;t a chat. It&apos;s a conversation.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-[#09090b]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 max-w-2xl mx-auto shadow-[0_0_60px_rgba(99,102,241,0.15)] relative"
        >
          <div className="flex flex-col items-center gap-12">
            <div className="w-full flex flex-col items-start gap-3 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-2">
                <Volume2 className="w-4 h-4 text-indigo-400" />
                <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">AI Examiner</span>
              </div>
              <p className="text-[#fafafa] text-left text-lg md:text-xl font-medium leading-relaxed">
                &quot;Explain why your architecture was chosen.&quot;
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-2 text-[#a1a1aa] mb-2 text-sm font-medium uppercase tracking-widest">
                Student
              </div>
              
              <div className="h-16 flex items-center gap-1.5 px-8">
                {[...Array(16)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ["15%", "100%", "25%"] }}
                    transition={{
                      duration: 0.8 + (Math.random() * 0.4),
                      repeat: Infinity,
                      delay: i * 0.05,
                      ease: "easeInOut"
                    }}
                    className="w-1.5 bg-gradient-to-t from-red-500 to-rose-400 rounded-full"
                  />
                ))}
              </div>

              <div className="flex items-center gap-2 text-red-400 mt-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20">
                <Mic className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-bold tracking-widest uppercase">Recording...</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
