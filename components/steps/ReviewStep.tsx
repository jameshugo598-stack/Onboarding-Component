import React from 'react';
import { FormData } from '../../types';
import { Icons } from '../ui/Icons';

interface ReviewStepProps {
  data: FormData;
  onEdit: () => void;
}

const ReviewStep: React.FC<ReviewStepProps> = ({ data, onEdit }) => {
  const initials = data.name 
    ? data.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'U';

  const getRoleIcon = () => {
    switch (data.role) {
      case 'Developer': return Icons.Code;
      case 'Designer': return Icons.Pen;
      case 'Product Manager': return Icons.Chart;
      case 'Founder': return Icons.Rocket;
      default: return Icons.Briefcase;
    }
  };

  const RoleIcon = getRoleIcon();

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Ready to launch?</h2>
        <p className="text-sm text-zinc-500">Confirm your details to access your workspace.</p>
      </div>

      <div className="relative group mx-auto w-full max-w-[340px]">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-b from-zinc-200 to-zinc-100 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
        
        <div className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
          {/* Header */}
          <div className="h-24 bg-zinc-50/80 p-5 flex items-center justify-between border-b border-dashed border-zinc-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-40" style={{ 
               backgroundImage: 'radial-gradient(#e4e4e7 1px, transparent 1px)', 
               backgroundSize: '12px 12px' 
            }}></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-700 flex items-center justify-center text-white font-medium text-lg shadow-md ring-4 ring-white">
                {initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-zinc-900">{data.name || 'User'}</div>
                <div className="text-xs text-zinc-500 truncate max-w-[140px]">{data.email || 'No email provided'}</div>
              </div>
            </div>
            <button onClick={onEdit} className="relative z-10 text-zinc-400 hover:text-zinc-900 transition-colors p-1">
              <Icons.Pencil size={14} />
            </button>
          </div>

          {/* Cutout Effect (Scallops) */}
          <div className="relative h-px bg-zinc-200 w-full">
            <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-white border border-zinc-200 z-20"></div>
            <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-white border border-zinc-200 z-20"></div>
          </div>

          {/* Body */}
          <div className="p-5 space-y-4 bg-white">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1">Role</div>
                <div className="flex items-center gap-1.5 text-zinc-900 text-sm font-medium">
                  <RoleIcon size={14} className="text-zinc-500" />
                  <span>{data.role}</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 mb-1">Plan Type</div>
                <div className="flex items-center gap-1.5 text-zinc-900 text-sm font-medium">
                  <Icons.User size={14} className="text-zinc-500" />
                  <span>{data.usage}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="flex justify-between items-end mb-2">
                 <div className="text-[10px] text-zinc-400">Setup Complete</div>
                 <div className="text-[10px] font-bold text-zinc-900">100%</div>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-1.5 overflow-hidden">
                <div className="bg-zinc-900 h-1.5 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Icons.ShieldCheck size={12} className="text-zinc-400" />
        <span className="text-[10px] text-zinc-400">Secure connection via SSL</span>
      </div>
    </div>
  );
};

export default ReviewStep;