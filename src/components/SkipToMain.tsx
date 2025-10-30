'use client';

export default function SkipToMain() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] bg-gold text-white px-6 py-3 rounded-lg font-sans text-sm tracking-wider uppercase shadow-xl"
    >
      Skip to main content
    </a>
  );
}

