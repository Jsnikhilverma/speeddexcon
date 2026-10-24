import React from 'react';
import { motion } from 'framer-motion';

export const StatCounter = ({
  value,
  label,
  sublabel,
  prefix = '',
  suffix = '',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative p-5 sm:p-6 border transition-all duration-300 ${
        isDark
          ? 'bg-[#161D24]/60 border-white/10 hover:border-white/20'
          : 'bg-white border-[#E7E2D8] hover:border-[#C25E38]/50 shadow-xs hover:shadow-sm'
      } ${className}`}
    >
      {/* Top architectural tick */}
      <div className={`absolute top-0 left-0 w-4 h-[2px] ${isDark ? 'bg-[#E09F3E]' : 'bg-[#C25E38]'}`} />

      <div className="flex items-baseline gap-1 mb-1">
        {prefix && (
          <span className={`font-display text-xl sm:text-2xl font-semibold ${
            isDark ? 'text-gray-400' : 'text-[#5A6572]'
          }`}>
            {prefix}
          </span>
        )}
        <span className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight tabular-nums ${
          isDark ? 'text-white' : 'text-[#0E1318]'
        }`}>
          {value}
        </span>
        {suffix && (
          <span className={`font-display text-2xl sm:text-3xl font-bold ${
            isDark ? 'text-[#E09F3E]' : 'text-[#C25E38]'
          }`}>
            {suffix}
          </span>
        )}
      </div>

      <p className={`font-display font-semibold text-sm sm:text-base tracking-tight ${
        isDark ? 'text-gray-200' : 'text-[#161D24]'
      }`}>
        {label}
      </p>

      {sublabel && (
        <p className={`text-xs mt-1 leading-normal ${
          isDark ? 'text-gray-400' : 'text-[#5A6572]'
        }`}>
          {sublabel}
        </p>
      )}
    </motion.div>
  );
};
