# Kora Business - Template-Based Business Website System

## 🎯 Overview

Kora Business is a **modular, reusable business website template** designed to help you quickly deploy professional websites for multiple clients. The system is built with a **WhatsApp-first approach** and optimized for local businesses.

One codebase → Infinite businesses. Just update the config file!

---

## ✨ Key Features

### 🔧 Template-Based Architecture
- **Single configuration file** controls all business data
- **Toggle sections** on/off per business need
- **Easy rebranding** - colors, fonts, logos
- **SEO-ready** with editable meta tags

### 📱 WhatsApp-First
- Pre-filled WhatsApp messages
- One-click customer contact
- Configurable phone numbers
- Custom message templates

### 🎨 Professional Design
- Modern, trust-building design
- Professional blue & warm orange color scheme
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Clean typography (Space Grotesk + Inter)

### 🧩 Modular Sections
- Hero with stats
- Problem statement
- Solution presentation
- Services/What We Do
- How It Works (step-by-step)
- Target audience
- Benefits/Why Us
- Call-to-action
- Footer with contact

---

## 🚀 Quick Start

### 1. Configure Your Business

Edit `/app/frontend/src/config/businessConfig.js`:

```javascript
export const businessConfig = {
  // === BUSINESS INFORMATION ===
  businessName: "Your Business Name",
  tagline: "Your catchy tagline",
  description: "Brief description of your business",
  
  // === CONTACT INFORMATION ===
  whatsappNumber: "1234567890", // International format
  whatsappMessage: "Hi! I'm interested in your services.",
  email: "hello@yourbusiness.com",
  phone: "+1 (234) 567-8900",
  
  // === TOGGLE SECTIONS ===
  sections: {
    hero: true,
    problem: true,    // Set to false to hide
    solution: true,
    whatWeDo: true,
    howItWorks: true,
    whoItsFor: true,
    whyUs: true,
    cta: true,
    footer: true
  },
  
  // === SEO ===
  seo: {
    title: "Your Business - Get Online",
    description: "Your SEO description",
    keywords: "keyword1, keyword2, keyword3",
    domain: "yourbusiness.com"
  }
};
```

### 2. Customize Content

Each section in the config has editable content:

```javascript
hero: {
  headline: "Your custom headline",
  subheadline: "Your subheadline",
  cta: {
    primary: "Get Started",
    secondary: "Learn More"
  },
  stats: [
    { value: "100+", label: "Happy Clients" },
    { value: "24/7", label: "Support" }
  ]
}
```

### 3. Deploy for New Client

**Option 1: Same codebase, different configs**
```bash
# Create new config file
cp businessConfig.js businessConfig_client2.js

# Update App.js to import correct config
import { businessConfig } from './config/businessConfig_client2';
```

**Option 2: Environment-based configs**
```javascript
// Use environment variable to switch configs
const configName = process.env.REACT_APP_CLIENT || 'default';
const businessConfig = require(`./config/${configName}`);
```

---

## 🎨 Branding & Customization

### Change Colors

Edit `/app/frontend/src/index.css`:

```css
:root {
  /* Primary Brand Color */
  --primary: 217 71% 53%;        /* Professional Blue */
  --primary-light: 217 71% 65%;
  --primary-dark: 217 71% 43%;
  
  /* Secondary/Accent Color */
  --secondary: 24 95% 53%;       /* Warm Orange */
  --secondary-light: 24 95% 65%;
  
  /* Success/Accent Green */
  --accent: 142 76% 36%;
}
```

**Color Format:** HSL format (Hue Saturation% Lightness%)

**Quick Color Changes:**
- **Blue → Purple:** Change primary hue from `217` to `260`
- **Orange → Red:** Change secondary hue from `24` to `0`
- **Green → Teal:** Change accent hue from `142` to `180`

### Change Fonts

Update the Google Fonts import in `index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourHeadingFont:wght@600;700&family=YourBodyFont:wght@400;500&display=swap');
```

Then update the font families:

```css
body {
  font-family: 'YourBodyFont', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'YourHeadingFont', sans-serif;
}
```

### Add Your Logo

Replace the text logo in `/app/frontend/src/components/Header.jsx`:

```jsx
// Replace this:
<button className="text-xl font-bold">
  {businessConfig.businessName}
</button>

// With this:
<img 
  src="/path/to/your-logo.png" 
  alt={businessConfig.businessName}
  className="h-10"
/>
```

---

## 📱 WhatsApp Integration

### How It Works

The system uses WhatsApp's URL scheme:
```
https://wa.me/1234567890?text=Your%20pre-filled%20message
```

### Customize Messages

Edit messages in `businessConfig.js`:

```javascript
// Default message
whatsappMessage: "Hi! I'm interested in your services.",

// Or use action-specific messages
// The system auto-generates messages for:
// - 'get-started': Initial inquiry
// - 'inquiry': General questions
// - 'demo': Request demo
```

### Add Custom WhatsApp Actions

Edit `/app/frontend/src/utils/whatsapp.js`:

```javascript
export const getWhatsAppUrlForAction = (action, details = {}) => {
  switch (action) {
    case 'booking':
      message = `I'd like to book ${details.service}`;
      break;
    case 'quote':
      message = `Please send me a quote for ${details.product}`;
      break;
    // Add your custom actions
  }
  return getWhatsAppUrl(message);
};
```

---

## 🔧 Advanced Customization

### Add New Sections

1. Create component: `/app/frontend/src/components/YourSection.jsx`

```jsx
import React from 'react';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';

export const YourSection = () => {
  const { yourSection } = businessConfig;
  
  return (
    <SectionWrapper id="your-section">
      <h2>{yourSection.headline}</h2>
      {/* Your content */}
    </SectionWrapper>
  );
};
```

2. Add to config: `businessConfig.js`

```javascript
sections: {
  yourSection: true  // Toggle on/off
},
yourSection: {
  headline: "Your Content",
  // ... your data
}
```

3. Import in `App.js`:

```javascript
import YourSection from './components/YourSection';

// Add to render:
{sections.yourSection && <YourSection />}
```

### Modify Existing Sections

All section components follow the same pattern:
- Import config: `import { businessConfig } from '../config/businessConfig';`
- Destructure data: `const { section } = businessConfig;`
- Render using config data

Example - Customize Problem section icons:

```javascript
// In businessConfig.js
problem: {
  problems: [
    {
      icon: "custom-icon-name",  // Add your icon name
      title: "Problem Title",
      description: "Description"
    }
  ]
}

// In Problem.jsx, add to iconMap:
const iconMap = {
  'custom-icon-name': YourLucideIcon
};
```

---

## 📊 Section Reference

### Available Sections

| Section | Purpose | Config Key | ID |
|---------|---------|------------|-----|
| Hero | Main headline & CTA | `hero` | `#hero` |
| Problem | Pain points | `problem` | `#problem` |
| Solution | Your solution | `solution` | `#solution` |
| What We Do | Services/features | `whatWeDo` | `#what-we-do` |
| How It Works | Process steps | `howItWorks` | `#how-it-works` |
| Who It's For | Target audience | `whoItsFor` | `#who-its-for` |
| Why Us | Benefits/USPs | `whyUs` | `#why-us` |
| CTA | Final call-to-action | `cta` | N/A |
| Footer | Contact & links | `footer` | N/A |

### Section Toggles

Hide any section by setting to `false`:

```javascript
sections: {
  problem: false,      // Hide problem section
  whoItsFor: false,    // Hide target audience
  // Others remain visible
}
```

---

## 🎭 Use Cases

### Restaurant / Cafe
```javascript
businessName: "Mama's Kitchen",
sections: {
  problem: false,      // Skip problems
  solution: false,     // Skip solution
  whatWeDo: true,      // Show menu/services
  whoItsFor: false     // Not needed
}
```

### Service Provider (Plumber, Electrician)
```javascript
businessName: "QuickFix Plumbing",
sections: {
  problem: true,       // Show common issues
  solution: true,      // Your solution
  whatWeDo: true,      // Services offered
  howItWorks: true     // Booking process
}
```

### Digital Service / SaaS
```javascript
businessName: "Cloud Analytics Pro",
sections: {
  problem: true,       // Pain points
  solution: true,      // Your platform
  whatWeDo: true,      // Features
  howItWorks: true,    // Onboarding
  whoItsFor: true      // Target market
}
```

---

## 🌐 SEO Best Practices

### Meta Tags Setup

Already configured! Just edit in `businessConfig.js`:

```javascript
seo: {
  title: "Business Name - Short Description | Location",
  description: "Compelling 150-160 character description with keywords",
  keywords: "service, location, industry, keywords",
  ogImage: "https://yourdomain.com/og-image.jpg",
  domain: "yourdomain.com"
}
```

### SEO Tips

1. **Title:** Keep under 60 characters
2. **Description:** 150-160 characters, include main keyword
3. **Keywords:** 5-10 relevant keywords, comma-separated
4. **OG Image:** 1200x630px for social sharing

### Local SEO

For local businesses, include in description:
- City/Location name
- Service area
- "Near me" keywords

Example:
```javascript
description: "Professional plumbing services in Austin, TX. 24/7 emergency repairs, installations, and maintenance. Serving Austin and surrounding areas."
```

---

## 📦 File Structure

```
/app/frontend/src/
├── config/
│   └── businessConfig.js       # ⚙️ MAIN CONFIG - Edit this!
├── components/
│   ├── Header.jsx              # Navigation bar
│   ├── Hero.jsx                # Hero section
│   ├── Problem.jsx             # Problem section
│   ├── Solution.jsx            # Solution section
│   ├── WhatWeDo.jsx            # Services section
│   ├── HowItWorks.jsx          # Process section
│   ├── WhoItsFor.jsx           # Target audience
│   ├── WhyUs.jsx               # Benefits section
│   ├── CTA.jsx                 # Call-to-action
│   ├── Footer.jsx              # Footer
│   ├── SectionWrapper.jsx      # Reusable wrapper
│   ├── WhatsAppButton.jsx      # WhatsApp button
│   └── ui/                     # Shadcn components
├── utils/
│   └── whatsapp.js             # WhatsApp utilities
├── index.css                   # 🎨 Design system
├── App.js                      # Main app
└── App.css                     # App styles
```

---

## 🛠️ Development

### Install Dependencies
```bash
cd /app/frontend
yarn install
```

### Run Development Server
```bash
yarn start
```

### Build for Production
```bash
yarn build
```

### Restart Services
```bash
sudo supervisorctl restart frontend
```

---

## 🚨 Common Issues & Solutions

### WhatsApp Links Not Opening
- Check `whatsappNumber` format (international, no + or spaces)
- Example: `"1234567890"` not `"+1 234-567-8900"`

### Sections Not Showing
- Check `sections: { sectionName: true }` in config
- Verify section data exists in config
- Check browser console for errors

### Colors Not Updating
- Ensure HSL format: `217 71% 53%` (not `hsl(217, 71%, 53%)`)
- Restart development server after CSS changes
- Clear browser cache

### Mobile Menu Not Working
- Check that Header component is imported
- Verify mobile viewport is set correctly
- Test on actual mobile device, not just browser resize

---

## 📈 Scaling to Multiple Clients

### Strategy 1: Multiple Config Files

```
/config/
├── businessConfig.js          # Default/Template
├── client_restaurant.js       # Restaurant client
├── client_plumber.js          # Plumber client
└── client_shop.js             # Shop client
```

Switch by importing different config in App.js

### Strategy 2: Environment Variables

```bash
# .env.production.client1
REACT_APP_CLIENT=restaurant
REACT_APP_BUSINESS_NAME=Mama's Kitchen
REACT_APP_WHATSAPP=1234567890
```

Load config based on env variables

### Strategy 3: API-Driven Config

Fetch config from backend:
```javascript
useEffect(() => {
  fetch('/api/business-config')
    .then(res => res.json())
    .then(setBusinessConfig);
}, []);
```

---

## 💡 Tips & Best Practices

### Content Writing
- **Headlines:** Clear, benefit-focused, under 10 words
- **Descriptions:** Conversational, 2-3 sentences max
- **CTAs:** Action-oriented ("Get Started", "Book Now")
- **Stats:** Use real numbers when possible

### Design
- Maintain **consistent spacing** between sections
- Use **high-quality images** if adding hero images
- Keep color palette to **3 colors max**
- Ensure **proper contrast** for readability

### WhatsApp
- Keep pre-filled messages **short and friendly**
- Include **call-to-action** in messages
- Test on **actual phone** before deployment
- Consider **time zones** for response expectations

### Performance
- Optimize images before uploading
- Use lazy loading for images
- Minimize custom CSS
- Keep config file under 500 lines

---

## 🎓 Learning Resources

### React Basics
- [React Official Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Design System
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

### WhatsApp Business
- [WhatsApp Business API](https://business.whatsapp.com)

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✅ Modular template system
- ✅ WhatsApp-first integration
- ✅ 9 customizable sections
- ✅ Fully responsive design
- ✅ SEO-ready structure
- ✅ Professional design system
- ✅ Easy configuration system

---

## 🤝 Support

Need help customizing for a specific use case?
- Review this README thoroughly
- Check businessConfig.js comments
- Test each section individually
- Use browser DevTools to debug

---

## ✅ Pre-Launch Checklist

Before deploying for a new client:

- [ ] Update `businessName` in config
- [ ] Update `whatsappNumber` (international format)
- [ ] Customize `hero` section content
- [ ] Review and toggle sections as needed
- [ ] Update `seo` title and description
- [ ] Test all WhatsApp buttons
- [ ] Test on mobile device
- [ ] Test all navigation links
- [ ] Verify contact information
- [ ] Check for placeholder text
- [ ] Test in different browsers
- [ ] Run production build
- [ ] Update domain in config

---

**Built with ❤️ for small businesses everywhere**

*Transform your business visibility, one website at a time.*
