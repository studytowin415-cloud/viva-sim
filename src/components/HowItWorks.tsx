"use client";

import { motion } from "framer-motion";
import { UploadCloud, Brain, ShieldAlert, TrendingUp } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Upload",
      desc: "Upload your project report, source code, PPT, documentation, and architecture diagrams.",
      icon: <UploadCloud className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "02",
      title: "Understand",
      desc: "The AI analyzes your project structure, technologies, methodology, implementation, and key decisions.",
      icon: <Brain className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "03",
      title: "Defend",
      desc: "Face an adaptive AI examiner that asks questions based on YOUR project.",
      icon: <ShieldAlert className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "04",
      title: "Improve",
      desc: "Receive scores, weaknesses, feedback, and topics you should revise before the real viva.",
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0a0a0c] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From project files to a realistic viva in minutes.</h2>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 mb-6 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10 group-hover:border-indigo-500/30 transition-colors">
                  <div className="absolute inset-0 bg-indigo-500/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col items-center gap-1">
                    {step.icon}
                    <span className="text-xs font-mono text-zinc-500">{step.num}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
