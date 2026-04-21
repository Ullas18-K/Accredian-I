import { GraduationCap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange p-1.5 rounded-lg">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Accredian <span className="font-normal text-slate-400 text-lg">Enterprise</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              India{"'"}s most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {["Enterprise Learning", "Custom Programs", "Analytics Dashboard", "HR Integrations", "Certificates"].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Programs</h4>
            <ul className="space-y-3">
              {["Data Science & AI", "Product Management", "Leadership", "Business Analytics", "Cloud Computing"].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Press", "Contact"].map((link) => (
                <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 Accredian. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
