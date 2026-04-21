"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/lib/data";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Trusted by India{"'"}s fastest-growing companies.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Hear from the L&D leaders and CHROs who transformed their organizations with Accredian Enterprise.
          </motion.p>
        </div>

        {/* Mobile carousel, desktop grid */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-8 lg:pb-0 snap-x snap-mandatory hide-scrollbars">
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[85vw] md:min-w-[350px] lg:min-w-0 snap-center bg-brand-light p-8 rounded-3xl border border-slate-200 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-200 group-hover:text-amber-100 transition-colors" />
              <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto relative z-10 border-t border-slate-200/60 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-amber-500 flex items-center justify-center text-white font-bold shadow-md shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                  <p className="text-sm text-slate-500">{testimonial.title} · <span className="font-medium text-brand-orange">{testimonial.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
