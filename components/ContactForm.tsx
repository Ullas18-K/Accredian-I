"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  teamSize: z.string().min(1, "Please select team size"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light rounded-l-[100px] -z-10 transform translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Copy & Perks */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
              Let{"'"}s build your learning future together.
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Fill in the form and one of our enterprise L&D consultants will reach out within 24 hours to discuss your team{"'"}s upskilling needs.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Free 30-min platform walkthrough with your use case",
                "Custom program recommendation for your industry",
                "Pricing tailored to your team size and scope",
                "No commitment, no spam — just a conversation"
              ].map((perk, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{perk}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-slate-600">
              <Mail className="w-5 h-5 text-brand-orange" />
              <a href="mailto:enterprise@accredian.com" className="hover:text-brand-orange transition-colors font-medium">
                enterprise@accredian.com
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center z-10"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-slate-600">
                    Thanks for reaching out. An L&D consultant will be in touch with you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus("idle")}
                    className="mt-8 text-brand-blue font-medium hover:underline"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name *</label>
                  <input
                    id="name"
                    {...register("name")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all",
                      errors.name ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-slate-200 focus:border-brand-orange"
                    )}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Work Email *</label>
                  <input
                    id="email"
                    {...register("email")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all",
                      errors.email ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-slate-200 focus:border-brand-orange"
                    )}
                    placeholder="jane@company.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company Name *</label>
                  <input
                    id="company"
                    {...register("company")}
                    className={cn(
                      "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all",
                      errors.company ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-slate-200 focus:border-brand-orange"
                    )}
                    placeholder="Acme Corp"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                </div>
                <div className="space-y-1.5 relative">
                  <label htmlFor="teamSize" className="text-sm font-semibold text-slate-700">Team Size *</label>
                  <div className="relative">
                    <select
                      id="teamSize"
                      {...register("teamSize")}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all appearance-none",
                        errors.teamSize ? "border-red-400 focus:border-red-400 focus:ring-red-400/20" : "border-slate-200 focus:border-brand-orange"
                      )}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1–10</option>
                      <option value="11-50">11–50</option>
                      <option value="51-200">51–200</option>
                      <option value="201-500">201–500</option>
                      <option value="501-1000">501–1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  </div>
                  {errors.teamSize && <p className="text-red-500 text-xs mt-1">{errors.teamSize.message}</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message (Optional)</label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange transition-all resize-none"
                  placeholder="Tell us about your learning objectives..."
                />
              </div>

              {submitStatus === "error" && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <p>{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange text-white font-bold text-lg py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Request a Free Demo"
                )}
              </button>
              
              <p className="text-center text-xs text-slate-500">
                By submitting, you agree to our <a href="#" className="underline hover:text-slate-700">Privacy Policy</a>. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
