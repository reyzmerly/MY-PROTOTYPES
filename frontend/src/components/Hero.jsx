import React from 'react';
import { MessageCircle, ArrowRight, TrendingUp, Clock, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { businessConfig } from '../config/businessConfig';
import { getWhatsAppUrlForAction } from '../utils/whatsapp';
import { cn } from '../lib/utils';

export const Hero = () => {
  const { hero } = businessConfig;

  const handleWhatsAppClick = () => {
    window.open(getWhatsAppUrlForAction('get-started'), '_blank');
  };

  const handleHowItWorksClick = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const statIcons = {
    'Daily online time': Clock,
    'WhatsApp-first': MessageCircle,
    'Always visible': Eye
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Headline */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {hero.subheadline}
            </p>
          </div>

          {/* Description */}
          <div className="animate-slide-up">
            <p className="text-base sm:text-lg text-foreground/90 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <TrendingUp className="h-4 w-4" />
            <span>{businessConfig.tagline}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-secondary hover:shadow-xl transition-all text-base px-8"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {hero.cta.primary}
            </Button>
            <Button
              onClick={handleHowItWorksClick}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 text-base px-8"
            >
              {hero.cta.secondary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-12 max-w-3xl mx-auto">
            {hero.stats.map((stat, index) => {
              const IconComponent = statIcons[stat.label] || TrendingUp;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col items-center space-y-2">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 md:h-24 fill-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;