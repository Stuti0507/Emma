import React, { useEffect, useRef, useState } from 'react';
import './AnimatedBot.css';

const AnimatedBot = () => {
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const leftEyeHighlight1Ref = useRef(null);
  const leftEyeHighlight2Ref = useRef(null);
  const rightEyeHighlight1Ref = useRef(null);
  const rightEyeHighlight2Ref = useRef(null);
  const mouthRef = useRef(null);
  const leftEyebrowRef = useRef(null);
  const rightEyebrowRef = useRef(null);
  const thinkingBubbleRef = useRef(null);
  const leftEyeWhiteRef = useRef(null);
  const rightEyeWhiteRef = useRef(null);
  const leftEyeOutlineRef = useRef(null);
  const rightEyeOutlineRef = useRef(null);
  const svgRef = useRef(null);
  
  const [currentExpression, setCurrentExpression] = useState('default');
  const [animationInterval, setAnimationInterval] = useState(null);

  // Expression configurations
  const expressions = {
    default: {
      mouth: "M140 185c5 5 15 5 20 0",
      leftEyebrow: "M105 120c5-2 20-2 25 0",
      rightEyebrow: "M170 120c5-2 20-2 25 0",
      leftPupilCx: 120,
      leftPupilCy: 145,
      rightPupilCx: 180,
      rightPupilCy: 145,
      thinking: 0
    },
    happy: {
      mouth: "M130 185c6 8 34 8 40 0",
      leftEyebrow: "M105 115c5-3 20-3 25 0",
      rightEyebrow: "M170 115c5-3 20-3 25 0",
      leftPupilCx: 120,
      leftPupilCy: 145,
      rightPupilCx: 180,
      rightPupilCy: 145,
      thinking: 0
    },
    surprised: {
      mouth: "M140 185a10 12 0 1 0 20 0a10 12 0 1 0 -20 0",
      leftEyebrow: "M105 110c5-5 20-5 25 0",
      rightEyebrow: "M170 110c5-5 20-5 25 0",
      leftPupilCx: 120,
      leftPupilCy: 140,
      rightPupilCx: 180,
      rightPupilCy: 140,
      thinking: 0
    },
    thinking: {
      mouth: "M140 190c3 0 15 0 20 -5",
      leftEyebrow: "M105 120c0-5 20-5 25 0",
      rightEyebrow: "M170 115c0-5 20 0 25 5",
      leftPupilCx: 125,
      leftPupilCy: 145,
      rightPupilCx: 185,
      rightPupilCy: 145,
      thinking: 1
    },
    wink: {
      mouth: "M135 185c6 5 24 5 30 0",
      leftEyebrow: "M105 120c5-2 20-2 25 0",
      rightEyebrow: "M170 120c5-2 20-2 25 0",
      leftPupilCx: 120,
      leftPupilCy: 145,
      wink: true,
      rightPupilCx: 180,
      rightPupilCy: 145,
      thinking: 0
    },
    blink: {
      mouth: "M140 185c5 5 15 5 20 0",
      leftEyebrow: "M105 120c5-2 20-2 25 0",
      rightEyebrow: "M170 120c5-2 20-2 25 0",
      blink: true,
      thinking: 0
    },
    lookup: {
      mouth: "M140 185c5 3 15 3 20 0",
      leftEyebrow: "M105 115c5-3 20-3 25 0",
      rightEyebrow: "M170 115c5-3 20-3 25 0",
      leftPupilCx: 120,
      leftPupilCy: 138,
      rightPupilCx: 180,
      rightPupilCy: 138,
      thinking: 0
    }
  };

  // Reset to neutral state
  const resetExpression = () => {
    if (thinkingBubbleRef.current) thinkingBubbleRef.current.style.opacity = 0;
    
    if (leftEyeWhiteRef.current) leftEyeWhiteRef.current.style.visibility = 'visible';
    if (rightEyeWhiteRef.current) rightEyeWhiteRef.current.style.visibility = 'visible';
    if (leftPupilRef.current) leftPupilRef.current.style.visibility = 'visible';
    if (rightPupilRef.current) rightPupilRef.current.style.visibility = 'visible';
    if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.style.visibility = 'visible';
    if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.style.visibility = 'visible';
    if (rightEyeHighlight1Ref.current) rightEyeHighlight1Ref.current.style.visibility = 'visible';
    if (rightEyeHighlight2Ref.current) rightEyeHighlight2Ref.current.style.visibility = 'visible';
    
    if (leftEyeOutlineRef.current) leftEyeOutlineRef.current.setAttribute('ry', '22');
    if (rightEyeOutlineRef.current) rightEyeOutlineRef.current.setAttribute('ry', '22');
  };

  // Set expression
  const setExpression = (type) => {
    const exp = expressions[type];
    setCurrentExpression(type);
    
    // Reset first
    resetExpression();
    
    // Apply expression
    if (mouthRef.current) mouthRef.current.setAttribute('d', exp.mouth);
    if (leftEyebrowRef.current) leftEyebrowRef.current.setAttribute('d', exp.leftEyebrow);
    if (rightEyebrowRef.current) rightEyebrowRef.current.setAttribute('d', exp.rightEyebrow);
    
    if (exp.thinking && thinkingBubbleRef.current) {
      thinkingBubbleRef.current.style.opacity = 1;
    }
    
    if (exp.wink) {
      if (leftEyeWhiteRef.current) leftEyeWhiteRef.current.style.visibility = 'hidden';
      if (leftPupilRef.current) leftPupilRef.current.style.visibility = 'hidden';
      if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.style.visibility = 'hidden';
      if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.style.visibility = 'hidden';
      if (leftEyeOutlineRef.current) {
        leftEyeOutlineRef.current.setAttribute('ry', '2');
        leftEyeOutlineRef.current.setAttribute('cy', '145');
      }
    }
    
    if (exp.blink) {
      if (leftEyeWhiteRef.current) leftEyeWhiteRef.current.style.visibility = 'hidden';
      if (rightEyeWhiteRef.current) rightEyeWhiteRef.current.style.visibility = 'hidden';
      if (leftPupilRef.current) leftPupilRef.current.style.visibility = 'hidden';
      if (rightPupilRef.current) rightPupilRef.current.style.visibility = 'hidden';
      if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.style.visibility = 'hidden';
      if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.style.visibility = 'hidden';
      if (rightEyeHighlight1Ref.current) rightEyeHighlight1Ref.current.style.visibility = 'hidden';
      if (rightEyeHighlight2Ref.current) rightEyeHighlight2Ref.current.style.visibility = 'hidden';
      if (leftEyeOutlineRef.current) leftEyeOutlineRef.current.setAttribute('ry', '2');
      if (rightEyeOutlineRef.current) rightEyeOutlineRef.current.setAttribute('ry', '2');
    } else if (!exp.wink) {
      // Move pupils
      if (exp.leftPupilCx && leftPupilRef.current) {
        leftPupilRef.current.setAttribute('cx', exp.leftPupilCx);
        if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.setAttribute('cx', exp.leftPupilCx - 6);
        if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.setAttribute('cx', exp.leftPupilCx + 6);
      }
      
      if (exp.leftPupilCy && leftPupilRef.current) {
        leftPupilRef.current.setAttribute('cy', exp.leftPupilCy);
        if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.setAttribute('cy', exp.leftPupilCy - 6);
        if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.setAttribute('cy', exp.leftPupilCy + 6);
      }
      
      if (exp.rightPupilCx && rightPupilRef.current) {
        rightPupilRef.current.setAttribute('cx', exp.rightPupilCx);
        if (rightEyeHighlight1Ref.current) rightEyeHighlight1Ref.current.setAttribute('cx', exp.rightPupilCx - 6);
        if (rightEyeHighlight2Ref.current) rightEyeHighlight2Ref.current.setAttribute('cx', exp.rightPupilCx + 6);
      }
      
      if (exp.rightPupilCy && rightPupilRef.current) {
        rightPupilRef.current.setAttribute('cy', exp.rightPupilCy);
        if (rightEyeHighlight1Ref.current) rightEyeHighlight1Ref.current.setAttribute('cy', exp.rightPupilCy - 6);
        if (rightEyeHighlight2Ref.current) rightEyeHighlight2Ref.current.setAttribute('cy', exp.rightPupilCy + 6);
      }
    }
    
    // Auto revert blinking
    if (type === 'blink') {
      setTimeout(() => {
        setExpression('default');
      }, 300);
    }
  };

  // Get current expression
  const getCurrentExpression = () => {
    if (leftEyeWhiteRef.current?.style.visibility === 'hidden' && rightEyeWhiteRef.current?.style.visibility === 'hidden') {
      return 'blink';
    } else if (leftEyeWhiteRef.current?.style.visibility === 'hidden') {
      return 'wink';
    } else if (thinkingBubbleRef.current?.style.opacity === '1') {
      return 'thinking';
    }
    
    return 'default';
  };

  // Animation sequence
  const startAnimation = () => {
    // Clear existing animation
    if (animationInterval) clearInterval(animationInterval);
    
    const sequence = ['default', 'blink', 'happy', 'surprised', 'thinking', 'wink', 'lookup'];
    let index = 0;
    
    // Set initial expression
    setExpression(sequence[index]);
    
    // Start animation loop
    const interval = setInterval(() => {
      index = (index + 1) % sequence.length;
      setExpression(sequence[index]);
      
      // Hold each expression for a bit longer
      if (sequence[index] !== 'blink') {
        setTimeout(() => {
          // Small chance to blink during any expression
          if (Math.random() < 0.3) {
            const currentExp = sequence[index];
            setExpression('blink');
            setTimeout(() => setExpression(currentExp), 300);
          }
        }, 1000);
      }
    }, 2000);
    
    setAnimationInterval(interval);
  };

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      if (!svgRef.current) return;
      
      const svgRect = svgRef.current.getBoundingClientRect();
      const svgCenterX = svgRect.left + svgRect.width / 2;
      const svgCenterY = svgRect.top + svgRect.height / 2;
      
      // Calculate eye movement (limited range)
      const moveX = Math.min(5, Math.max(-5, (mouseX - svgCenterX) / 20));
      const moveY = Math.min(5, Math.max(-5, (mouseY - svgCenterY) / 20));
      
      // Don't move eyes during special expressions
      const currentExp = getCurrentExpression();
      if (currentExp !== 'wink' && currentExp !== 'blink') {
        // Left eye
        if (leftPupilRef.current) {
          leftPupilRef.current.setAttribute('cx', 120 + moveX);
          if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.setAttribute('cx', 114 + moveX);
          if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.setAttribute('cx', 126 + moveX);
          
          leftPupilRef.current.setAttribute('cy', 145 + moveY);
          if (leftEyeHighlight1Ref.current) leftEyeHighlight1Ref.current.setAttribute('cy', 139 + moveY);
          if (leftEyeHighlight2Ref.current) leftEyeHighlight2Ref.current.setAttribute('cy', 151 + moveY);
        }
        
        // Right eye
        if (rightPupilRef.current) {
          rightPupilRef.current.setAttribute('cx', 180 + moveX);
          if (rightEyeHighlight1Ref.current) rightEyeHighlight1Ref.current.setAttribute('cx', 174 + moveX);
          if (rightEyeHighlight2Ref.current) rightEyeHighlight2Ref.current.setAttribute('cx', 186 + moveX);
          
          rightPupilRef.current.setAttribute('cy', 145 + moveY);
          if (rightEyeHighlight1Ref.current) rightEyeHighlight1Ref.current.setAttribute('cy', 139 + moveY);
          if (rightEyeHighlight2Ref.current) rightEyeHighlight2Ref.current.setAttribute('cy', 151 + moveY);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Initialize with default expression
  useEffect(() => {
    setExpression('default');
    
    // Add occasional random blinking
    const blinkInterval = setInterval(() => {
      if (Math.random() < 0.3 && getCurrentExpression() === 'default') {
        setExpression('blink');
        setTimeout(() => setExpression('default'), 300);
      }
    }, 3000);
    
    return () => {
      clearInterval(blinkInterval);
      if (animationInterval) {
        clearInterval(animationInterval);
      }
    };
  }, []);

  return (
    <div className="animated-character-container">
      <div className="containera">
        <svg id="svga" ref={svgRef} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <g className="character">
            {/* Outer shape */}
            <path className="chat-bubble" d="M150 30c-66.2 0-120 53.8-120 120 0 45.4 25.4 84.8 62.5 105.5v35c0 5.6 6.6 8.7 10.8 5.1l39.8-33.1c2.2.2 4.5.3 6.9.3 66.2 0 120-53.8 120-120S216.2 30 150 30z" fill="#2dd4a1" />
            
            {/* Inner face area */}
            <ellipse className="face" cx="150" cy="150" rx="90" ry="95" fill="#a0f3d7" />
            
            {/* Eyes */}
            <g className="eyes">
              {/* Left eye */}
              <ellipse ref={leftEyeOutlineRef} className="left-eye-outline" cx="120" cy="145" rx="20" ry="22" fill="#057556" />
              <ellipse ref={leftEyeWhiteRef} className="left-eye-white" cx="120" cy="145" rx="18" ry="20" fill="#ffffff" />
              <ellipse ref={leftPupilRef} className="left-pupil pupils" cx="120" cy="145" rx="14" ry="16" fill="#057556" />
              <ellipse ref={leftEyeHighlight1Ref} className="left-eye-highlight1" cx="114" cy="139" rx="5" ry="5" fill="#ffffff" />
              <ellipse ref={leftEyeHighlight2Ref} className="left-eye-highlight2" cx="126" cy="151" rx="2" ry="2" fill="#ffffff" />
              
              {/* Right eye */}
              <ellipse ref={rightEyeOutlineRef} className="right-eye-outline" cx="180" cy="145" rx="20" ry="22" fill="#057556" />
              <ellipse ref={rightEyeWhiteRef} className="right-eye-white" cx="180" cy="145" rx="18" ry="20" fill="#ffffff" />
              <ellipse ref={rightPupilRef} className="right-pupil pupils" cx="180" cy="145" rx="14" ry="16" fill="#057556" />
              <ellipse ref={rightEyeHighlight1Ref} className="right-eye-highlight1" cx="174" cy="139" rx="5" ry="5" fill="#ffffff" />
              <ellipse ref={rightEyeHighlight2Ref} className="right-eye-highlight2" cx="186" cy="151" rx="2" ry="2" fill="#ffffff" />
            </g>
            
            {/* Eyebrows */}
            <g className="eyebrows">
              <path ref={leftEyebrowRef} className="left-eyebrow" d="M105 120c5-2 20-2 25 0" fill="none" stroke="#057556" strokeWidth="4" strokeLinecap="round" />
              <path ref={rightEyebrowRef} className="right-eyebrow" d="M170 120c5-2 20-2 25 0" fill="none" stroke="#057556" strokeWidth="4" strokeLinecap="round" />
            </g>
            
            {/* Mouth */}
            <path ref={mouthRef} className="mouth" d="M140 185c5 5 15 5 20 0" fill="none" stroke="#057556" strokeWidth="4" strokeLinecap="round" />
            
            {/* Thinking bubble (hidden by default) */}
            <g ref={thinkingBubbleRef} className="thinking" style={{ opacity: 0 }}>
              <ellipse cx="225" cy="75" rx="20" ry="20" fill="#2dd4a1" />
              <ellipse cx="205" cy="95" rx="10" ry="10" fill="#2dd4a1" />
              <ellipse cx="195" cy="110" rx="5" ry="5" fill="#2dd4a1" />
            </g>
          </g>
        </svg>
      </div>
      
      <div className="controlsa">
       
        <button id='buttona' onClick={startAnimation}>Fun with Emma</button>
      </div>
    </div>
  );
};

export default AnimatedBot;