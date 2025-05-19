import React from 'react';
import { Car } from 'lucide-react';

interface LogoProps {
  scrolled?: boolean;
}

const Logo: React.FC<LogoProps> = ({ scrolled = false }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`p-1.5 rounded-lg ${scrolled ? 'bg-yellow-500' : 'bg-white bg-opacity-10'} transition-all duration-300`}>
        <Car 
          size={24} 
          className={`${scrolled ? 'text-blue-900' : 'text-white'} transition-colors duration-300`}
          strokeWidth={2.5}
        />
      </div>
      <span className={`font-bold text-2xl md:text-3xl ${scrolled ? 'text-blue-900' : 'text-white'}`}>
        JKIA<span className="text-yellow-500">Express</span>
      </span>
    </div>
  );
};

export default Logo;