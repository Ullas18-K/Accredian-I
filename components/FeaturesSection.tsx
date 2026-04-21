"use client";

import { motion } from "framer-motion";
import { featuresData } from "@/lib/data";
import { ArrowRight, BookOpen, LayoutDashboard, Users, MonitorPlay, Route, Award, BrainCircuit, Blocks } from "lucide-react";

// Helper to map icon string to actual Lucide component
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'LayoutDashboard': return <LayoutDashboard className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'MonitorPlay': return <MonitorPlay className="w-6 h-6" />;
    case 'Route': return <Route className="w-6 h-6" />;
    case 'Award': return <Award className="w-6 h-6" />;
    case 'BrainCircuit': return <BrainCircuit className="w-6 h-6" />;
    case 'Blocks': return <Blocks className="w-6 h-6" />;
    default: return <BookOpen className="w-6 h-6" />;
  }
};

export function FeaturesSection() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Everything your L&D team needs to scale.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            From curriculum design to analytics — Accredian Enterprise is the operating system for ambitious learning organizations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Highlight Left Border on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-orange scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              
              {feature.isPopular && (
                <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div className="w-12 h-12 bg-orange-50 text-brand-orange rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {getIcon(feature.icon)}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {feature.description}
              </p>
              
              <div className="mt-auto inline-flex items-center text-sm font-semibold text-slate-700 group-hover:text-brand-orange transition-colors">
                Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
