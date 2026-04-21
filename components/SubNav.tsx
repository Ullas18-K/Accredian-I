"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const SUB_NAV_LINKS = [
  "Home",
  "Stats",
  "Clients",
  "Accredian Edge",
  "CAT",
  "How It Works",
  "FAQs",
  "Testimonials"
];

export function SubNav() {
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <div className="w-full bg-white border-b border-slate-200 sticky top-[76px] z-40 hidden md:block">
      <div className="container mx-auto px-4 md:px-6">
        <ul className="flex items-center justify-center space-x-8 overflow-x-auto hide-scrollbars">
          {SUB_NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => setActiveItem(link)}
                className={cn(
                  "py-4 px-2 text-sm font-medium whitespace-nowrap transition-colors relative",
                  activeItem === link
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                )}
              >
                {link}
                {activeItem === link && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-t-md" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
