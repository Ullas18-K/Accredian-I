"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Stats", id: "stats" },
  { label: "Clients", id: "partners" },
  { label: "Accredian Edge", id: "accredian-edge" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQs", id: "faqs" },
  { label: "Testimonials", id: "testimonials" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Scroll Spy Logic
      const sectionElements = NAV_LINKS.map((link) => {
        const el = document.getElementById(link.id);
        return { id: link.id, element: el };
      });

      const currentScrollPosition = window.scrollY + 120; // sticky header offset
      let currentActiveId = "home";
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          if (section.element.offsetTop <= currentScrollPosition) {
            currentActiveId = section.id;
            break;
          }
        }
      }

      setActiveSection(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
          : "bg-white py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className="bg-brand-orange p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">
            Accredian <span className="font-medium text-slate-500 text-[0.95em]">Enterprise</span>
          </span>
        </Link>

        {/* Desktop Nav Actions */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
          <ul className="flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "py-2 text-sm xl:text-base font-semibold whitespace-nowrap transition-all relative block",
                      isActive
                        ? "text-brand-orange"
                        : "text-slate-600 hover:text-slate-900"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-4 left-0 w-full h-[3px] bg-brand-orange rounded-t-md shadow-[0_-2px_8px_rgba(249,115,22,0.4)]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-4 xl:gap-6">
          <a
            href="#contact"
            className="text-sm xl:text-base font-bold bg-brand-orange text-white px-5 py-2.5 rounded-md hover:bg-orange-600 transition-all shadow-sm hover:shadow active:scale-95 transform"
          >
            Get a Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg p-4 flex flex-col gap-4 lg:hidden max-h-[80vh] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={cn(
                "text-left text-base font-medium p-3 rounded-md transition-colors",
                activeSection === link.id
                   ? "bg-orange-50 text-brand-orange font-bold"
                   : "text-slate-700 hover:bg-slate-50"
              )}
            >
              {link.label}
            </button>
          ))}
          <div className="h-px bg-slate-200 my-1" />
          <button className="w-full text-center text-base font-medium text-slate-700 p-3 hover:bg-slate-50 rounded-md">
            Sign In
          </button>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center text-base font-medium bg-brand-orange text-white p-3 rounded-md animate-pulse shadow-sm"
          >
            Get a Demo
          </a>
        </div>
      )}
    </header>
  );
}
