"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

export function Differentiation() {
  const comparison = [
    { feature: "Uses your project", generic: false, chatbot: "Sometimes", us: true },
    { feature: "Reads source code", generic: false, chatbot: "Limited", us: true },
    { feature: "Adaptive questioning", generic: false, chatbot: "Limited", us: true },
    { feature: "Follow-up questions", generic: false, chatbot: true, us: true },
    { feature: "Project-specific evaluation", generic: false, chatbot: "Limited", us: true },
    { feature: "Performance analytics", generic: "Limited", chatbot: "Limited", us: true },
  ];

  const renderValue = (val: boolean | string) => {
    if (val === true) return <Check className="w-5 h-5 text-emerald-500 mx-auto" />;
    if (val === false) return <X className="w-5 h-5 text-red-500/50 mx-auto" />;
    if (val === "Limited" || val === "Sometimes") return <span className="text-sm font-medium text-yellow-500/80">{val}</span>;
    return val;
  };

  return (
    <section className="py-24 bg-[#0a0a0c] border-y border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Viva Simulator?</h2>
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 border-b border-white/10 text-zinc-400 font-medium">Feature</th>
                <th className="p-4 border-b border-white/10 text-center text-zinc-400 font-medium whitespace-nowrap">Generic Question Bank</th>
                <th className="p-4 border-b border-white/10 text-center text-zinc-400 font-medium whitespace-nowrap">Chatbot</th>
                <th className="p-4 border-b border-white/10 bg-indigo-500/5 text-center text-indigo-400 font-semibold rounded-t-xl whitespace-nowrap">Viva Simulator</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors border-b border-white/5 last:border-0">
                  <td className="p-4 text-sm font-medium text-zinc-300">{row.feature}</td>
                  <td className="p-4 text-center">{renderValue(row.generic)}</td>
                  <td className="p-4 text-center">{renderValue(row.chatbot)}</td>
                  <td className="p-4 text-center bg-indigo-500/5 border-l border-r border-indigo-500/10">
                    {renderValue(row.us)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-indigo-500/5 border-t border-indigo-500/10 rounded-b-xl h-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
