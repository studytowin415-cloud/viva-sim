"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function TrustStrip() {
  const benefits = [
    "Project-specific questions",
    "Code-aware analysis",
    "Adaptive difficulty",
    "Instant feedback",
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 font-medium"
          >
            Built for students who want to walk into their viva prepared.
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <Check className="w-4 h-4 text-indigo-500" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
