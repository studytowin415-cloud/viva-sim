"use client";

import { motion } from "framer-motion";

export function TrustStrip() {
  const benefits = [
    {
      title: "PROJECT-SPECIFIC",
      desc: "Questions grounded in your project."
    },
    {
      title: "CODE-AWARE",
      desc: "Questions generated from implementation."
    },
    {
      title: "ADAPTIVE",
      desc: "Difficulty changes based on your answers."
    },
    {
      title: "ACTIONABLE",
      desc: "Know exactly what to revise."
    }
  ];

  return (
    <section className="py-16 border-y border-white/5 bg-[#09090b] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-indigo-950/10 to-[#09090b] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#a1a1aa] font-medium text-lg tracking-wide"
          >
            Built for students who want to walk into their viva prepared.
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-5xl">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
              >
                <h4 className="text-sm font-bold text-white tracking-wider">{benefit.title}</h4>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
