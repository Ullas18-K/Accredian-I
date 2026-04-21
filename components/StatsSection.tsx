"use client";

import { motion } from "framer-motion";
import { statsData } from "@/lib/data";

export function StatsSection() {
  return (
    <section id="stats" className="bg-brand-light py-20 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">The platform enterprises trust</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-orange mb-2">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-slate-600 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
