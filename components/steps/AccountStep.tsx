import React from 'react';
import { FormData } from '../../types';
import { Icons } from '../ui/Icons';

interface AccountStepProps {
  data: FormData;
  updateData: (fields: Partial<FormData>) => void;
}

const AccountStep: React.FC<AccountStepProps> = ({ data, updateData }) => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900">Create your account</h2>
        <p className="text-sm text-zinc-500">Choose your preferred method to continue.</p>
      </div>

      {/* Social Auth */}
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={() => updateData({ authProvider: 'github' })}
          className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium
            ${data.authProvider === 'github' 
              ? 'border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900 text-zinc-900' 
              : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-900'
            }`}
        >
          <Icons.Github size={18} />
          <span>GitHub</span>
        </button>
        <button 
           onClick={() => updateData({ authProvider: 'google' })}
           className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-200 text-sm font-medium
            ${data.authProvider === 'google' 
              ? 'border-zinc-900 bg-zinc-50 ring-1 ring-zinc-900 text-zinc-900' 
              : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 hover:text-zinc-900'
            }`}
        >
          <Icons.Chrome size={18} />
          <span>Google</span>
        </button>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-zinc-100"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-zinc-400">Or continue with email</span>
        </div>
      </div>

      {/* Manual Input Fields */}
      <div 
        className={`space-y-4 transition-opacity duration-300 ${data.authProvider !== 'email' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}
        onClick={() => { if(data.authProvider !== 'email') updateData({ authProvider: 'email' }); }}
      >
        <div className="space-y-1.5 group">
          <label className="text-xs font-medium text-zinc-700 transition-colors group-focus-within:text-zinc-900">Full Name</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-900">
              <Icons.User size={16} />
            </div>
            <input
              type="text"
              value={data.name}
              onChange={(e) => updateData({ name: e.target.value, authProvider: 'email' })}
              placeholder="John Doe"
              className="flex h-10 w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-3 py-1 text-sm shadow-sm transition-all placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:border-zinc-950 hover:border-zinc-300"
            />
          </div>
        </div>

        <div className="space-y-1.5 group">
          <label className="text-xs font-medium text-zinc-700 transition-colors group-focus-within:text-zinc-900">Email Address</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-900">
              <Icons.Mail size={16} />
            </div>
            <input
              type="email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value, authProvider: 'email' })}
              placeholder="name@company.com"
              className="flex h-10 w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-3 py-1 text-sm shadow-sm transition-all placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:border-zinc-950 hover:border-zinc-300"
            />
          </div>
        </div>

        <div className="space-y-1.5 group">
          <label className="text-xs font-medium text-zinc-700 transition-colors group-focus-within:text-zinc-900">Password</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-zinc-900">
              <Icons.Lock size={16} />
            </div>
            <input
              type="password"
              value={data.password}
              onChange={(e) => updateData({ password: e.target.value, authProvider: 'email' })}
              placeholder="••••••••"
              className="flex h-10 w-full rounded-lg border border-zinc-200 bg-white pl-9 pr-3 py-1 text-sm shadow-sm transition-all placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 focus-visible:border-zinc-950 hover:border-zinc-300"
            />
          </div>
          <p className="text-[10px] text-zinc-400">Must be at least 8 characters.</p>
        </div>
      </div>
    </div>
  );
};

export default AccountStep;