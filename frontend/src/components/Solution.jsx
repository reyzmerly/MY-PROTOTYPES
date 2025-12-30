import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Card } from './ui/card';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';

export const Solution = () => {
  const { solution } = businessConfig;

  return (
    <SectionWrapper id="solution" background="default">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              <span>The Solution</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {solution.headline}
            </h2>
            
            <p className="text-xl font-semibold text-primary">
              {solution.tagline}
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {solution.description}
            </p>

            <div className="pt-4">
              <p className="text-sm font-medium text-foreground mb-4">
                We set up everything needed for customers to:
              </p>
              <div className="space-y-3">
                {solution.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                    </div>
                    <p className="text-base text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg font-semibold text-foreground pt-4">
              {solution.closing}
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 border-2 border-primary/20">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <Zap className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Your Megaphone
                  </h3>
                  <p className="text-muted-foreground">
                    Amplify your business voice
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  {[
                    { label: 'Visibility', percentage: 100 },
                    { label: 'Customer Reach', percentage: 95 },
                    { label: 'Engagement', percentage: 90 },
                    { label: 'Simplicity', percentage: 100 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-foreground">{item.label}</span>
                        <span className="text-primary font-semibold">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Solution;