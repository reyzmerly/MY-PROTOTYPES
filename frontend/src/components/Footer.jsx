import React from 'react';
import { MessageCircle, Mail, Phone, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer = () => {
  const { footer, socialMedia, businessName, email, phone } = businessConfig;

  const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin
  };

  const activeSocials = Object.entries(socialMedia)
    .filter(([_, url]) => url)
    .map(([platform, url]) => ({
      platform,
      url,
      Icon: socialIcons[platform]
    }));

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{businessName}</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Services', id: 'what-we-do' },
                { label: 'Why Us', id: 'why-us' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-background/80 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-background/80 hover:text-background text-sm transition-colors group"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>WhatsApp</span>
              </a>
              
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 text-background/80 hover:text-background text-sm transition-colors group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>{email}</span>
                </a>
              )}
              
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center space-x-2 text-background/80 hover:text-background text-sm transition-colors group"
                >
                  <Phone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span>{phone}</span>
                </a>
              )}
            </div>

            {/* Social Media */}
            {activeSocials.length > 0 && (
              <div className="flex items-center space-x-3 pt-2">
                {activeSocials.map(({ platform, url, Icon }) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110"
                    aria-label={platform}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              {footer.copyright}
            </p>
            
            {footer.links && footer.links.length > 0 && (
              <div className="flex items-center space-x-6">
                {footer.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-background/60 hover:text-background text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;