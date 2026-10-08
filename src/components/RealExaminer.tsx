"use client";

import { motion } from "framer-motion";

export function RealExaminer() {
  const conversation = [
    {
      role: "ai",
      text: "Why did you choose MongoDB?",
      delay: 0.5
    },
    {
      role: "student",
      text: "Because MongoDB is faster.",
      delay: 1.5
    },
    {
      role: "ai",
      text: "Faster than what? And under what workload?",
      isFollowUp: true,
      delay: 2.5
    },
    {
      role: "student",
      text: "Compared to MySQL for our use case...",
      delay: 3.5
    },
    {
      role: "ai",
      text: "What evidence from your project supports that decision?",
      isFollowUp: true,
      delay: 4.5
    },
  ];

  return (
    <section id="demo" className="py-24 relative bg-[#09090b]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-[#fafafa]"
          >
            It doesn&apos;t just ask questions.
            <span className="block text-[#a1a1aa] mt-2">It pushes back.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#a1a1aa] leading-relaxed mb-8 max-w-lg"
          >
            A real viva isn&apos;t a simple Q&A. It&apos;s a test of depth. Our AI examiner recognizes vague answers and dynamically generates challenging follow-ups, just like a human professor.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute left-6 top-6 bottom-6 w-px bg-white/5" />
          
          <div className="space-y-6 relative">
            {conversation.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: msg.delay }}
                className={`flex gap-6 ${msg.role === "student" ? "ml-8" : ""}`}
              >
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border ${
                  msg.role === "ai" 
                    ? msg.isFollowUp 
                      ? "bg-indigo-500/20 border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                      : "bg-[#09090b] border-white/10" 
                    : "bg-zinc-800 border-white/5"
                }`}>
                  {msg.role === "ai" ? (
                    <div className={`w-2.5 h-2.5 rounded-full ${msg.isFollowUp ? "bg-indigo-400 animate-pulse glow" : "bg-zinc-500"}`} />
                  ) : (
                    <span className="text-xs font-medium text-[#a1a1aa]">YOU</span>
                  )}
                </div>
                
                <div className={`flex-1 rounded-2xl p-5 border ${
                  msg.role === "ai" && msg.isFollowUp 
                    ? "bg-indigo-500/5 border-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.05)]" 
                    : "bg-white/[0.02] border-white/5"
                }`}>
                  {msg.isFollowUp && (
                    <div className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                      Adaptive Follow-up
                    </div>
                  )}
                  <p className={`text-sm md:text-base ${
                    msg.role === "ai" && msg.isFollowUp ? "text-indigo-100 font-medium" : "text-[#fafafa]"
                  }`}>
                    &quot;{msg.text}&quot;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
