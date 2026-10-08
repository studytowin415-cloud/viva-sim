"use client";

import { motion } from "framer-motion";

export function CodeAnalysis() {
  return (
    <section className="py-24 bg-[#09090b] border-y border-white/5 relative overflow-hidden">
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#fafafa]"
          >
            Your code is part of the viva.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#a1a1aa] leading-relaxed"
          >
            The simulator doesn&apos;t just read your project report. It analyzes your source code to ask implementation-specific questions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[20px] border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl overflow-hidden group"
          >
            {/* Editor Header */}
            <div className="h-12 border-b border-white/5 flex items-center px-4 bg-white/[0.02] gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
              </div>
              <div className="text-xs font-mono text-zinc-500 px-3 py-1 bg-white/5 rounded-md">prediction.js</div>
            </div>
            
            {/* Code Content */}
            <div className="p-8 overflow-x-auto bg-[#0a0a0c]">
              <pre className="text-sm font-mono leading-loose text-zinc-300">
                <span className="text-violet-400">const</span> <span className="text-blue-300">prediction</span> = model.predict(image)<br/>
                <span className="bg-indigo-500/20 px-2 -mx-2 border-l-2 border-indigo-500 inline-block w-full">
                <span className="text-violet-400">const</span> <span className="text-blue-300">confidence</span> = calculateConfidence(prediction)
                </span><br/>
                <span className="text-violet-400">return</span> {`{`} prediction, confidence {`}`}
              </pre>
            </div>
          </motion.div>

          {/* Right: AI Examiner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Connector Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 -left-8 w-8 h-px bg-indigo-500/30" />

            <div className="rounded-[20px] border border-indigo-500/20 bg-indigo-500/5 backdrop-blur-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse glow" />
                  <span className="text-[10px] font-bold tracking-widest text-indigo-400 uppercase">Code-Aware Question</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#09090b] border border-white/10 flex items-center justify-center shrink-0 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-wider text-indigo-400 uppercase mb-2">AI Examiner</div>
                  <p className="text-lg text-[#fafafa] font-medium leading-relaxed">
                    &quot;Why did you separate <code className="text-indigo-300 bg-indigo-500/10 px-1.5 py-0.5 rounded font-mono text-sm">calculateConfidence()</code> from the prediction function?&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
