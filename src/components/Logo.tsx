'use client';

import { useId } from 'react';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'full' | 'mark';
  tone?: 'light' | 'dark';
  className?: string;
  label?: string;
};

function LogoMarkSvg({ className, label }: { className?: string; label?: string }) {
  const gradientId = useId();
  return (
    <svg
      viewBox="0 0 120 120"
      role="img"
      aria-label={label ?? 'YB Studio emblem'}
      className={cn('h-12 w-12 text-white', className)}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a35bff" />
          <stop offset="60%" stopColor="#ff60d6" />
        </linearGradient>
      </defs>
      <rect width="120" height="120" rx="32" fill={`url(#${gradientId})`} />
      <path
        d="M42 28L60 60L42 92"
        stroke="white"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.95"
      />
      <path
        d="M65 30C85 30 93 43 93 58C93 74 82 88 65 88M65 88L85 88"
        stroke="#efe2ff"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ variant = 'full', className, label, tone = 'light' }: LogoProps) {
  if (variant === 'mark') {
    return <LogoMarkSvg className={className} label={label} />;
  }

  const headingClass =
    tone === 'light'
      ? 'text-base font-semibold uppercase tracking-[0.4em] text-white lg:text-lg'
      : 'text-base font-semibold uppercase tracking-[0.4em] text-navy lg:text-lg';
  const subClass =
    tone === 'light'
      ? 'text-xs uppercase tracking-[0.35em] text-white/70'
      : 'text-xs uppercase tracking-[0.35em] text-charcoal/70';

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <LogoMarkSvg className="h-12 w-12 flex-shrink-0" label={label} />
      <div className="leading-tight">
        <p className={headingClass}>YB Studio</p>
        <p className={subClass}>Yasmine&nbsp;Bateman&nbsp;Events</p>
      </div>
    </div>
  );
}

export function LogoBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.4em] text-white',
        className
      )}
    >
      <LogoMarkSvg className="h-8 w-8" label="YB Studio badge" />
      YB
    </div>
  );
}

