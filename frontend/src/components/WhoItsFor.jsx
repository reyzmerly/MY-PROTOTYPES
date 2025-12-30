import React from 'react';
import { Check, Users } from 'lucide-react';
import { Card } from './ui/card';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';

export const WhoItsFor = () => {
  const { whoItsFor } = businessConfig;

  return (
    <SectionWrapper id="who-its-for" background="default">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6">
            <Users className="h-4 w-4" />
            <span>Perfect For</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {whoItsFor.headline}
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            {whoItsFor.description}
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/5 to-primary/5 border-2 border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whoItsFor.targetAudience.map((audience, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <p className="text-base font-medium text-foreground">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-foreground">
            {whoItsFor.closing}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhoItsFor;