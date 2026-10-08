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
      icon: <BrainCircuit className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20",
    },
    {
      title: "Code-Level Questions",
      desc: "Ask questions about functions, architecture, algorithms, and implementations.",
      icon: <FileCode2 className="w-5 h-5" />,
      colSpan: "col-span-1 lg:col-span-1",
      bgClass: "bg-white/[0.02] border-white/5",
    },
    {
      title: "Adaptive Difficulty",
      desc: "Questions become deeper or simpler depending on your performance.",
      icon: <TrendingUp className="w-5 h-5" />,
      colSpan: "col-span-1 lg:col-span-1",
      bgClass: "bg-white/[0.02] border-white/5",
    },
    {
      title: "Follow-Up Questions",
      desc: "The AI challenges vague answers and asks “why”, “how”, and “what if”.",
      icon: <MessageSquareShare className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      bgClass: "bg-white/[0.02] border-white/5",
    },
    {
      title: "Inconsistency Detection",
      desc: "Identify potential conflicts between your report, code, and answers.",
      icon: <AlertTriangle className="w-5 h-5" />,
      colSpan: "col-span-1 lg:col-span-1",
      bgClass: "bg-white/[0.02] border-white/5",
    },
    {
      title: "Performance Analytics",
      desc: "See topic-wise scores and identify your weakest areas.",
      icon: <LineChart className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-gradient-to-tr from-violet-500/10 to-transparent border-violet-500/20",
    },
    {
      title: "Voice Viva",
      desc: "Practice speaking your answers through a realistic voice-based examination.",
      icon: <Mic className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-white/[0.02] border-white/5",
    },
    {
      title: "Personalized Feedback",
      desc: "Get actionable recommendations on what to revise before your real viva.",
      icon: <Target className="w-5 h-5" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgClass: "bg-white/[0.02] border-white/5",
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#09090b] border-y border-white/5 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-6">
            Everything you need to prepare.
          </h2>
          <p className="text-lg text-[#a1a1aa]">
            A complete toolkit to ensure you are ready for the questions that actually matter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`p-6 rounded-[24px] border hover:border-indigo-500/40 transition-colors group flex flex-col justify-between ${feature.colSpan} ${feature.bgClass}`}
            >
              <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-[#a1a1aa] group-hover:text-indigo-400 group-hover:bg-indigo-500/10 transition-colors">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#fafafa] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed max-w-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
