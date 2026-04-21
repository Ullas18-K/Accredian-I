"use client";

import { partnerLogos } from "@/lib/data";

const LogoTag = ({ text }: { text: string }) => (
  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border border-slate-200 rounded px-2 py-0.5 mb-2 hidden md:inline-block">
    {text}
  </span>
);

export function PartnersSection() {
  // Combine rows to create the marquee items
  const row1 = [
    { tag: "IIT", name: partnerLogos.iit[0] },
    { tag: "IIM", name: partnerLogos.iim[0] },
    { tag: "Global", name: partnerLogos.global[0] },
    { tag: "Industry", name: partnerLogos.industry[0] },
    { tag: "IIT", name: partnerLogos.iit[1] },
    { tag: "IIM", name: partnerLogos.iim[1] },
    { tag: "Global", name: partnerLogos.global[1] },
    { tag: "Industry", name: partnerLogos.industry[1] },
    { tag: "IIT", name: partnerLogos.iit[2] },
    { tag: "IIT", name: partnerLogos.iit[3] },
  ];

  const row2 = [
    { tag: "IIT", name: partnerLogos.iit[4] },
    { tag: "IIM", name: partnerLogos.iim[2] },
    { tag: "Global", name: partnerLogos.global[2] },
    { tag: "Industry", name: partnerLogos.industry[2] },
    { tag: "Industry", name: partnerLogos.industry[3] },
    { tag: "Industry", name: partnerLogos.industry[4] },
    // Repeat some to fill space
    { tag: "IIT", name: partnerLogos.iit[0] },
    { tag: "IIM", name: partnerLogos.iim[0] },
    { tag: "Global", name: partnerLogos.global[0] },
    { tag: "Industry", name: partnerLogos.industry[1] },
  ];

  return (
    <section id="partners" className="py-24 bg-brand-light border-y border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Built on world-class institutions.
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Our programs are co-designed and certified by India{"'"}s most prestigious academic institutions and global technology leaders.
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex flex-col gap-8 group">
        {/* Row 1 - Left to Right */}
        <div className="flex w-max relative">
          <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]" style={{ '--duration': '40s' } as React.CSSProperties}>
            {[...row1, ...row1].map((logo, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center min-w-[150px] px-4 md:px-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <LogoTag text={logo.tag} />
                <div className="text-xl md:text-2xl font-bold text-slate-700 whitespace-nowrap">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left (Reverse) */}
        <div className="flex w-max relative">
          <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]" style={{ '--duration': '45s', animationDirection: 'reverse' } as React.CSSProperties}>
            {[...row2, ...row2].map((logo, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center min-w-[150px] px-4 md:px-6 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300">
                <LogoTag text={logo.tag} />
                <div className="text-xl md:text-2xl font-bold text-slate-700 whitespace-nowrap">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Left/Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-1/6 md:w-1/4 bg-gradient-to-r from-brand-light to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-1/6 md:w-1/4 bg-gradient-to-l from-brand-light to-transparent pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 mt-16 flex justify-center gap-8 text-center text-sm font-bold text-slate-500 uppercase tracking-widest">
        <span>50+ Partner Institutions</span>
        <span className="hidden md:inline-block text-slate-300">|</span>
        <span>200+ Certified Programs</span>
      </div>
    </section>
  );
}
