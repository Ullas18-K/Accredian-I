export interface Stat {
  id: string;
  value: string;
  label: string;
  icon?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  initials: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  message?: string;
}

export interface ApiContactResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: any[];
}
