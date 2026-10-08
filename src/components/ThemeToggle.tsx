import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer border ${
        theme === 'dark'
          ? 'bg-white/10 border-white/20 text-yellow-400 hover:bg-white/15 hover:border-yellow-400/50 shadow-glow-cyan'
          : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 scale-100" />
        )}
      </div>
    </button>
  );
};
