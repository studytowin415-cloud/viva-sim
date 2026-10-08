"use client";

import { motion } from "framer-motion";

export function PerformanceReport() {
  const metrics = [
    { label: "Project Understanding", value: 86, color: "bg-emerald-500" },
    { label: "Technical Knowledge", value: 72, color: "bg-yellow-500" },
    { label: "Code Understanding", value: 68, color: "bg-orange-500" },
    { label: "Problem Solving", value: 81, color: "bg-emerald-500" },
    { label: "Communication", value: 84, color: "bg-emerald-500" },
  ];

  return (
    <section className="py-24 relative bg-[#09090b]">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#fafafa]"
          >
            Know exactly what to improve.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#a1a1aa] leading-relaxed max-w-lg mb-8"
          >
            After your defense, receive a detailed analytical report. Discover your weak areas, get actionable revision recommendations, and practice again until you&apos;re bulletproof.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[24px] border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
        >
          <div className="p-8 border-b border-white/5 bg-white/[0.02]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-[#a1a1aa] font-semibold tracking-widest text-[10px] uppercase mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Overall Score
                </h3>
                <div className="text-5xl font-black text-white tracking-tighter">
                  78<span className="text-2xl text-[#a1a1aa] font-medium tracking-normal ml-1">/ 100</span>
                </div>
              </div>
              <div className="w-20 h-20 rounded-full border-[6px] border-[#09090b] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] border-t-emerald-500 border-r-emerald-500 border-b-emerald-500/20 border-l-emerald-500/20 flex items-center justify-center transform -rotate-45">
                <span className="text-xl font-bold text-emerald-500 transform rotate-45">B+</span>
              </div>
            </div>
          </div>

          <div className="p-8 flex-1">
            <div className="space-y-5 mb-10">
              {metrics.map((metric, idx) => (
                <div key={metric.label}>
                  <div className="flex justify-between text-xs font-semibold tracking-wide uppercase mb-2">
                    <span className="text-[#a1a1aa]">{metric.label}</span>
                    <span className="text-[#fafafa] font-mono">{metric.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className={`h-full ${metric.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6 bg-white/[0.02] p-6 rounded-2xl border border-white/5">
              <div>
                <h4 className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" /> Weak Areas
                </h4>
                <ul className="space-y-3 text-sm text-[#fafafa] font-medium">
                  <li>Database Optimization</li>
                  <li>API Architecture</li>
                  <li>Error Handling</li>
                </ul>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-[#a1a1aa] uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" /> Recommended Revision
                </h4>
                <ul className="space-y-3 text-sm text-indigo-200">
                  <li className="flex gap-2.5">
                    <span className="text-indigo-500">&rarr;</span> Review database indexing
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-indigo-500">&rarr;</span> Understand REST architecture
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-indigo-500">&rarr;</span> Explain error handling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
