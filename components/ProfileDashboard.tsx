import React from 'react';
import { FormData } from '../types';
import { Icons } from './ui/Icons';

interface ProfileDashboardProps {
  data: FormData;
  onReset: () => void;
}

const ProfileDashboard: React.FC<ProfileDashboardProps> = ({ data, onReset }) => {
  const initials = data.name 
    ? data.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()
    : 'U';

  const authLabel = data.authProvider === 'github' ? 'GitHub' : data.authProvider === 'google' ? 'Google' : 'Email';

  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in zoom-in-95 duration-500">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
         <div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">Welcome, {data.name.split(' ')[0]}</h1>
            <p className="text-zinc-500 text-sm">Your workspace is ready.</p>
         </div>
         <button 
           onClick={onReset}
           className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors"
           title="Sign Out"
         >
           <Icons.LogOut size={18} />
         </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl shadow-zinc-200/40 border border-zinc-100 overflow-hidden">
        
        {/* Banner */}
        <div className="h-32 bg-zinc-900 relative">
             <div className="absolute inset-0 opacity-20" style={{ 
               backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
               backgroundSize: '16px 16px' 
            }}></div>
        </div>

        {/* Profile Info */}
        <div className="px-8 pb-8 relative">
          <div className="flex justify-between items-end -mt-10 mb-6">
             <div className="h-20 w-20 rounded-2xl bg-white p-1 shadow-md">
                <div className="h-full w-full bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-900 font-bold text-2xl">
                    {initials}
                </div>
             </div>
             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-900">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Active Now
             </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                  <div>
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Identity</label>
                      <div className="mt-2 text-sm text-zinc-900 font-medium flex items-center gap-2">
                          {data.name}
                      </div>
                      <div className="text-sm text-zinc-500">{data.email}</div>
                  </div>
                  <div>
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Authentication</label>
                      <div className="mt-2 flex items-center gap-2">
                          {data.authProvider === 'github' && <Icons.Github size={16} />}
                          {data.authProvider === 'google' && <Icons.Chrome size={16} />}
                          {data.authProvider === 'email' && <Icons.Mail size={16} />}
                          <span className="text-sm font-medium text-zinc-900">{authLabel}</span>
                      </div>
                  </div>
              </div>

              <div className="space-y-4">
                  <div>
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Role</label>
                      <div className="mt-2 inline-block px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900">
                          {data.role}
                      </div>
                  </div>
                  <div>
                      <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Usage Plan</label>
                      <div className="mt-2 inline-block px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900">
                          {data.usage}
                      </div>
                  </div>
              </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-100 flex gap-4">
             <button 
                onClick={onReset}
                className="flex-1 bg-zinc-900 text-white hover:bg-zinc-800 h-11 px-4 rounded-xl text-sm font-medium shadow-lg shadow-zinc-900/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
             >
                Get Started
             </button>
             <button className="px-4 h-11 rounded-xl border border-zinc-200 text-zinc-600 font-medium text-sm hover:bg-zinc-50 transition-colors">
                Edit Profile
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;