"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqCategories = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous"
];

const faqsData = {
  "About the Course": [
    {
      question: "What types of corporate training programs does Accredian offer?",
      answer: "Accredian offers comprehensive corporate training programs across Data Science, AI, Product Management, and Leadership. We customize paths according to your enterprise needs and skill gaps."
    },
    {
      question: "What domain specializations are available?",
      answer: "We offer specializations tailored for BFSI, Healthcare, Retail, Manufacturing, and Tech sectors. Each program contextualizes learning with industry-specific case studies."
    }
  ],
  "About the Delivery": [
    {
      question: "How are the training sessions conducted?",
      answer: "Sessions are conducted live online by expert practitioners. We also offer hybrid and offline delivery models for large enterprise cohorts upon request."
    },
    {
      question: "Is there a dedicated mentor for each cohort?",
      answer: "Yes, every enterprise cohort is assigned a dedicated mentor and program manager to assist learners, resolve queries, and monitor active engagement metrics."
    }
  ],
  "Miscellaneous": [
    {
      question: "Do learners receive a certificate upon completion?",
      answer: "Yes, all successful learners receive an executive certificate natively co-branded with our prestigious university partners like IITs or IIMs."
    }
  ]
};

export function FaqSection() {
  const [activeTab, setActiveTab] = useState<string>("About the Course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentFaqs = faqsData[activeTab as keyof typeof faqsData] || [];

  return (
    <section id="faqs" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 max-w-2xl">
          Frequently Asked <span className="text-brand-orange">Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Tabs Sidebar */}
          <div className="flex flex-col gap-3 lg:w-1/3 shrink-0">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setOpenIndex(0); // reset accordion on tab switch
                }}
                className={cn(
                  "px-6 py-4 rounded-lg border text-left font-semibold transition-all w-full md:w-auto",
                  activeTab === cat
                    ? "bg-white border-brand-orange text-brand-orange shadow-md transform scale-[1.02]"
                    : "bg-white/50 border-slate-200 text-slate-500 hover:bg-white hover:border-slate-300"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="lg:w-2/3 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {currentFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div 
                      key={idx}
                      className="border-b border-slate-200"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className={cn(
                          "font-medium text-lg pr-8 transition-colors",
                          isOpen ? "text-brand-orange" : "text-slate-800"
                        )}>
                          {faq.question}
                        </span>
                        <ChevronDown className={cn(
                          "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
                          isOpen && "transform rotate-180 text-brand-orange"
                        )} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 text-slate-600 leading-relaxed max-w-4xl">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        {/* Enquire Now CTA */}
        <div className="flex justify-center mt-20">
           <a 
             href="#contact" 
             className="bg-brand-orange hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md shadow-md transition-all hover:shadow-lg active:scale-95"
           >
             Enquire Now
           </a>
        </div>
      </div>
    </section>
  );
}
