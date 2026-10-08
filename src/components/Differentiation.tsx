"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

export function Differentiation() {
  const comparison = [
    { feature: "Project awareness", generic: false, chatbot: "Sometimes", us: true },
    { feature: "Code analysis", generic: false, chatbot: "Limited", us: true },
    { feature: "Adaptive questioning", generic: false, chatbot: "Limited", us: true },
    { feature: "Follow-ups", generic: false, chatbot: true, us: true },
    { feature: "Evaluation", generic: false, chatbot: "Limited", us: true },
    { feature: "Performance analytics", generic: false, chatbot: false, us: true },
  ];

  const renderValue = (val: boolean | string) => {
    if (val === true) return <Check className="w-5 h-5 text-indigo-400 mx-auto drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]" />;
    if (val === false) return <Minus className="w-5 h-5 text-zinc-700 mx-auto" />;
    if (val === "Limited" || val === "Sometimes") return <span className="text-sm font-medium text-zinc-500">{val}</span>;
    return val;
  };

  return (
    <section className="py-24 bg-[#09090b] relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#fafafa] mb-4">Why Viva Simulator?</h2>
          <p className="text-[#a1a1aa] text-lg">See how we compare against other preparation methods.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 border-b border-white/5 text-[#a1a1aa] font-semibold text-sm tracking-wider uppercase">Feature</th>
                <th className="p-6 border-b border-white/5 text-center text-[#a1a1aa] font-semibold text-sm tracking-wider uppercase whitespace-nowrap">Generic Question Banks</th>
                <th className="p-6 border-b border-white/5 text-center text-[#a1a1aa] font-semibold text-sm tracking-wider uppercase whitespace-nowrap">Chatbots</th>
                <th className="p-6 border-b border-indigo-500/20 bg-indigo-500/10 text-center text-indigo-400 font-bold text-sm tracking-wider uppercase whitespace-nowrap relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0" />
                  Viva Simulator
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0 group">
                  <td className="p-6 text-sm font-medium text-[#fafafa]">{row.feature}</td>
                  <td className="p-6 text-center">{renderValue(row.generic)}</td>
                  <td className="p-6 text-center">{renderValue(row.chatbot)}</td>
                  <td className="p-6 text-center bg-indigo-500/[0.02] border-l border-r border-indigo-500/10 group-hover:bg-indigo-500/[0.05] transition-colors relative">
                    {renderValue(row.us)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
