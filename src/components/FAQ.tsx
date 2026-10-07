"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "What files can I upload?",
      a: "Project reports, source code, presentations, documentation, and other supported project files."
    },
    {
      q: "Does the AI ask questions specifically about my project?",
      a: "Yes. Questions are generated using the information extracted from your uploaded project materials."
    },
    {
      q: "Can it ask questions about my code?",
      a: "Yes. The system can analyze supported source code and generate implementation-specific questions."
    },
    {
      q: "Can I practice using voice?",
      a: "Yes, if voice mode is enabled."
    },
    {
      q: "Does the AI give me a score?",
      a: "Yes. After the session, it provides an AI-generated practice score and detailed feedback."
    },
    {
      q: "Is my project data private?",
      a: "We prioritize your privacy. Your project files are processed temporarily for the simulation session and are not used to train global AI models. You have the option to delete your data immediately after practice."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0a0a0c] border-y border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/10 rounded-2xl bg-zinc-900/30 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:bg-white/5 transition-colors hover:bg-white/[0.02]"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="text-base font-medium text-zinc-200">{faq.q}</span>
                {openIndex === idx ? (
                  <Minus className="w-5 h-5 text-indigo-400 shrink-0 ml-4" />
                ) : (
                  <Plus className="w-5 h-5 text-zinc-500 shrink-0 ml-4" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
