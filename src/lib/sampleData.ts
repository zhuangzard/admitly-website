export interface School {
  id: number;
  name: string;
  location: string;
  grades: string;
  tuition: string;
  classSize: string;
  tags: string[];
  matchScore: number;
  description: string;
  type: string;
  distance: string;
}

export const sampleSchools: School[] = [
  {
    id: 1,
    name: "Riverside Preparatory Academy",
    location: "McLean, VA",
    grades: "K-12",
    tuition: "$28,500/year",
    classSize: "15 students",
    tags: ["STEM Focus", "Small Classes", "Need-Based Aid"],
    matchScore: 92,
    description: "A college-preparatory school with strong STEM programs and personalized learning.",
    type: "Co-educational",
    distance: "2.3 miles"
  },
  {
    id: 2,
    name: "Georgetown Academy",
    location: "Washington, DC",
    grades: "6-12",
    tuition: "$32,000/year",
    classSize: "12 students",
    tags: ["Arts Focus", "Diverse Community", "College Prep"],
    matchScore: 89,
    description: "An arts-focused preparatory school in the heart of DC.",
    type: "Co-educational",
    distance: "5.1 miles"
  },
  {
    id: 3,
    name: "Potomac Girls School",
    location: "Bethesda, MD",
    grades: "K-8",
    tuition: "$22,500/year",
    classSize: "18 students",
    tags: ["All Girls", "Leadership", "Community Service"],
    matchScore: 87,
    description: "Empowering young women through academic excellence and leadership development.",
    type: "All Girls",
    distance: "3.7 miles"
  },
  {
    id: 4,
    name: "Capitol Hill Montessori",
    location: "Washington, DC",
    grades: "PreK-6",
    tuition: "$18,900/year",
    classSize: "20 students",
    tags: ["Montessori", "Multilingual", "Outdoor Learning"],
    matchScore: 85,
    description: "A Montessori school emphasizing hands-on learning and multilingual education.",
    type: "Co-educational",
    distance: "4.2 miles"
  },
  {
    id: 5,
    name: "St. Matthews Episcopal",
    location: "Arlington, VA",
    grades: "PreK-12",
    tuition: "$24,800/year",
    classSize: "16 students",
    tags: ["Religious", "Community", "Traditional"],
    matchScore: 84,
    description: "A traditional Episcopal school with strong community values.",
    type: "Co-educational",
    distance: "6.8 miles"
  },
  {
    id: 6,
    name: "Innovation STEM Academy",
    location: "Rockville, MD",
    grades: "9-12",
    tuition: "$35,200/year",
    classSize: "14 students",
    tags: ["STEM", "Technology", "Innovation"],
    matchScore: 91,
    description: "A cutting-edge STEM-focused high school preparing students for tech careers.",
    type: "Co-educational",
    distance: "8.1 miles"
  },
  {
    id: 7,
    name: "Waldorf School of Fairfax",
    location: "Fairfax, VA",
    grades: "PreK-8",
    tuition: "$19,500/year",
    classSize: "22 students",
    tags: ["Waldorf", "Creative Arts", "Nature-Based"],
    matchScore: 82,
    description: "A Waldorf school emphasizing creativity, imagination, and artistic expression.",
    type: "Co-educational",
    distance: "7.3 miles"
  },
  {
    id: 8,
    name: "The Preparatory School",
    location: "Alexandria, VA",
    grades: "K-12",
    tuition: "$29,800/year",
    classSize: "17 students",
    tags: ["College Prep", "Athletics", "Honor Code"],
    matchScore: 88,
    description: "A rigorous college preparatory school with strong athletic programs.",
    type: "Co-educational",
    distance: "4.9 miles"
  },
  {
    id: 9,
    name: "Chesapeake Bay Academy",
    location: "Annapolis, MD",
    grades: "6-12",
    tuition: "$26,400/year",
    classSize: "19 students",
    tags: ["Marine Science", "Sailing", "Environmental"],
    matchScore: 86,
    description: "A unique school focusing on marine science and environmental stewardship.",
    type: "Co-educational",
    distance: "12.5 miles"
  }
];

export interface ProcessStep {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    title: "Create Your Profile",
    description: "Tell us about your child's interests, academic performance, and family priorities to help us understand your unique needs.",
    features: [
      "Comprehensive academic assessment",
      "Interest and personality inventory",
      "Family preferences and values",
      "Budget and location planning"
    ],
    icon: "👤"
  },
  {
    title: "Discover Perfect Schools",
    description: "Our AI analyzes thousands of data points to match your family with schools that align with your values and goals.",
    features: [
      "AI-powered school matching",
      "Detailed school profiles and insights",
      "Virtual school tours and videos",
      "Admission requirements breakdown"
    ],
    icon: "🔍"
  },
  {
    title: "Prepare & Practice",
    description: "Access personalized preparation materials and practice tools to maximize your admission success.",
    features: [
      "School-specific interview preparation",
      "Application essay guidance",
      "Mock interviews with feedback",
      "Timeline and deadline management"
    ],
    icon: "🎯"
  },
  {
    title: "Apply & Succeed",
    description: "Submit strong applications with confidence and track your progress throughout the admission process.",
    features: [
      "Application submission support",
      "Progress tracking dashboard",
      "Admission decision analysis",
      "Enrollment guidance and support"
    ],
    icon: "🎓"
  }
];

export interface PricingPlan {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  color: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Explorer",
    price: 88,
    description: "Perfect for families just starting their private school search journey",
    features: [
      "School search engine with basic filters",
      "Academic and interest assessments",
      "Access to course library (20+ hours)",
      "Application timeline planning",
      "Email support"
    ],
    cta: "Start Free Trial",
    featured: false,
    color: "gray"
  },
  {
    name: "Navigator",
    price: 288,
    originalPrice: 350,
    description: "Complete guidance for families serious about finding the perfect fit",
    features: [
      "Everything in Explorer",
      "AI-powered school matching",
      "Personalized interview preparation",
      "One-on-one student coaching session",
      "Parent interview guidance",
      "Application review service",
      "Priority support"
    ],
    cta: "Get Started",
    featured: true,
    color: "primary"
  },
  {
    name: "Compass",
    price: 888,
    originalPrice: 1200,
    description: "Premium support with expert consultants for maximum success",
    features: [
      "Everything in Navigator",
      "Dedicated admissions consultant",
      "Multiple one-on-one coaching sessions",
      "School visit planning and support",
      "Financial aid guidance",
      "Local consultant network access",
      "Success guarantee program"
    ],
    cta: "Premium Access",
    featured: false,
    color: "accent"
  }
];

export interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  content: string;
  school: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    location: "McLean, VA",
    avatar: "SJ",
    content: "Admitly helped us find the perfect school for Emma. The AI matching was incredibly accurate, and the interview prep made all the difference.",
    school: "Riverside Preparatory Academy",
    rating: 5
  },
  {
    name: "Michael Chen",
    location: "Bethesda, MD",
    avatar: "MC",
    content: "The personalized guidance saved us thousands compared to traditional consultants. Our daughter got into her top choice school!",
    school: "Georgetown Academy",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    location: "Arlington, VA",
    avatar: "AR",
    content: "As a busy parent, I loved having everything in one place. The timeline kept us organized throughout the entire process.",
    school: "Innovation STEM Academy",
    rating: 5
  }
];

export const schoolTypes = [
  "Co-educational",
  "All Boys",
  "All Girls",
  "Religious",
  "Non-religious",
  "Montessori",
  "Waldorf",
  "International Baccalaureate"
];

export const gradeLevels = [
  "Pre-K",
  "Kindergarten",
  "Elementary (K-5)",
  "Middle School (6-8)",
  "High School (9-12)"
];

export const tuitionRanges = [
  "Under $15,000",
  "$15,000 - $25,000",
  "$25,000 - $35,000",
  "$35,000+"
];