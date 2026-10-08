"use client";

import { motion } from "framer-motion";
import { UploadCloud, BrainCircuit, ShieldAlert, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "PROJECT FILES",
      desc: "Upload your architecture, codebase, and reports.",
      icon: <UploadCloud className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "02",
      title: "AI UNDERSTANDS",
      desc: "Deep analysis of your tech stack and design decisions.",
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "03",
      title: "AI EXAMINES",
      desc: "Face an adaptive viva with tough follow-up questions.",
      icon: <ShieldAlert className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "04",
      title: "YOU IMPROVE",
      desc: "Discover weak spots and exactly what to revise.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#09090b] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#fafafa] tracking-tight">Meet your toughest examiner <br className="hidden md:block"/>before your real one.</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[40px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 mb-8 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-indigo-500/30 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-300 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col items-center gap-1">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-sm font-bold tracking-wider text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
                
                {idx < steps.length - 1 && (
                  <div className="md:hidden mt-8 w-px h-8 bg-gradient-to-b from-indigo-500/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
