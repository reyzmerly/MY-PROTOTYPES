import React from 'react';
import { EyeOff, PhoneOff, ShoppingCart, Puzzle, DollarSign, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import SectionWrapper from './SectionWrapper';
import { businessConfig } from '../config/businessConfig';
import { cn } from '../lib/utils';

export const Problem = () => {
  const { problem } = businessConfig;

  const iconMap = {
    'eye-slash': EyeOff,
    'phone-slash': PhoneOff,
    'shopping-cart': ShoppingCart,
    'puzzle-piece': Puzzle,
    'dollar-sign': DollarSign
  };

  return (
    <SectionWrapper id="problem" background="muted">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {problem.headline}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {problem.subheadline}
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {problem.problems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || AlertCircle;
            return (
              <Card
                key={index}
                className={cn(
                  "p-6 bg-card hover:bg-card/80 border-border hover:border-destructive/30 transition-all hover:shadow-lg group",
                  "transform hover:-translate-y-1"
                )}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-destructive" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Conclusion */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0" />
            <p className="text-base font-medium text-foreground">
              {problem.conclusion}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Problem;