"use client";

import { motion } from "framer-motion";

export function CodeAnalysis() {
  return (
    <section className="py-24 bg-[#0a0a0c] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden"
          >
            {/* Editor Header */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 bg-zinc-900/80 gap-4">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="text-xs font-mono text-zinc-500">model_inference.py</div>
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto bg-[#0d0d12]">
              <pre className="text-sm font-mono leading-loose">
                <span className="text-indigo-400">def</span> <span className="text-blue-300">process_frame</span>(frame):<br/>
                {'    '}image = preprocess(frame)<br/>
                {'    '}prediction = model.predict(image)<br/>
                <span className="bg-indigo-500/20 px-1 -mx-1 border border-indigo-500/30 rounded inline-block">
                {'    '}confidence = calculate_confidence(prediction)
                </span><br/>
                {'    '}<span className="text-indigo-400">return</span> prediction, confidence
              </pre>
            </div>

            {/* AI Annotation */}
            <div className="border-t border-indigo-500/20 bg-indigo-500/5 p-4 flex gap-4">
              <div className="mt-1 w-2 h-2 rounded-full bg-indigo-400 shrink-0" />
              <div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 mb-1">
                  Code-Aware Question
                </div>
                <p className="text-sm text-indigo-100 font-medium">
                  "Why did you separate `calculate_confidence()` from the prediction function? Wouldn't it be more efficient to compute them together?"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Your code is part of the viva.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-8"
          >
            The simulator doesn't just read your project report. It analyzes your source code to ask implementation-specific questions. Be prepared to defend your architecture, algorithms, and technical trade-offs.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
