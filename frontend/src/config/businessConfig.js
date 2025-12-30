/**
 * Business Configuration File
 * 
 * This is the central configuration for customizing the website for different businesses.
 * Simply update the values here to rebrand the entire site.
 */

export const businessConfig = {
  // ===== BUSINESS INFORMATION =====
  businessName: "Kora Business",
  tagline: "Do business. Be visible. Get customers.",
  description: "Helping small and local businesses become visible online, attract real customers, and turn WhatsApp conversations into sales.",
  
  // ===== CONTACT INFORMATION =====
  whatsappNumber: "1234567890", // International format without + or spaces
  whatsappMessage: "Hi! I'm interested in getting my business online with Kora Business.",
  email: "hello@korabusiness.com",
  phone: "+1 (234) 567-8900",
  
  // ===== LOCATION & HOURS =====
  location: {
    enabled: false,
    address: "123 Business Street, City, Country",
    googleMapsUrl: "",
    coordinates: { lat: 0, lng: 0 }
  },
  businessHours: {
    enabled: false,
    hours: [
      { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
      { day: "Saturday", time: "10:00 AM - 4:00 PM" },
      { day: "Sunday", time: "Closed" }
    ]
  },
  
  // ===== SOCIAL MEDIA =====
  socialMedia: {
    facebook: "",
    instagram: "",
    twitter: "",
    linkedin: ""
  },
  
  // ===== SECTIONS VISIBILITY =====
  sections: {
    hero: true,
    problem: true,
    solution: true,
    whatWeDo: true,
    howItWorks: true,
    whoItsFor: true,
    whyUs: true,
    socialProof: false, // Enable when you have testimonials
    cta: true,
    footer: true
  },
  
  // ===== SEO CONFIGURATION =====
  seo: {
    title: "Kora Business - Get Your Business Online & Visible",
    description: "Helping small businesses become visible online, attract customers, and grow through WhatsApp. Professional website, Google visibility, and customer management.",
    keywords: "business website, online presence, WhatsApp business, Google visibility, local business, small business marketing",
    ogImage: "", // URL to Open Graph image
    domain: "korabusiness.com"
  },
  
  // ===== HERO SECTION =====
  hero: {
    headline: "Your business deserves to be seen",
    subheadline: "The average internet user spends almost 7 hours a day online — searching, chatting, buying, and deciding. If your business is not visible where people search and communicate, it slowly disappears.",
    description: "Kora Business builds and manages your digital presence, so customers can find you, trust you, and contact you instantly.",
    cta: {
      primary: "Start with WhatsApp",
      secondary: "See how it works"
    },
    stats: [
      { value: "7hrs", label: "Daily online time" },
      { value: "100%", label: "WhatsApp-first" },
      { value: "24/7", label: "Always visible" }
    ]
  },
  
  // ===== PROBLEM SECTION =====
  problem: {
    headline: "The Problem",
    subheadline: "Having a website or social media page does not automatically mean visibility.",
    problems: [
      {
        icon: "eye-slash",
        title: "Being invisible on Google",
        description: "Customers can't find you when they search"
      },
      {
        icon: "phone-slash",
        title: "Customers unable to find correct contact details",
        description: "Lost opportunities due to outdated information"
      },
      {
        icon: "shopping-cart",
        title: "No clear way to order or request services",
        description: "Customers don't know how to engage with you"
      },
      {
        icon: "puzzle-piece",
        title: "Too many apps that don't work together",
        description: "Scattered tools create confusion and inefficiency"
      },
      {
        icon: "dollar-sign",
        title: "Expensive developers and monthly fees",
        description: "High costs without guaranteed results"
      }
    ],
    conclusion: "Without visibility, even good businesses sink into anonymity."
  },
  
  // ===== SOLUTION SECTION =====
  solution: {
    headline: "Our Solution",
    tagline: "We turn your online presence into a customer engine",
    description: "Building digital presence is like shouting in a crowded market. You need the right tools — a megaphone — not just your voice. Kora Business provides that megaphone.",
    features: [
      "Find you on Google",
      "Understand what you offer",
      "Contact you instantly on WhatsApp",
      "Order or request services easily"
    ],
    closing: "And we manage it for you."
  },
  
  // ===== WHAT WE DO SECTION =====
  whatWeDo: {
    headline: "What We Do",
    tagline: "Complete Digital Presence Setup",
    description: "We design, connect, and optimize:",
    services: [
      {
        icon: "globe",
        title: "Professional Business Landing Page",
        description: "Beautiful, mobile-responsive website that showcases your business"
      },
      {
        icon: "search",
        title: "Google Business Profile Setup",
        description: "Get found on Google Maps and Search with optimized visibility"
      },
      {
        icon: "message-circle",
        title: "WhatsApp Ordering & Communication",
        description: "Direct customer connection through the platform they already use"
      },
      {
        icon: "package",
        title: "Service or Product Catalog",
        description: "Clear presentation of what you offer with easy browsing"
      },
      {
        icon: "map-pin",
        title: "Location Visibility on Maps",
        description: "Make it easy for customers to find and visit your location"
      }
    ],
    closing: "Everything works together."
  },
  
  // ===== HOW IT WORKS SECTION =====
  howItWorks: {
    headline: "How It Works",
    steps: [
      {
        number: "01",
        title: "We understand your business",
        description: "You tell us what you do, where you operate, and how customers should contact you."
      },
      {
        number: "02",
        title: "We build your online visibility",
        description: "We create your landing page, connect WhatsApp, and optimize Google visibility."
      },
      {
        number: "03",
        title: "Customers find you & message you",
        description: "Customers discover your business online and contact you instantly."
      },
      {
        number: "04",
        title: "You focus on serving, not tech",
        description: "We handle the digital side while you run your business."
      }
    ]
  },
  
  // ===== WHO IT'S FOR SECTION =====
  whoItsFor: {
    headline: "Who It's For",
    description: "Kora Business is built for:",
    targetAudience: [
      "Local businesses",
      "Solo entrepreneurs",
      "Service providers",
      "Small shops and startups",
      "Businesses starting their online journey"
    ],
    closing: "If customers search for you online — you need Kora Business."
  },
  
  // ===== WHY US SECTION =====
  whyUs: {
    headline: "Why Kora Business",
    benefits: [
      {
        icon: "check-circle",
        title: "Simple and affordable",
        description: "No complexity, no hidden costs"
      },
      {
        icon: "users",
        title: "No technical knowledge needed",
        description: "We handle everything for you"
      },
      {
        icon: "message-square",
        title: "WhatsApp-first",
        description: "Customers already use it"
      },
      {
        icon: "map",
        title: "Built for local markets",
        description: "Optimized for your community"
      },
      {
        icon: "trending-up",
        title: "Scalable as you grow",
        description: "Grows with your business needs"
      }
    ],
    tagline: "We don't sell websites.",
    closing: "We build visibility that brings customers."
  },
  
  // ===== SOCIAL PROOF SECTION =====
  socialProof: {
    headline: "Trusted by Businesses Like Yours",
    testimonials: [
      {
        name: "John Doe",
        business: "Doe's Coffee Shop",
        content: "Since working with Kora Business, we've seen a 300% increase in customer inquiries through WhatsApp.",
        rating: 5
      }
      // Add more testimonials as needed
    ]
  },
  
  // ===== CTA SECTION =====
  cta: {
    headline: "Ready to be visible?",
    subheadline: "Stop being invisible online.",
    description: "Let Kora Business build your digital presence and connect you to real customers.",
    buttonText: "Start now on WhatsApp"
  },
  
  // ===== FOOTER =====
  footer: {
    tagline: "Helping businesses grow through visibility.",
    copyright: `© ${new Date().getFullYear()} Kora Business. All rights reserved.`,
    links: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Service", url: "#" }
    ]
  }
};

export default businessConfig;