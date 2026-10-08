"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mic, Check } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [text, setText] = useState("");
  const fullText = "\"You mentioned that your model achieved 94% accuracy. How did you validate that result, and what metric did you use besides accuracy?\"";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            AI-POWERED PROJECT DEFENSE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl text-[#fafafa]"
          >
            DON&apos;T JUST PRESENT<br />
            YOUR PROJECT.<br />
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] mt-2">DEFEND IT.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[#a1a1aa] mb-10 max-w-2xl"
          >
            Upload your project. Face an AI examiner. Discover what you know, what you don&apos;t, and what your examiner might ask next.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto"
          >
            <Link
              href="/start"
              className="group relative w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Start Your Viva 
              <motion.span className="group-hover:translate-x-1 transition-transform">&rarr;</motion.span>
            </Link>
            <Link
              href="#demo"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#09090b] border border-white/10 text-white font-medium rounded-full hover:bg-zinc-900 transition-colors flex items-center justify-center"
            >
              Watch Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#a1a1aa]"
          >
            {["Project-aware", "Code-aware", "Adaptive", "Instant feedback"].map((feature, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-indigo-500" /> {feature}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Hero Visual UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto relative"
        >
          {/* Floating mini-cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:flex absolute -left-12 top-20 glass px-4 py-2 rounded-xl items-center gap-2 shadow-lg z-20"
          >
            <Check className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-medium text-zinc-200">Project analyzed</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="hidden md:flex absolute -right-16 top-32 glass px-4 py-2 rounded-xl items-center gap-2 shadow-lg z-20"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-xs font-medium text-zinc-200">12 modules detected</span>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:flex absolute -left-8 bottom-32 glass px-4 py-2 rounded-xl items-center gap-2 shadow-lg z-20"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span className="text-xs font-medium text-zinc-200">Codebase understood</span>
          </motion.div>

          <div className="rounded-[24px] border border-white/10 bg-[#09090b]/80 backdrop-blur-xl shadow-2xl overflow-hidden glow-strong relative">
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
              <div className="text-sm font-medium text-zinc-300">Viva Simulator</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-semibold text-red-400 tracking-wider">LIVE</span>
                </div>
                <div className="text-xs font-mono text-zinc-500 bg-white/5 px-2.5 py-1 rounded-md">04 / 15</div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex flex-col gap-10">
              {/* AI Examiner */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30">
                      <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse glow" />
                    </div>
                    <span className="text-sm font-semibold tracking-wider text-indigo-400 uppercase">AI Examiner</span>
                  </div>
                  <div className="text-xs font-medium text-zinc-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    Difficulty: <span className="text-yellow-400">Advanced</span>
                  </div>
                </div>
                <div className="text-[#fafafa] text-lg md:text-xl font-medium leading-relaxed max-w-2xl pl-11">
                  {text}
                  <span className="inline-block w-2 h-5 bg-indigo-400 ml-1 animate-pulse align-middle" />
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-2" />

              {/* User Answer Area */}
              <div className="flex flex-col gap-6 pl-11">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3 text-zinc-300">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                      <Mic className="w-4 h-4 text-red-400" />
                    </div>
                    <span className="text-sm font-medium">Listening...</span>
                  </div>
                  <div className="flex gap-1 items-center h-5">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ["20%", "100%", "30%"] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-1.5 bg-indigo-400/80 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-400 tracking-wide uppercase text-[10px]">Project Understanding</span>
                      <span className="text-emerald-400 font-mono">82%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "82%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-emerald-500 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-zinc-400 tracking-wide uppercase text-[10px]">Technical Depth</span>
                      <span className="text-yellow-400 font-mono">67%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "67%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full bg-yellow-500 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

