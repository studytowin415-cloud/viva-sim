"use client";

import { motion } from "framer-motion";

export function ProductShowcase() {
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
            Not a question generator.
            <span className="block text-zinc-500">A project-aware examiner.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden glow-strong grid lg:grid-cols-12 max-w-5xl mx-auto"
        >
          {/* Left panel: Project Context */}
          <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-950 p-6">
            <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-6 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Project Context
            </div>
            
            <pre className="text-xs text-zinc-400 font-mono leading-relaxed bg-zinc-900/50 p-4 rounded-lg border border-white/5 overflow-x-auto">
{`PROJECT
Smart Attendance System

TECH STACK
Python
OpenCV
FaceNet
MySQL

MODULES
Face Detection
Recognition
Attendance
Database`}
            </pre>
          </div>

          {/* Right panel: Examiner Conversation */}
          <div className="lg:col-span-8 p-6 md:p-8 flex flex-col gap-6 bg-[#0c0c0e]">
            {/* AI Message */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>
              <div className="flex-1 space-y-2 pt-1">
                <p className="text-zinc-200 text-sm leading-relaxed">
                  "You chose FaceNet for face recognition. Why was it more suitable for your application than LBPH?"
                </p>
              </div>
            </div>

            {/* Student Message */}
            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center shrink-0">
                <span className="text-xs font-medium text-zinc-300">YOU</span>
              </div>
              <div className="flex-1 space-y-2 pt-1 text-right">
                <div className="inline-block bg-zinc-900 border border-white/10 rounded-2xl rounded-tr-sm px-4 py-3">
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    "FaceNet generates embeddings that can represent facial features..."
                  </p>
                </div>
              </div>
            </div>

            {/* AI Follow-up Message */}
            <div className="flex gap-4 relative">
              <div className="absolute -left-3 top-10 bg-indigo-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider whitespace-nowrap transform -rotate-90 origin-bottom-left shadow-lg">
                Adaptive Follow-up
              </div>
              <div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
              </div>
              <div className="flex-1 space-y-2 pt-1">
                <div className="inline-block bg-indigo-500/5 border border-indigo-500/20 rounded-2xl rounded-tl-sm px-4 py-3">
                  <p className="text-indigo-100 text-sm leading-relaxed">
                    "Good. Then explain how those embeddings are compared during recognition."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
