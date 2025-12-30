import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';
import { getWhatsAppUrlForAction } from '../utils/whatsapp';

export const CTA = () => {
  const { cta } = businessConfig;

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrlForAction('get-started'), '_blank');
  };

  return (
    <SectionWrapper background="default">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-secondary p-12 md:p-16 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
              {cta.headline}
            </h2>
            
            <p className="text-xl font-semibold text-primary-foreground/90">
              {cta.subheadline}
            </p>
            
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              {cta.description}
            </p>

            <div className="pt-6">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground shadow-xl hover:shadow-2xl transition-all text-lg px-10 py-6 h-auto"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                {cta.buttonText}
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;