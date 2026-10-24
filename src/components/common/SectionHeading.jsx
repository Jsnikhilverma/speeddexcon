import React from 'react';

export const SectionHeading = ({
  number,
  badge,
  title,
  highlight,
  description,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {/* Blueprint / Architectural tag */}
      {(number || badge) && (
        <div className={`inline-flex items-center gap-2 mb-3 font-mono text-xs uppercase tracking-widest ${
          isDark ? 'text-[#E09F3E]' : 'text-[#C25E38]'
        }`}>
          {number && <span className="font-semibold">[{number}]</span>}
          {number && badge && <span className="opacity-40">//</span>}
          {badge && <span className="font-medium">{badge}</span>}
          <span className={`inline-block w-8 h-[1px] ${isDark ? 'bg-[#E09F3E]/40' : 'bg-[#C25E38]/40'}`} />
        </div>
      )}

      {/* Primary Section Title */}
      <h2 className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-4 ${
        isDark ? 'text-white' : 'text-[#0E1318]'
      }`}>
        {title}{' '}
        {highlight && (
          <span className={isDark ? 'text-[#E09F3E]' : 'text-[#C25E38]'}>
            {highlight}
          </span>
        )}
      </h2>

      {/* Explanatory Body Text */}
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-[#5A6572]'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};
