"use client";

import { motion } from "framer-motion";
import { GraduationCap, FolderTree, Code2, Microscope, Briefcase } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      title: "Final-Year Projects",
      desc: "Prepare for academic project evaluations.",
      icon: <GraduationCap className="w-5 h-5 text-zinc-400" />
    },
    {
      title: "Mini Projects",
      desc: "Understand your implementation before presenting it.",
      icon: <FolderTree className="w-5 h-5 text-zinc-400" />
    },
    {
      title: "Hackathons",
      desc: "Practice defending technical decisions.",
      icon: <Code2 className="w-5 h-5 text-zinc-400" />
    },
    {
      title: "Research Projects",
      desc: "Prepare for deeper methodology and results questions.",
      icon: <Microscope className="w-5 h-5 text-zinc-400" />
    },
    {
      title: "Placement Preparation",
      desc: "Use your projects as the basis for technical interview practice.",
      icon: <Briefcase className="w-5 h-5 text-zinc-400" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 justify-center">
          {cases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-zinc-900/40 hover:bg-zinc-900 border border-white/5 rounded-2xl w-full md:w-64 text-center transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
