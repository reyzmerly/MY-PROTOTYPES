import React from 'react';
import { Globe, Search, MessageCircle, Package, MapPin, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';
import { cn } from '../lib/utils';

export const WhatWeDo = () => {
  const { whatWeDo } = businessConfig;

  const iconMap = {
    'globe': Globe,
    'search': Search,
    'message-circle': MessageCircle,
    'package': Package,
    'map-pin': MapPin
  };

  return (
    <SectionWrapper id="what-we-do" background="gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>{whatWeDo.headline}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {whatWeDo.tagline}
          </h2>
          
          <p className="text-lg text-muted-foreground">
            {whatWeDo.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whatWeDo.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <Card
                key={index}
                className={cn(
                  "p-6 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover:shadow-lg group",
                  "transform hover:-translate-y-2"
                )}
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border-2 border-accent/30 rounded-full">
            <Check className="h-5 w-5 text-accent" />
            <p className="text-lg font-semibold text-foreground">
              {whatWeDo.closing}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Check = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default WhatWeDo;