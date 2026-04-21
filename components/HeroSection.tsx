"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

// Count up utility component
function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    // We'll just do a quick naive interval for demo
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 container mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
            </span>
            <span className="text-sm font-medium text-slate-700">Trusted by 500+ Enterprise Organizations</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight"
          >
            Build the Skills <br />
            Your Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500">
              Needs to Win.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
          >
            India{"'"}s most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams at scale — with measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <a
              href="#contact"
              className="inline-flex justify-center items-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              Schedule a Free Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-sm">
              <Play className="w-4 h-4 fill-slate-700" />
              See Platform Tour
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 text-sm font-medium text-slate-500"
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium text-slate-700">University Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-orange" />
              <span className="text-sm font-medium text-slate-700">Industry Expert Mentors</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 shrink-0 bg-brand-orange text-white rounded text-[10px] flex items-center justify-center font-bold">
                📊
              </div>
              Real-time analytics
            </div>
          </motion.div>
        </div>

        {/* Right Column Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          {/* Decorative blur blob */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-yellow-400 rounded-[2.5rem] blur-2xl opacity-20 dark:opacity-40" />

          <div className="relative bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl p-6 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-700 pb-4 mb-5">
              <div>
                <h3 className="text-white font-semibold text-lg">Enterprise Dashboard</h3>
                <p className="text-slate-400 text-sm">Q4 Learning Report</p>
              </div>
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">Active Learners</p>
                <div className="flex items-end gap-2">
                  <p className="text-white font-bold text-xl"><CountUp end={2847} /></p>
                  <p className="text-emerald-400 text-xs font-medium mb-1">+12%</p>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">Avg. Score</p>
                <div className="flex items-end gap-2">
                  <p className="text-white font-bold text-xl"><CountUp end={91.4} prefix="" /></p>
                  <p className="text-emerald-400 text-xs font-medium mb-1">+5.2</p>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                <p className="text-slate-400 text-xs mb-1">Completion</p>
                <div className="flex items-end gap-2">
                  <p className="text-white font-bold text-xl"><CountUp end={96} suffix="%" /></p>
                  <p className="text-emerald-400 text-xs font-medium mb-1">+8%</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-200 font-medium">Data Science & AI</span>
                  <span className="text-slate-400">89%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "89%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-brand-orange rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-200 font-medium">Product Management</span>
                  <span className="text-slate-400">76%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "76%" }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="h-full bg-brand-orange rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-slate-200 font-medium">Leadership & Strategy</span>
                  <span className="text-slate-400">92%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    className="h-full bg-emerald-500 rounded-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] text-white">
                    {`U${i}`}
                  </div>
                ))}
              </div>
              <p className="text-slate-400 text-sm"><span className="text-white font-medium">+2,842</span> learners enrolled</p>
            </div>
            
            {/* Hover Badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-6 top-32 bg-white rounded-full px-4 py-2 shadow-xl border border-slate-100 flex items-center gap-2"
            >
               <span className="text-xl">🎓</span>
               <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 leading-tight uppercase font-semibold">IIT Certified</span>
                 <span className="text-xs font-bold text-slate-800 leading-tight">500+ Programs</span>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-6 bottom-16 bg-white rounded-full px-4 py-2 shadow-xl border border-slate-100 flex items-center gap-2"
            >
               <span className="text-emerald-500 bg-emerald-100 rounded-full w-5 h-5 flex items-center justify-center text-xs">✓</span>
               <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 leading-tight uppercase font-semibold">98% Satisfaction</span>
                 <span className="text-xs font-bold text-slate-800 leading-tight">Learner NPS Score</span>
               </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
