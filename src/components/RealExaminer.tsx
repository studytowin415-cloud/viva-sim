"use client";

import { motion } from "framer-motion";

export function RealExaminer() {
  const conversation = [
    {
      role: "ai",
      text: "Why did you choose MongoDB?",
    },
    {
      role: "student",
      text: "Because MongoDB is faster.",
    },
    {
      role: "ai",
      text: "Faster than what? And under what workload?",
      isFollowUp: true,
    },
    {
      role: "student",
      text: "Compared to MySQL for our use case...",
    },
    {
      role: "ai",
      text: "What evidence from your project supports that decision?",
      isFollowUp: true,
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
          >
            It doesn't just ask questions.
            <span className="block text-zinc-500">It pushes back.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg"
          >
            A real viva isn't a simple Q&A. It's a test of depth. Our AI examiner recognizes vague answers and dynamically generates challenging follow-ups, just like a human professor.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute left-6 top-6 bottom-6 w-px bg-zinc-800" />
          
          <div className="space-y-6 relative">
            {conversation.map((msg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className={`flex gap-6 ${msg.role === "student" ? "ml-8" : ""}`}
              >
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border ${
                  msg.role === "ai" 
                    ? msg.isFollowUp 
                      ? "bg-indigo-500/20 border-indigo-500/50" 
                      : "bg-zinc-900 border-white/10" 
                    : "bg-zinc-800 border-white/5"
                }`}>
                  {msg.role === "ai" ? (
                    <div className={`w-2.5 h-2.5 rounded-full ${msg.isFollowUp ? "bg-indigo-400" : "bg-zinc-500"}`} />
                  ) : (
                    <span className="text-xs font-medium text-zinc-400">YOU</span>
                  )}
                </div>
                
                <div className={`flex-1 rounded-2xl p-5 border ${
                  msg.role === "ai" && msg.isFollowUp 
                    ? "bg-indigo-500/5 border-indigo-500/20" 
                    : "bg-zinc-900/50 border-white/5"
                }`}>
                  {msg.isFollowUp && (
                    <div className="text-[10px] uppercase tracking-widest font-bold text-indigo-400 mb-2">
                      Adaptive Follow-up
                    </div>
                  )}
                  <p className={`text-sm md:text-base ${
                    msg.role === "ai" && msg.isFollowUp ? "text-indigo-100 font-medium" : "text-zinc-300"
                  }`}>
                    "{msg.text}"
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
