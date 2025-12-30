# 🚀 Quick Start Guide - Kora Business Template
## For Non-Technical Users

This guide helps you customize the Kora Business website for your clients in **5 simple steps**.

---

## Step 1: Update Business Information (5 minutes)

Open file: `/app/frontend/src/config/businessConfig.js`

Find this section and replace with your client's info:

```javascript
// ===== BUSINESS INFORMATION =====
businessName: "Your Client's Business Name",
tagline: "Their catchy slogan",
description: "What they do in one sentence",
```

**Example for a coffee shop:**
```javascript
businessName: "Sunrise Coffee House",
tagline: "Wake up to fresh coffee",
description: "Local coffee shop serving artisan coffee and fresh pastries since 2020",
```

---

## Step 2: Set Up WhatsApp (2 minutes)

In the same file, update contact details:

```javascript
// ===== CONTACT INFORMATION =====
whatsappNumber: "1234567890",  // ⚠️ Important: No + or spaces!
whatsappMessage: "Hi! I'm interested in [Your Service]",
email: "hello@yourbusiness.com",
phone: "+1 (234) 567-8900",
```

**WhatsApp Number Format:**
- ✅ Correct: `"1234567890"` or `"441234567890"`
- ❌ Wrong: `"+1 234-567-8900"` or `"(123) 456-7890"`

**Quick Test:** Open WhatsApp Web and go to `https://wa.me/1234567890` - it should open a chat!

---

## Step 3: Choose Which Sections to Show (1 minute)

Decide what sections the client needs:

```javascript
// ===== SECTIONS VISIBILITY =====
sections: {
  hero: true,           // Main banner - Always keep ON
  problem: true,        // Problems customers face - Keep if relevant
  solution: true,       // Your solution - Usually keep ON
  whatWeDo: true,       // Services/Products - Always keep ON
  howItWorks: true,     // Step-by-step process - Keep if relevant
  whoItsFor: true,      // Target customers - Keep if relevant
  whyUs: true,          // Why choose us - Usually keep ON
  cta: true,            // Final call-to-action - Always keep ON
  footer: true          // Footer - Always keep ON
}
```

**Tips:**
- **Restaurant:** Turn OFF `problem`, `solution`, keep `whatWeDo` (menu)
- **Service Provider:** Keep ALL sections
- **Shop/Store:** Turn OFF `howItWorks`, keep others

To hide a section, change `true` to `false`

---

## Step 4: Update Main Content (10 minutes)

### Hero Section (First thing visitors see)
```javascript
hero: {
  headline: "Your main attention-grabbing headline",
  subheadline: "Supporting text that explains more",
  cta: {
    primary: "Start with WhatsApp",    // Main button text
    secondary: "See how it works"      // Secondary button text
  }
}
```

### What We Do (Services/Products)
```javascript
whatWeDo: {
  tagline: "What We Offer",
  services: [
    {
      icon: "globe",               // Keep as is (icon name)
      title: "Service Name 1",
      description: "What this service does"
    },
    // Add up to 5 services
  ]
}
```

**Available Icons:**
- `globe` - Website/Online
- `search` - SEO/Search
- `message-circle` - Communication
- `package` - Products/Delivery
- `map-pin` - Location

### How It Works (Process Steps)
```javascript
howItWorks: {
  steps: [
    {
      number: "01",
      title: "Step 1 Title",
      description: "What happens in this step"
    },
    // Add 3-5 steps
  ]
}
```

---

## Step 5: Update SEO (Search Engine Info) (3 minutes)

This helps people find the site on Google:

```javascript
seo: {
  title: "Business Name - What You Do | Location",
  description: "Brief description with keywords (150 characters max)",
  keywords: "keyword1, keyword2, keyword3, location",
  domain: "yourbusinesswebsite.com"
}
```

**Example for a plumber:**
```javascript
seo: {
  title: "QuickFix Plumbing - Emergency Plumber | Austin, TX",
  description: "24/7 emergency plumbing services in Austin. Fast, reliable, affordable. Call now for leaks, repairs, installations.",
  keywords: "plumber Austin, emergency plumber, plumbing repair, Austin TX",
  domain: "quickfixplumbing.com"
}
```

---

## 🎨 Bonus: Change Colors (Optional - 5 minutes)

Want different colors? Open: `/app/frontend/src/index.css`

Find this section:

```css
:root {
  /* Primary Color (Main Brand Color) */
  --primary: 217 71% 53%;        /* Currently: Blue */
  
  /* Secondary Color (Accent/CTA buttons) */
  --secondary: 24 95% 53%;       /* Currently: Orange */
  
  /* Success Color (Check marks, success states) */
  --accent: 142 76% 36%;         /* Currently: Green */
}
```

**Quick Color Changes:**

| Color | Change To | Why |
|-------|-----------|-----|
| Red | `--primary: 0 84% 60%;` | Bold, energetic |
| Purple | `--primary: 260 67% 55%;` | Creative, modern |
| Teal | `--primary: 180 62% 48%;` | Calm, professional |
| Navy | `--primary: 220 80% 30%;` | Traditional, trustworthy |

**For Secondary (CTA buttons):**
| Color | Change To |
|-------|-----------|
| Red | `--secondary: 0 84% 60%;` |
| Yellow | `--secondary: 45 100% 51%;` |
| Green | `--secondary: 142 76% 45%;` |
| Pink | `--secondary: 330 81% 65%;` |

**After changing colors:**
```bash
# Restart the website
sudo supervisorctl restart frontend
```

Wait 10 seconds, then refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## ✅ Testing Checklist

Before showing to client, test these:

### On Desktop:
- [ ] Click "Get Started" button - Opens WhatsApp?
- [ ] Click navigation menu items - Scrolls smoothly?
- [ ] Read all content - No placeholder text like "Lorem ipsum"?
- [ ] Check business name in header - Correct?
- [ ] Footer has correct contact info?

### On Mobile:
- [ ] Open on phone: `http://your-website.com`
- [ ] Tap hamburger menu (≡) - Opens?
- [ ] All text readable without zooming?
- [ ] WhatsApp button works?

### WhatsApp Test:
```
1. Click any "Get Started" or WhatsApp button
2. Should open WhatsApp
3. Should have pre-filled message
4. Message should make sense!
```

---

## 🆘 Common Problems & Fixes

### Problem: WhatsApp button opens but shows wrong number
**Fix:** Check `whatsappNumber` in config - remove spaces, dashes, + symbol

### Problem: Section not showing
**Fix:** Check `sections: { sectionName: true }` - is it set to `true`?

### Problem: Colors didn't change
**Fix:** 
1. Did you restart frontend? `sudo supervisorctl restart frontend`
2. Did you hard refresh browser? Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Problem: Text is still "Kora Business"
**Fix:** Update `businessName` in `/app/frontend/src/config/businessConfig.js`

### Problem: Mobile menu not working
**Fix:** This is rare - contact developer

---

## 📋 Content Checklist

Before launch, verify:

**Business Info:**
- [ ] Business name is correct everywhere
- [ ] WhatsApp number is correct (test it!)
- [ ] Email is correct
- [ ] Phone number is correct

**Content:**
- [ ] No placeholder text ("Lorem ipsum", "Example", "Your business")
- [ ] All service descriptions are accurate
- [ ] Process steps make sense
- [ ] Benefits/features are relevant

**SEO:**
- [ ] Page title includes business name and what you do
- [ ] Description mentions location and services
- [ ] Keywords match what customers search for

**Visual:**
- [ ] Colors match brand (if changed)
- [ ] Everything looks good on mobile
- [ ] No broken images

---

## 🎯 Usage Scenarios

### Scenario 1: Restaurant
```javascript
sections: {
  problem: false,      // Skip - not relevant
  solution: false,     // Skip - not relevant
  whatWeDo: true,      // Show menu/dishes
  howItWorks: true,    // How to order
  whoItsFor: false,    // Skip - everyone eats!
  whyUs: true         // Why choose us
}
```

### Scenario 2: Plumber/Electrician/Handyman
```javascript
sections: {
  problem: true,       // Common plumbing issues
  solution: true,      // How you fix them
  whatWeDo: true,      // Services offered
  howItWorks: true,    // Booking process
  whoItsFor: false,    // Skip - any homeowner
  whyUs: true         // Why choose you (24/7, licensed, etc)
}
```

### Scenario 3: Beauty Salon/Spa
```javascript
sections: {
  problem: false,      // Skip
  solution: false,     // Skip
  whatWeDo: true,      // Services/treatments
  howItWorks: true,    // Booking process
  whoItsFor: true,     // Who is this for
  whyUs: true         // Why choose us
}
```

---

## 📞 Quick Reference

**Main Config File:**
```
/app/frontend/src/config/businessConfig.js
```

**Change Colors:**
```
/app/frontend/src/index.css
```

**Restart Website:**
```bash
sudo supervisorctl restart frontend
```

**View Website:**
```
http://localhost:3000  (development)
http://your-domain.com (production)
```

---

## 💾 Save Your Work

After making changes:

1. **Save the file** (Ctrl+S or Cmd+S)
2. **Restart frontend**:
   ```bash
   sudo supervisorctl restart frontend
   ```
3. **Wait 10 seconds**
4. **Refresh browser** (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🎓 Learning the Format

### HSL Colors Explained
`--primary: 217 71% 53%`

- **217** = Hue (color wheel position): 
  - 0 = Red
  - 120 = Green  
  - 217 = Blue
  - 280 = Purple
  
- **71%** = Saturation (intensity):
  - 0% = Gray
  - 100% = Pure color
  
- **53%** = Lightness:
  - 0% = Black
  - 50% = Normal
  - 100% = White

**Tip:** To make color darker, decrease lightness (53% → 40%)

---

## ✨ Final Tips

1. **Test on real phone** before showing client
2. **Keep content short** - mobile users don't read much
3. **Use simple language** - avoid jargon
4. **Test WhatsApp number** multiple times
5. **Check spelling** everywhere
6. **Take screenshots** of before/after

---

**Need Help?** 
Read the full technical documentation: `/app/KORA_BUSINESS_README.md`

**Ready to Deploy?**
Follow the deployment guide in the main README.

---

*Remember: Small changes, save, restart, refresh, test!*
