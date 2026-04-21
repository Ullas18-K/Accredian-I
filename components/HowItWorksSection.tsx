"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { howItWorksSteps } from "@/lib/data";
import { Search, Compass, Rocket, BarChart3 } from "lucide-react";

const getStepIcon = (iconName: string) => {
  switch (iconName) {
    case "search-icon": return <Search className="w-8 h-8 text-white" />;
    case "compass-icon": return <Compass className="w-8 h-8 text-white" />;
    case "rocket-icon": return <Rocket className="w-8 h-8 text-white" />;
    case "bar-chart-icon": return <BarChart3 className="w-8 h-8 text-white" />;
    default: return <Search className="w-8 h-8 text-white" />;
  }
};

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(howItWorksSteps[0].id);

  return (
    <section id="how-it-works" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Live in 14 days. Measurable ROI in 90.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Our structured four-step methodology takes you from assessment to measurable outcomes without disrupting your business operations.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Stepper */}
          <div className="space-y-4">
            {howItWorksSteps.map((step, index) => {
              const isActive = activeStep === step.id;
              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${
                    isActive 
                      ? "bg-white border-brand-orange shadow-lg" 
                      : "bg-white/50 border-transparent hover:bg-white hover:border-slate-200"
                  }`}
                >
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm z-10 transition-colors ${
                        isActive ? "bg-brand-orange text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        {index + 1}
                      </div>
                      {index !== howItWorksSteps.length - 1 && (
                        <div className={`w-0.5 h-full mt-2 transition-colors ${
                          isActive ? "bg-brand-orange/30" : "bg-slate-200"
                        }`} />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`}>{step.title}</h3>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="text-slate-600 text-sm leading-relaxed overflow-hidden"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Visual */}
          <div className="relative h-[400px] lg:h-[500px] rounded-3xl bg-gradient-to-br from-brand-orange to-slate-900 p-8 flex items-center justify-center shadow-2xl overflow-hidden">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,transparent_100%)]"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            
            <AnimatePresence mode="wait">
              {howItWorksSteps.map((step) => {
                if (step.id !== activeStep) return null;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                    className="relative z-10 w-full max-w-sm"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl shadow-2xl text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-orange to-amber-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-6 transform -rotate-6">
                         {getStepIcon(step.image)}
                      </div>
                      <h4 className="text-white text-xl font-bold mb-3">{step.title.substring(3)}</h4>
                      <div className="space-y-2 mt-4">
                        <div className="h-2 bg-white/20 rounded w-3/4 mx-auto"></div>
                        <div className="h-2 bg-white/20 rounded w-1/2 mx-auto"></div>
                        <div className="h-2 bg-white/20 rounded w-5/6 mx-auto"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
