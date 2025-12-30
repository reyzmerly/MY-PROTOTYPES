import React from 'react';
import { CheckCircle, Users, MessageSquare, Map, TrendingUp, Award } from 'lucide-react';
import { Card } from './ui/card';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';
import { cn } from '../lib/utils';

export const WhyUs = () => {
  const { whyUs } = businessConfig;

  const iconMap = {
    'check-circle': CheckCircle,
    'users': Users,
    'message-square': MessageSquare,
    'map': Map,
    'trending-up': TrendingUp
  };

  return (
    <SectionWrapper id="why-us" background="gradient">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            <span>Why Choose Us</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {whyUs.headline}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {whyUs.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || CheckCircle;
            return (
              <Card
                key={index}
                className={cn(
                  "p-6 bg-card hover:bg-card/80 border-border hover:border-accent/50 transition-all hover:shadow-lg group",
                  "transform hover:-translate-y-2"
                )}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="text-center space-y-4">
          <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30">
            <p className="text-xl md:text-2xl font-bold text-foreground mb-2">
              {whyUs.tagline}
            </p>
            <p className="text-lg md:text-xl font-semibold text-primary">
              {whyUs.closing}
            </p>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;