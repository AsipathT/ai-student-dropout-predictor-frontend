import React from 'react';

type BadgeVariant =
  | 'risk-critical'
  | 'risk-high'
  | 'risk-medium'
  | 'risk-low'
  | 'trajectory-stable'
  | 'trajectory-improving'
  | 'trajectory-declining'
  | 'trajectory-volatile'
  | 'emotion-anxiety'
  | 'emotion-confusion'
  | 'emotion-helplessness'
  | 'emotion-erosion'
  | 'default';

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  'risk-critical': 'bg-rose-100 text-rose-700',
  'risk-high': 'bg-amber-100 text-amber-700',
  'risk-medium': 'bg-yellow-100 text-yellow-700',
  'risk-low': 'bg-emerald-100 text-emerald-700',
  'trajectory-stable': 'bg-emerald-100 text-emerald-700',
  'trajectory-improving': 'bg-blue-100 text-blue-700',
  'trajectory-declining': 'bg-amber-100 text-amber-700',
  'trajectory-volatile': 'bg-rose-100 text-rose-700',
  'emotion-anxiety': 'bg-rose-100 text-rose-600',
  'emotion-confusion': 'bg-amber-100 text-amber-600',
  'emotion-helplessness': 'bg-violet-100 text-violet-600',
  'emotion-erosion': 'bg-slate-100 text-slate-600',
  default: 'bg-gray-100 text-gray-700',
};

const Badge: React.FC<BadgeProps> = ({ variant = 'default', children, className = '' }) => {
  return (
    <span className={`badge px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
