import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'beige' | 'pearl' | 'champagne';
  padding?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'large',
  fullWidth = false,
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    cream: 'bg-cream',
    beige: 'bg-beige',
    pearl: 'bg-pearl',
    champagne: 'bg-champagne'
  };

  const paddingClasses = {
    small: 'py-12',
    medium: 'py-20',
    large: 'py-24 md:py-32'
  };

  return (
    <section className={cn('relative isolate', bgClasses[background], paddingClasses[padding], className)}>
      <div
        className={cn(
          'w-full px-6 lg:px-10',
          fullWidth ? 'mx-auto max-w-none' : 'mx-auto max-w-6xl'
        )}
      >
        {children}
      </div>
    </section>
  );
}

