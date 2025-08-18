import React from 'react';

const TestFlightIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    className={className}
  >
    <rect 
      x="3" 
      y="3" 
      width="18" 
      height="18" 
      rx="4" 
      fill="currentColor" 
    />
    <path 
      d="M12 7l-3 4h2v4l3-4h-2V7z" 
      fill="white" 
    />
  </svg>
);

export default TestFlightIcon;