import React from 'react';
import logoImg from '../assets/logo.png';

export default function Logo({ className = '', size = 'md' }) {
  // Height sizing based on prop
  const heightClass = {
    sm: 'h-8 lg:h-9',
    md: 'h-10 lg:h-11',
    lg: 'h-14 lg:h-16'
  }[size] || 'h-10 lg:h-11';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoImg}
        alt="Metalnova Logo"
        className={`${heightClass} w-auto object-contain`}
      />
    </div>
  );
}
