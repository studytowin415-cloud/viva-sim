"use client";

import { motion } from "framer-motion";
import { 
  FileCode2, 
  BrainCircuit, 
  TrendingUp, 
  MessageSquareShare, 
  AlertTriangle, 
  Mic, 
  LineChart, 
  Target 
} from "lucide-react";

export function FeatureGrid() {
  const features = [
    {
      title: "Project-Aware Questions",
      desc: "Questions are grounded in your uploaded project rather than generic question banks.",
      icon: <BrainCircuit className="w-5 h-5" />
    },
    {
      title: "Code-Level Questions",
      desc: "Ask questions about functions, architecture, algorithms, APIs, and implementation decisions.",
      icon: <FileCode2 className="w-5 h-5" />
    },
    {
      title: "Adaptive Difficulty",
      desc: "Questions become deeper or simpler depending on your performance.",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      title: "Follow-Up Questions",
      desc: "The AI challenges vague answers and asks “why”, “how”, and “what if”.",
      icon: <MessageSquareShare className="w-5 h-5" />
    },
    {
      title: "Inconsistency Detection",
      desc: "Identify potential conflicts between your report, code, and answers.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "Voice Viva",
      desc: "Practice speaking your answers through a realistic voice-based examination.",
      icon: <Mic className="w-5 h-5" />
    },
    {
      title: "Performance Analytics",
      desc: "See topic-wise scores and identify your weakest areas.",
      icon: <LineChart className="w-5 h-5" />
    },
    {
      title: "Personalized Feedback",
      desc: "Get actionable recommendations on what to revise before your real viva.",
      icon: <Target className="w-5 h-5" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#0a0a0c] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
            Everything you need to prepare for the questions that actually matter.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/80 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
