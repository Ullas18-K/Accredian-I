# Accredian Enterprise Landing Page Clone

This project is a high-fidelity, responsive, and animated single-page website clone of the Accredian Enterprise landing page. Built as a full stack internship assignment, this application demonstrates proficiency with modern React ecosystem tools, performant animations, exact specification matching, and backend form handling.

## 🚀 Live URL
*(Replace with Vercel deploy link)*: [https://accredian-intern.vercel.app](https://accredian-intern.vercel.app)

## 📁 Repository
*(Replace with GitHub link)*: [https://github.com/yourusername/accredian-intern](https://github.com/yourusername/accredian-intern)

## 🛠️ Setup Instructions

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/accredian-intern.git
   cd accredian-intern
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Approach Taken

1. **Structured Component Architecture**: I broke the landing page down into 9 specific components (`Navbar`, `HeroSection`, `StatsSection`, `FeaturesSection`, etc.). All data is decoupled into `lib/data.ts` to keep the UI components clean and make future CMS integration trivial.
2. **Design Language & System**: I configured Tailwind (`tailwind.config.ts`) with custom brand colors matching Accredian's `#1E3A5F` and `#F97316`. Replaced the default font with Inter to ensure an enterprise SaaS aesthetic.
3. **Complex Interactions via Framer Motion**: Used Framer Motion extensively for staggered text reveals, scroll-based viewport animations, and a complex state-driven Stepper component in the "How It Works" section that animates layout changes cleanly.
4. **Form Handling with React Hook Form + Zod**: The `ContactForm` component uses Zod for type-safe client-side validation, passing data strictly securely to the backend API route.
5. **Backend JSON Store**: Leveraged Next.js 14 Route Handlers (`app/api/contact/route.ts`) to intercept form POST requests, validate the payload via Zod on the server again, and persist the data locally using the `fs` module to an appending `data/leads.json` file. 

## 🤖 AI Usage Explanation

During the development process, an AI coding assistant (Gemini/Antigravity) was used to rapidly generate boilerplate code, assemble Framer Motion keyframe logic, and convert the detailed prompt specifications into structured React components. 

* **Generated**: Initial scaffolding of `Tailwind` configs, generic layout structure, and `lucide-react` icon mapping.
* **Manually Adjusted/Improved**: Ensuring absolute pixel consistency, adjusting the complex `relative/absolute` positioning for the Hero Section dashboard mockup to perfectly match the specifications, wiring up the `react-hook-form` to properly handle asynchronous loading states with precise Framer Motion status UI transitions.

## 🔮 Future Improvements

With more time, I would:
- **Resend Integration**: Connect the API route to an actual email delivery service (like Resend) instead of a local JSON store.
- **Headless CMS integration (Sanity.io)**: Pipe the `lib/data.ts` static content from a CMS so marketing teams can edit copywriting without code redeploys.
- **Unit and E2E Testing**: Add Jest and React Testing Library for component unit tests, and Playwright for E2E user-flow testing (especially clicking through the Stepper and submitting the contact form).
- **Dark Mode**: Add full toggleable dark mode support using `next-themes`.
