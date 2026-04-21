import { Stat, Feature, Testimonial } from "./types";

export const statsData: Stat[] = [
  { id: "1", value: "500+", label: "Enterprise Clients" },
  { id: "2", value: "50K+", label: "Learners Upskilled" },
  { id: "3", value: "98%", label: "Satisfaction Rate" },
  { id: "4", value: "200+", label: "Curated Programs" },
  { id: "5", value: "94%", label: "Completion Rate" },
  { id: "6", value: "50+", label: "University Partners" },
];

export const featuresData: Feature[] = [
  {
    id: "f1",
    title: "World-Class Curriculum",
    description: "Programs co-designed with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.",
    icon: "BookOpen",
    isPopular: true,
  },
  {
    id: "f2",
    title: "Enterprise L&D Dashboard",
    description: "Real-time analytics on learner progress, engagement metrics, and ROI reporting — all in one command center.",
    icon: "LayoutDashboard",
  },
  {
    id: "f3",
    title: "Expert Mentor Network",
    description: "1:1 live sessions with industry practitioners. Over 500 mentors across AI/ML, Data Science, Product, and Leadership.",
    icon: "Users",
  },
  {
    id: "f4",
    title: "Live Cohort Learning",
    description: "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%.",
    icon: "MonitorPlay",
  },
  {
    id: "f5",
    title: "Custom Learning Paths",
    description: "Tailor programs to your organization's skill gaps, industry context, and strategic goals. No one-size-fits-all.",
    icon: "Route",
    isPopular: true,
  },
  {
    id: "f6",
    title: "Accredited Certificates",
    description: "Globally recognized credentials from partner institutions. Verifiable, shareable, and career-defining.",
    icon: "Award",
  },
  {
    id: "f7",
    title: "AI-Powered Personalization",
    description: "Adaptive learning engine surfaces the right content at the right time, maximizing engagement and retention.",
    icon: "BrainCircuit",
  },
  {
    id: "f8",
    title: "Seamless HR Integration",
    description: "Native integrations with Workday, SAP SuccessFactors, and major HRMS platforms for frictionless deployment.",
    icon: "Blocks",
  },
];

export const howItWorksSteps = [
  {
    id: "s1",
    title: "01 Needs Assessment",
    description: "We start with a deep-dive audit of your team's skill gaps and strategic objectives. Our L&D consultants conduct structured interviews, skills benchmarking, and role-based gap analysis...",
    image: "search-icon",
  },
  {
    id: "s2",
    title: "02 Program Design",
    description: "Custom learning paths are architected with your domain, culture, and timelines in mind. From curriculum selection to cohort composition and mentor matching...",
    image: "compass-icon",
  },
  {
    id: "s3",
    title: "03 Deployment & Onboarding",
    description: "Seamless rollout with zero disruption to your team's workflow. White-glove onboarding, SSO integration, HRMS sync, and dedicated account management...",
    image: "rocket-icon",
  },
  {
    id: "s4",
    title: "04 Track & Optimize",
    description: "Live dashboards surface progress, risks, and ROI in real time. Monthly business reviews, completion nudges, and adaptive content recommendations...",
    image: "bar-chart-icon",
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    author: "Priya Sharma",
    title: "Chief People Officer",
    company: "Razorpay",
    initials: "PS",
  },
  {
    id: "t2",
    quote: "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    author: "Vikram Nair",
    title: "VP of Engineering",
    company: "PhonePe",
    initials: "VN",
  },
  {
    id: "t3",
    quote: "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    author: "Ananya Krishnan",
    title: "Head of L&D",
    company: "Infosys BPM",
    initials: "AK",
  },
];

export const partnerLogos = {
  iit: ["IIT Delhi", "IIT Bombay", "IIT Kanpur", "IIT Madras", "IIT Roorkee"],
  iim: ["IIM Bangalore", "IIM Kozhikode", "IIM Lucknow"],
  global: ["Great Lakes", "NUS Singapore", "MIT xPRO"],
  industry: ["Google", "Microsoft", "Amazon AWS", "IBM", "Tableau"],
};
