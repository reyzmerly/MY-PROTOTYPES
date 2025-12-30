import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';
import { cn } from '../lib/utils';

export const HowItWorks = () => {
  const { howItWorks } = businessConfig;

  return (
    <SectionWrapper id="how-it-works" background="muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {howItWorks.headline}
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, transparent process
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-0.5 h-20 bg-gradient-to-b from-primary to-primary/20" />
              )}

              <Card
                className={cn(
                  "p-6 md:p-8 bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all hover:shadow-lg",
                  "transform hover:-translate-y-1"
                )}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-primary">
                      <span className="text-3xl font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow indicator on mobile */}
                  {index < howItWorks.steps.length - 1 && (
                    <div className="md:hidden flex justify-center w-full">
                      <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorks;