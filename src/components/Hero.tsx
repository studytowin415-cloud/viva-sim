"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mic, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide uppercase mb-8"
          >
            AI-Powered Project Defense
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-4xl"
          >
            Don&apos;t just present your project.
            <span className="block text-zinc-500">Defend it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl"
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
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              Start Your Viva &rarr;
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 border border-white/10 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors flex items-center justify-center"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-600" /> No setup required</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-600" /> Upload your project</span>
            <span className="hidden sm:inline">&middot;</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-zinc-600" /> Practice anytime</span>
          </motion.div>
        </div>

        {/* Hero Visual UI Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="rounded-2xl border border-white/10 bg-[#0c0c0e] shadow-2xl overflow-hidden glow-strong relative">
            <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-zinc-900/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="text-xs font-mono text-zinc-500">Viva Simulator — Question 04</div>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col gap-8">
              {/* AI Examiner */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-indigo-400 uppercase">AI Examiner</span>
                </div>
                <div className="text-zinc-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  "You mentioned that your model achieved 94% accuracy. How did you validate that result, and what metric did you use besides accuracy?"
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* User Answer Area */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Mic className="w-4 h-4 text-red-400" />
                    <span className="text-sm font-medium">Listening...</span>
                  </div>
                  <div className="flex gap-1 items-center h-4">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ["20%", "100%", "40%"] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                        className="w-1 bg-red-400/80 rounded-full"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-zinc-400">Project Understanding</span>
                    <span className="text-emerald-400">82%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "82%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-emerald-500 rounded-full"
                    />
                  </div>
                  
                  <div className="flex justify-between text-xs font-medium mt-2">
                    <span className="text-zinc-400">Technical Depth</span>
                    <span className="text-yellow-400">67%</span>
                  </div>
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
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
        </motion.div>
      </div>
    </section>
  );
}
