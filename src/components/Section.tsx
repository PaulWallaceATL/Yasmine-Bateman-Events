import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'cream' | 'beige' | 'pearl' | 'champagne';
  padding?: 'small' | 'medium' | 'large';
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'large'
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
    <section className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="container mx-auto px-6 lg:px-12">
        {children}
      </div>
    </section>
  );
}

