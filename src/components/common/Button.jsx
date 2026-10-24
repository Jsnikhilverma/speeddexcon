import React from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';

export const Button = ({
  children,
  variant = 'terracotta',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  showArrow = false,
  className = '',
  type = 'button',
  target,
  rel,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-display font-medium tracking-wide transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs uppercase tracking-wider gap-2 rounded-sm',
    md: 'px-6 py-3 text-sm tracking-wide gap-2.5 rounded-sm',
    lg: 'px-8 py-4 text-base tracking-wide gap-3 rounded-sm',
  };

  const variantStyles = {
    terracotta: 'bg-[#C25E38] hover:bg-[#A94F2E] text-white shadow-sm hover:shadow-md focus:ring-[#C25E38]',
    navy: 'bg-[#0F263B] hover:bg-[#163854] text-white shadow-sm hover:shadow-md focus:ring-[#0F263B]',
    charcoal: 'bg-[#0E1318] hover:bg-[#1B232C] text-white shadow-sm hover:shadow-md focus:ring-[#0E1318]',
    outline: 'border border-[#C25E38] text-[#C25E38] hover:bg-[#C25E38] hover:text-white focus:ring-[#C25E38]',
    outlineNavy: 'border border-[#0F263B] text-[#0F263B] hover:bg-[#0F263B] hover:text-white focus:ring-[#0F263B]',
    outlineWhite: 'border border-white/40 text-white hover:bg-white hover:text-[#0E1318] focus:ring-white',
    subtle: 'bg-[#EAE6DF] hover:bg-[#DFD9D0] text-[#11161B] focus:ring-[#C25E38]',
    whatsapp: 'bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-sm focus:ring-[#25D366]',
    white: 'bg-white hover:bg-[#F8F7F4] text-[#0E1318] shadow-sm hover:shadow-md focus:ring-white',
  };

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.terracotta} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : Icon ? (
        <Icon className="w-4 h-4 shrink-0" />
      ) : null}
      <span>{children}</span>
      {showArrow && !loading && (
        <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${classes}`}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`group ${classes}`}
      {...props}
    >
      {content}
    </button>
  );
};
