"use client";

import { motion } from "framer-motion";
import { Lightbulb, UserCheck, RefreshCw, Globe, Maximize2, Target, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const edgeData = [
  {
    id: 1,
    title: "Tailored Solutions",
    description: "Programs customized to your organization's goals and challenges.",
    icon: Lightbulb,
    position: "top",
  },
  {
    id: 2,
    title: "Expert Guidance",
    description: "Learn from industry leaders with real-world success.",
    icon: UserCheck,
    position: "bottom",
  },
  {
    id: 3,
    title: "Innovative Framework",
    description: "Proprietary methods for impactful, application-driven results.",
    icon: RefreshCw,
    position: "top",
  },
  {
    id: 4,
    title: "Advanced Technology",
    description: "State-of-the-art LMS for seamless learning experiences.",
    icon: Globe,
    position: "bottom",
  },
  {
    id: 5,
    title: "Diverse Offerings",
    description: "Courses across industries, skill levels, and emerging fields.",
    icon: Maximize2,
    position: "top",
  },
  {
    id: 6,
    title: "Proven Impact",
    description: "Trusted by leading organizations for measurable ROI.",
    icon: Target,
    position: "bottom",
  },
  {
    id: 7,
    title: "Flexible Delivery",
    description: "Online and offline options tailored to your needs.",
    icon: Package,
    position: "top",
  },
];

export function AccredianEdge() {
  return (
    <section id="accredian-edge" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            The <span className="text-brand-orange">Accredian Edge</span>
          </h2>
          <p className="text-slate-500 text-lg">Key Aspects of Our Strategic Training</p>
        </div>

        <div className="relative max-w-6xl mx-auto hidden lg:block">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-slate-300 -translate-y-1/2 z-0" />
          
          <div className="flex justify-between relative z-10">
            {edgeData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative w-32 flex flex-col items-center justify-center group">
                  {/* Top content */}
                  <div className={cn(
                    "absolute w-48 text-left transition-all duration-300 group-hover:-translate-y-2",
                    item.position === "top" ? "bottom-full mb-8 -ml-8" : "opacity-0 pointer-events-none"
                  )}>
                    {item.position === "top" && (
                      <>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight mb-1 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mr-1.5" />
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 ml-3">{item.description}</p>
                      </>
                    )}
                  </div>

                  {/* Circle Icon */}
                  <div className="w-20 h-20 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center shadow-[0_8px_16px_rgb(0_0_0_/_0.08)] bg-gradient-to-b from-orange-400 to-orange-600 text-white transform transition-transform duration-300 group-hover:scale-110">
                     <Icon className="w-8 h-8" />
                  </div>

                  {/* Bottom content */}
                  <div className={cn(
                    "absolute w-48 text-left transition-all duration-300 group-hover:translate-y-2",
                    item.position === "bottom" ? "top-full mt-8 -ml-8" : "opacity-0 pointer-events-none"
                  )}>
                    {item.position === "bottom" && (
                      <>
                        <h4 className="font-bold text-sm text-slate-900 leading-tight mb-1 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mr-1.5" />
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 ml-3">{item.description}</p>
                        {/* Connecting stick to circle for bottom items */}
                        <div className="absolute top-[-32px] left-[38px] w-px h-6 bg-orange-400" />
                      </>
                    )}
                  </div>
                  
                  {/* Connecting stick to circle for top items */}
                  {item.position === "top" && (
                    <div className="absolute top-[-24px] left-1/2 w-px h-6 bg-orange-400" />
                  )}

                  {/* Right directional arrows to next circle on dashed line */}
                  {index < edgeData.length - 1 && (
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-slate-300 font-bold tracking-widest leading-none bg-white px-1">
                      &gt;&gt;
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View of Accredian Edge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden max-w-2xl mx-auto">
          {edgeData.map((item) => {
             const Icon = item.icon;
             return (
               <div key={item.id} className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
                 <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400 to-brand-orange text-white shadow-lg mb-4">
                   <Icon className="w-8 h-8" />
                 </div>
                 <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                 <p className="text-sm text-slate-600">{item.description}</p>
               </div>
             )
          })}
        </div>

      </div>
    </section>
  );
}
