import React, { useEffect, useState } from 'react';

export default function Loader({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Smooth progress counter incrementing to 100 over 1800ms
    const totalDuration = 1600;
    const intervalTime = 20; // 20ms steps
    const steps = totalDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(interval);
        // Start fading out after reaching 100%
        setTimeout(() => {
          setFade(true);
          // Let parent know preloader has finished fading out
          setTimeout(() => {
            if (onFinished) onFinished();
          }, 500); // match transition duration
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div
      id="site-loader"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#fefefd] text-brand-copper select-none transition-all duration-500 ease-in-out ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
    >
      {/* Styles for custom keyframes (spin-reverse & custom scale pulse) */}
      <style>{`
        @keyframes spin-reverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        .animate-subtle-pulse {
          animation: subtle-pulse 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle mesh grid background overlay */}
      <div id="loader-grid" className="absolute inset-0 bg-[size:40px_40px] pointer-events-none"></div>
      <div id="loader-glow" className="absolute inset-0 pointer-events-none"></div>

      {/* Center content container */}
      <div className="relative flex flex-col items-center justify-center z-10 space-y-8">

        {/* Animated Concentric Rings Container */}
        <div className="relative w-36 h-36 flex items-center justify-center">

          {/* Outer Copper Spinner */}
          <div id="loader-outer-ring" className="absolute inset-0 rounded-full border-2 border-transparent animate-spin"></div>

          {/* Middle Copper Dark Spinner (spinning opposite direction) */}
          <div id="loader-inner-ring" className="absolute inset-3 rounded-full border border-transparent animate-spin-reverse"></div>

          {/* Inner Glowing Core Panel with Logo text */}
          <div id="loader-panel" className="absolute inset-6 rounded-full border flex flex-col items-center justify-center">
            <span className="text-[10px] font-extrabold tracking-[0.25em] text-brand-copper-dark uppercase animate-pulse">Metal</span>
            <span className="text-gradient-copper text-[16px] font-black tracking-widest uppercase mt-0.5">Nova</span>
          </div>

        </div>

        {/* Brand Text Header */}
        <div className="text-center space-y-1 animate-subtle-pulse">
          <h2 className="text-xl font-black tracking-[0.3em] uppercase text-gradient-copper">
            Metalnova
          </h2>
          <p className="text-[9px] font-bold tracking-[0.4em] text-brand-copper-dark uppercase">
            Engineering Precision
          </p>
        </div>

        {/* Counter and Progress bar */}
        <div className="flex flex-col items-center space-y-3 pt-4">
          {/* Percentage */}
          <span className="text-[16px] font-mono font-bold tracking-widest text-brand-copper">
            {progress}%
          </span>

          {/* Progress bar track */}
          <div id="loader-progress-track" className="w-48 h-[2px] rounded-full overflow-hidden">
            <div
              id="loader-progress-fill"
              className="h-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
}
