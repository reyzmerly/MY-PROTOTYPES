import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { businessConfig } from './config/businessConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import WhoItsFor from './components/WhoItsFor';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  const { sections, seo } = businessConfig;

  // Set up SEO meta tags
  useEffect(() => {
    document.title = seo.title;
    
    // Update meta tags
    const metaTags = [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `https://${seo.domain}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description }
    ];

    if (seo.ogImage) {
      metaTags.push(
        { property: 'og:image', content: seo.ogImage },
        { name: 'twitter:image', content: seo.ogImage }
      );
    }

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;
      let element = document.querySelector(`meta[${attribute}="${value}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, value);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });
  }, [seo]);

  return (
    <BrowserRouter>
      <div className="App min-h-screen bg-background">
        {/* Header */}
        {sections.header !== false && <Header />}

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          {sections.hero && <Hero />}

          {/* Problem Section */}
          {sections.problem && <Problem />}

          {/* Solution Section */}
          {sections.solution && <Solution />}

          {/* What We Do Section */}
          {sections.whatWeDo && <WhatWeDo />}

          {/* How It Works Section */}
          {sections.howItWorks && <HowItWorks />}

          {/* Who It's For Section */}
          {sections.whoItsFor && <WhoItsFor />}

          {/* Why Us Section */}
          {sections.whyUs && <WhyUs />}

          {/* CTA Section */}
          {sections.cta && <CTA />}
        </main>

        {/* Footer */}
        {sections.footer && <Footer />}

        {/* Toast Notifications */}
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;