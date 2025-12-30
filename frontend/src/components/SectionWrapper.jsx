import React from 'react';
import { cn } from '../lib/utils';

export const SectionWrapper = ({ 
  children, 
  className = '',
  containerClassName = '',
  id = '',
  background = 'default' // 'default', 'muted', 'gradient'
}) => {
  const bgClasses = {
    default: 'bg-background',
    muted: 'bg-muted',
    gradient: 'bg-gradient-to-b from-muted to-background'
  };

  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24',
        bgClasses[background],
        className
      )}
    >
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;