import React from 'react'

const canvasDis = () => {
  return (
    <div>
       <svg viewBox="0 0 800 400" height="14rem"  xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3E5F5" />
        <stop offset="100%" stopColor="#E1BEE7" />
      </linearGradient>

      <pattern id="canvasGrid" width="20" height="20" patternUnits="userSpaceOnUse">
        <rect width="20" height="20" fill="none" />
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#D1C4E9" strokeWidth="0.5" />
      </pattern>

      <linearGradient id="strokeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9575CD" />
        <stop offset="100%" stopColor="#5E35B1" />
      </linearGradient>

      <linearGradient id="strokeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7986CB" />
        <stop offset="100%" stopColor="#3949AB" />
      </linearGradient>

      <linearGradient id="strokeGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4DD0E1" />
        <stop offset="100%" stopColor="#00ACC1" />
      </linearGradient>

      <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>

      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Background */}
    <rect width="800" height="400" rx="20" ry="20" fill="url(#bgGradient)" />

    {/* Canvas */}
    <rect x="150" y="80" width="500" height="240" rx="10" ry="10" fill="white" stroke="#BDBDBD" strokeWidth="1" />
    <rect x="150" y="80" width="500" height="240" rx="10" ry="10" fill="url(#canvasGrid)" />

    {/* Sidebar */}
    <rect x="100" y="80" width="50" height="240" rx="5" ry="5" fill="#F5F5F5" stroke="#BDBDBD" strokeWidth="1" />
    <circle cx="125" cy="110" r="10" fill="#9C27B0" stroke="white" strokeWidth="2" />
    <rect x="110" y="140" width="30" height="5" rx="2" ry="2" fill="#3F51B5" />
    <path d="M110,170 h30 l-15,20 z" fill="#00BCD4" />
    <rect x="110" y="210" width="30" height="20" rx="3" ry="3" fill="#B39DDB" />
    <circle cx="125" cy="260" r="15" fill="#BDBDBD" stroke="#9E9E9E" strokeWidth="1" />
    <path d="M118,260 h14" stroke="white" strokeWidth="2" />
    <path d="M125,253 v14" stroke="white" strokeWidth="2" />

    {/* Animated Curves */}
    <g>
      <path d="M200,120 C250,50 350,250 450,120 S550,200 650,150"
        stroke="url(#strokeGradient1)" strokeWidth="5" fill="none" strokeLinecap="round">
        <animate attributeName="d"
          values="
            M200,120 C250,50 350,250 450,120 S550,200 650,150;
            M200,150 C250,70 350,270 450,150 S550,230 650,180;
            M200,120 C250,50 350,250 450,120 S550,200 650,150"
          dur="12s" repeatCount="indefinite"
        />
      </path>

      <path d="M200,200 Q230,180 260,200 Q290,220 320,200 Q350,180 380,200 Q410,220 440,200 Q470,180 500,200 Q530,220 560,200 Q590,180 620,200"
        stroke="url(#strokeGradient2)" strokeWidth="4" fill="none" strokeLinecap="round">
        <animate attributeName="d"
          values="
            M200,200 Q230,180 260,200 Q290,220 320,200 Q350,180 380,200 Q410,220 440,200 Q470,180 500,200 Q530,220 560,200 Q590,180 620,200;
            M200,200 Q230,220 260,200 Q290,180 320,200 Q350,220 380,200 Q410,180 440,200 Q470,220 500,200 Q530,180 560,200 Q590,220 620,200;
            M200,200 Q230,180 260,200 Q290,220 320,200 Q350,180 380,200 Q410,220 440,200 Q470,180 500,200 Q530,220 560,200 Q590,180 620,200"
          dur="8s" repeatCount="indefinite"
        />
      </path>

      <path d="M400,240 C420,240 440,230 440,210 C440,190 420,180 400,180 C380,180 370,190 370,210 C370,230 380,250 400,250 C420,250 450,230 450,210"
        stroke="url(#strokeGradient3)" strokeWidth="3" fill="none" strokeLinecap="round">
        <animate attributeName="stroke-width" values="3;5;3" dur="6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="6s" repeatCount="indefinite" />
      </path>
    </g>

    {/* Paint Splashes */}
    <g filter="url(#blur)">
      <circle cx="250" cy="130" r="15" fill="#9C27B0" opacity="0.5" />
      <circle cx="570" cy="150" r="20" fill="#3F51B5" opacity="0.4" />
      <circle cx="350" cy="270" r="12" fill="#00BCD4" opacity="0.5" />
      <circle cx="520" cy="210" r="18" fill="#9575CD" opacity="0.4" />
    </g>

    {/* Text */}
    <g textAnchor="middle" fontFamily="Arial, sans-serif">
      <text x="400" y="60" fontSize="32" fontWeight="bold" fill="#4527A0">Draw with Emma</text>
      <text x="400" y="350" fontSize="18" fill="#5E35B1" opacity="0.8">Express yourself through  art</text>
    </g>

    {/* Cursor */}
    <g transform="translate(500, 220)">
      <path d="M0,0 L15,15 L5,15 L10,25 L5,27 L0,17 L0,0" fill="white" stroke="#424242" strokeWidth="1.5" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </g>
  </svg>
    </div>
  )
}

export default canvasDis
