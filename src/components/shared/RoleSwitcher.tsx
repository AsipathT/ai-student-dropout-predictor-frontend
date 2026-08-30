import React from 'react';

interface RoleSwitcherProps {
  currentRole: string;
  onRoleChange: (role: string) => void;
}

export default function RoleSwitcher({ currentRole, onRoleChange }: RoleSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <select 
        value={currentRole} 
        onChange={(e) => onRoleChange(e.target.value)}
        className="text-xs bg-slate-800 text-slate-300 border border-slate-700 rounded px-2 py-1"
      >
        <option value="Dr. Sarah Perera">Dr. Sarah Perera</option>
        <option value="Admin">Admin</option>
      </select>
    </div>
  );
}
