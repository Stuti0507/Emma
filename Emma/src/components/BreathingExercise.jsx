import React, { useState, useEffect } from 'react';
import './BreathingExercise.css'; // Import the CSS file
import {NavLink} from 'react-router-dom'

const BreathingExercise = () => {
  const [phase, setPhase] = useState('inhale');
  const [countdown, setCountdown] = useState(4);
  const [isActive, setIsActive] = useState(false);
  const [totalCycles, setTotalCycles] = useState(0);
  const [isHoveredStart, setIsHoveredStart] = useState(false);
  const [isHoveredReset, setIsHoveredReset] = useState(false);

  // Configuration for breathing pattern (in seconds)
  const breathConfig = {
    inhale: 4,
    hold1: 4,
    exhale: 6,
    hold2: 2,
  };

  useEffect(() => {
    let timer = null;
    
    if (isActive) {
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            // Move to next phase when countdown reaches 0
            switch (phase) {
              case 'inhale':
                setPhase('hold1');
                return breathConfig.hold1;
              case 'hold1':
                setPhase('exhale');
                return breathConfig.exhale;
              case 'exhale':
                setPhase('hold2');
                return breathConfig.hold2;
              case 'hold2':
                setPhase('inhale');
                setTotalCycles(prev => prev + 1);
                return breathConfig.inhale;
              default:
                return breathConfig.inhale;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isActive, phase]);

  const toggleExercise = () => {
    if (!isActive) {
      // Reset to beginning of cycle when starting
      setPhase('inhale');
      setCountdown(breathConfig.inhale);
    }
    setIsActive(!isActive);
  };

  const resetExercise = () => {
    setIsActive(false);
    setPhase('inhale');
    setCountdown(breathConfig.inhale);
    setTotalCycles(0);
  };

  // Calculate circle transform based on breathing phase
  const getCircleStyle = () => {
    const baseStyle = { width: '8rem', height: '8rem', backgroundColor: '#60A5FA', borderRadius: '50%', opacity: '0.7', transition: 'transform 1000ms' };
    
    switch (phase) {
      case 'inhale':
        const inhaleScale = 1 + (breathConfig.inhale - countdown) * 0.25;
        baseStyle.transform = `scale(${inhaleScale})`;
        return baseStyle;
      case 'hold1':
        baseStyle.transform = 'scale(2)';
        return baseStyle;
      case 'exhale':
        const exhaleScale = 2 - (breathConfig.exhale - countdown) * 0.25;
        baseStyle.transform = `scale(${exhaleScale})`;
        return baseStyle;
      case 'hold2':
        baseStyle.transform = 'scale(1)';
        return baseStyle;
      default:
        baseStyle.transform = 'scale(1)';
        return baseStyle;
    }
  };

  // Get instruction text based on current phase
  const getInstructionText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In';
      case 'hold1': return 'Hold';
      case 'exhale': return 'Breathe Out';
      case 'hold2': return 'Hold';
      default: return 'Breathe';
    }
  };

  return (
    <div id="breee">
      <nav id='brenavv'>
        <NavLink to="/dashboard" id='brenav'>Home</NavLink>
      </nav>
    <div id="contt">
     
      <h2 className="title">Breathing Exercise</h2>
      
      <div className="circleContainer">
        {/* Animated breathing circle */}
        <div className="breathingCircle" style={getCircleStyle()}></div>
        
        {/* Text overlay */}
        <div className="textOverlay">
          <span className="instructionText">{getInstructionText()}</span>
          <span className="countdownText">{countdown}</span>
        </div>
      </div>
      
      {/* Controls */}
      <div className="controlsContainer">
        <button 
          onClick={toggleExercise}
          className={`button startButton ${isActive ? 'pauseButton' : ''}`}
          onMouseEnter={() => setIsHoveredStart(true)}
          onMouseLeave={() => setIsHoveredStart(false)}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        
        <button 
          onClick={resetExercise}
          className="button resetButton"
          onMouseEnter={() => setIsHoveredReset(true)}
          onMouseLeave={() => setIsHoveredReset(false)}
        >
          Reset
        </button>
      </div>
      
      {/* Stats */}
      <div className="statsContainer">
        <p className="statsText">Completed cycles: {totalCycles}</p>
        <p className="patternText">Pattern: 4s inhale, 4s hold, 6s exhale, 2s hold</p>
      </div>
    </div>
    </div>
  );
};

export default BreathingExercise;
