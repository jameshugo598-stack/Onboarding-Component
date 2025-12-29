import React from 'react';
import { FormData, RoleType, UsageType } from '../../types';
import { Icons } from '../ui/Icons';

interface ProfileStepProps {
  data: FormData;
  updateData: (fields: Partial<FormData>) => void;
}

const ProfileStep: React.FC<ProfileStepProps> = ({ data, updateData }) => {
  
  const roles: { id: RoleType; icon: React.ElementType; label: string; desc: string }[] = [
    { id: 'Developer', icon: Icons.Code, label: 'Developer', desc: 'Engineering & Code' },
    { id: 'Designer', icon: Icons.Pen, label: 'Designer', desc: 'UI/UX & Brand' },
    { id: 'Product Manager', icon: Icons.Chart, label: 'Product', desc: 'Strategy & Roadmap' },
    { id: 'Founder', icon: Icons.Rocket, label: 'Founder', desc: 'Business & Ops' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Customize your experience</h2>
        <p className="text-sm text-zinc-500">We'll adapt the interface based on your role.</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-700 block">What is your primary role?</label>
          <div className="grid grid-cols-2 gap-3">
            {roles.map((role) => (
              <button
                key={role.id}
                type="button"
                onClick={() => updateData({ role: role.id })}
                className={`group relative flex flex-col items-start gap-2 rounded-xl border p-3 sm:p-4 text-left shadow-sm transition-all duration-200 outline-none
                  ${data.role === role.id 
                    ? 'border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900' 
                    : 'border-zinc-200 bg-white hover:border-zinc-300 hover:bg-zinc-50/50'
                  }`}
              >
                <div className={`rounded-lg p-2 transition-colors ${data.role === role.id ? 'bg-white text-zinc-900 shadow-sm' : 'bg-zinc-100 text-zinc-500 group-hover:text-zinc-900'}`}>
                  <role.icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">{role.label}</div>
                  <div className="text-[11px] text-zinc-500 leading-tight mt-0.5">{role.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2 pt-2">
          <label className="text-xs font-medium text-zinc-700 block">How do you plan to use this?</label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: 'Personal', icon: Icons.User, label: 'For myself', desc: 'Individual use' },
              { id: 'Team', icon: Icons.Users, label: 'With my team', desc: 'Collaboration' }
            ].map((usage) => (
              <button
                key={usage.id}
                type="button"
                onClick={() => updateData({ usage: usage.id as UsageType })}
                className={`group flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 outline-none text-left
                  ${data.usage === usage.id 
                    ? 'border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900' 
                    : 'border-zinc-200 bg-white hover:border-zinc-300'
                  }`}
              >
                <div className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${data.usage === usage.id ? 'bg-white border-zinc-200 text-zinc-900 shadow-sm' : 'bg-zinc-50 border-zinc-100 text-zinc-500 group-hover:bg-zinc-100 group-hover:text-zinc-900'}`}>
                  <usage.icon size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-zinc-900">{usage.label}</span>
                  <span className="text-[10px] text-zinc-400">{usage.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStep;