import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
  icon?: LucideIcon;
}

const Card: React.FC<CardProps> = ({ title, children, className = '', headerActions, icon: Icon }) => {
  return (
    <div className={`card bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden ${className}`}>
      {(title || Icon || headerActions) && (
        <div className="card-header px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {Icon && <Icon className="w-5 h-5 text-gray-500" />}
            {title && <h3 className="font-semibold text-gray-800">{title}</h3>}
          </div>
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}
      <div className="card-body px-4 py-4">{children}</div>
    </div>
  );
};

export default Card;
