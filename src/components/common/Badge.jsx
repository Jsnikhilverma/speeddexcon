import React from 'react';

export const Badge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    neutral: 'bg-[#F2EFE9] text-[#475569] border-[#E2DDD3]',
    terracotta: 'bg-[#C25E38]/10 text-[#C25E38] border-[#C25E38]/30',
    navy: 'bg-[#0F263B]/10 text-[#0F263B] border-[#0F263B]/30',
    green: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    amber: 'bg-amber-50 text-amber-900 border-amber-200',
    white: 'bg-white/90 text-[#0E1318] border-white/40 shadow-xs',
    dark: 'bg-[#161D24] text-white border-white/10',
  };

  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[11px] font-mono tracking-wider',
    sm: 'px-2.5 py-1 text-xs font-mono tracking-wide',
    md: 'px-3 py-1.5 text-xs font-mono tracking-wide',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-xs border font-medium uppercase ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
