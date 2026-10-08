"use client";

import { motion } from "framer-motion";
import { FileQuestion, BookOpen, AlertCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      num: "01",
      title: "GENERIC QUESTIONS",
      description: "Most preparation tools ask questions that have nothing to do with your implementation.",
      icon: <FileQuestion className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "02",
      title: "PASSIVE PREPARATION",
      description: "Reading slides doesn't reveal what you can't explain.",
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />
    },
    {
      num: "03",
      title: "UNEXPECTED FOLLOW-UPS",
      description: "Real examiners ask why, how, and what if.",
      icon: <AlertCircle className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#09090b]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#fafafa]"
          >
            Your project is finished.
            <span className="block text-[#a1a1aa] mt-2">But do you actually know how to defend it?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            Reading your report again isn&apos;t the same as defending your decisions under pressure.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group hover:-translate-y-1"
            >
              <div className="absolute top-8 right-8 text-4xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                {problem.num}
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8">
                {problem.icon}
              </div>
              <h3 className="text-sm font-bold text-white tracking-wider mb-3">{problem.title}</h3>
              <p className="text-[#a1a1aa] leading-relaxed relative z-10">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
