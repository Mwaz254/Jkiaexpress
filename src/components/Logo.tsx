import React from 'react';

interface LogoProps {
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div 
        className={`
          font-bold text-2xl md:text-3xl p-2 rounded-lg 
          ${scrolled ? 'bg-yellow-500' : 'bg-white bg-opacity-10'} 
          transition-all duration-300
        `}
      >
        <span className={scrolled ? 'text-blue-900' : 'text-white'}>J</span>
        <span className="text-yellow-500">E</span>
      </div>
      <div className={`font-bold text-2xl md:text-3xl ${scrolled ? 'text-blue-900' : 'text-white'}`}>
        JKIA<span className="text-yellow-500">Express</span>
      </div>
    </div>
  );
};

export default Logo;