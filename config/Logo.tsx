import React from 'react';

// Interview AI logo: a speech bubble (the interview conversation) with an AI sparkle inside.
export const Logo = ({ size = 34 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Interview AI"
    role="img"
  >
    <defs>
      <linearGradient id="interviewAiGrad" x1="4" y1="4" x2="44" y2="44">
        <stop offset="0" stopColor="#6366F1" />
        <stop offset="1" stopColor="#EC4899" />
      </linearGradient>
    </defs>
    <path
      d="M10 6h28a6 6 0 0 1 6 6v18a6 6 0 0 1-6 6H24l-9 7.5a1 1 0 0 1-1.6-.8V36h-3.4a6 6 0 0 1-6-6V12a6 6 0 0 1 6-6Z"
      fill="url(#interviewAiGrad)"
    />
    <path
      d="M24 12.5c.6 5.2 2.8 7.4 8 8-5.2.6-7.4 2.8-8 8-.6-5.2-2.8-7.4-8-8 5.2-.6 7.4-2.8 8-8Z"
      fill="#fff"
    />
    <circle cx="34.5" cy="14" r="1.8" fill="#fff" />
  </svg>
);
