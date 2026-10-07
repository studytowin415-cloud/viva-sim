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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Leave every session knowing exactly what to improve.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-8"
          >
            After your defense, receive a detailed analytical report. Discover your weak areas, get actionable revision recommendations, and practice again until you're bulletproof.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-2xl p-6 md:p-8"
        >
          <div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5">
            <div>
              <h3 className="text-zinc-500 font-semibold tracking-wider text-xs uppercase mb-2">Viva Performance</h3>
              <div className="text-4xl font-bold text-white">78<span className="text-xl text-zinc-600 font-medium"> / 100</span></div>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-zinc-800 border-t-emerald-500 flex items-center justify-center transform -rotate-45">
              <span className="text-sm font-bold text-emerald-500 transform rotate-45">B+</span>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            {metrics.map((metric, idx) => (
              <div key={metric.label}>
                <div className="flex justify-between text-sm font-medium mb-1.5">
                  <span className="text-zinc-300">{metric.label}</span>
                  <span className="text-zinc-400">{metric.value}%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
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

          <div className="grid sm:grid-cols-2 gap-6 bg-zinc-900/30 p-5 rounded-xl border border-white/5">
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Weak Areas</h4>
              <ul className="space-y-2 text-sm text-red-300/80">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50" /> Database Optimization</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50" /> API Architecture</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-red-500/50" /> Error Handling</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Recommended Revision</h4>
              <ul className="space-y-2 text-sm text-indigo-300/80">
                <li className="flex gap-2"><span>&rarr;</span> Review database indexing</li>
                <li className="flex gap-2"><span>&rarr;</span> Understand REST architecture</li>
                <li className="flex gap-2"><span>&rarr;</span> Explain error-handling strategy</li>
              </ul>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
