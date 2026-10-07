"use client";

import { motion } from "framer-motion";
import { FileQuestion, BookOpen, AlertCircle } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      title: "Generic Question Banks",
      description: "Most viva preparation gives you questions that are disconnected from your actual implementation.",
      icon: <FileQuestion className="w-6 h-6 text-zinc-400" />
    },
    {
      title: "Passive Preparation",
      description: "Reading your report again doesn't tell you whether you can explain your decisions under pressure.",
      icon: <BookOpen className="w-6 h-6 text-zinc-400" />
    },
    {
      title: "Unexpected Questions",
      description: "Real examiners don't stop at the first answer. They ask why, how, and what if.",
      icon: <AlertCircle className="w-6 h-6 text-zinc-400" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Your project is finished.
            <span className="block text-zinc-500">But do you actually know how to defend it?</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-blue-500/30">
            <div className="px-8 py-6 rounded-2xl bg-zinc-950/80 backdrop-blur-sm">
              <p className="text-lg md:text-xl font-medium text-white">
                Viva Simulator turns your own project into your personal examiner.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
