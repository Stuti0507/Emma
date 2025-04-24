import React from 'react';

const ComingSoon = ({
  text = "Coming Soon",
  gradientStart = "#7C4DFF",
  gradientEnd = "#00BCD4",
  background = "#F3E5F5",
  dotColor = "#7C4DFF",
  dotSize = 6,
  speed = 1.5
}) => {
  return (
    <svg viewBox="0 0 550 200" height="11rem" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientStart} />
          <stop offset="100%" stopColor={gradientEnd} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="600" height="200" rx="20" fill={background} />

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="url(#textGradient)"
        fontFamily="Arial, sans-serif"
        fontSize="48"
        fontWeight="bold"
        filter="url(#glow)"
        dy=".35em"
      >
        {text}
      </text>

      {/* Animated Dots */}
      <circle cx="270" cy="130" r={dotSize} fill={dotColor}>
        <animate attributeName="opacity" values="1;0;1" dur={`${speed}s`} repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="300" cy="130" r={dotSize} fill={dotColor}>
        <animate attributeName="opacity" values="1;0;1" dur={`${speed}s`} repeatCount="indefinite" begin={`${speed * 0.2}s`} />
      </circle>
      <circle cx="330" cy="130" r={dotSize} fill={dotColor}>
        <animate attributeName="opacity" values="1;0;1" dur={`${speed}s`} repeatCount="indefinite" begin={`${speed * 0.4}s`} />
      </circle>
    </svg>
  );
};

export default ComingSoon;