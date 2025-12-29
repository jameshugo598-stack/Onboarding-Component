import React from 'react';
import { Step } from '../types';
import { Icons } from './ui/Icons';

interface StepIndicatorProps {
  currentStep: Step;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  // We only show the indicator for steps 0, 1, 2. Step 3 is the profile view.
  if (currentStep === Step.COMPLETED) return null;

  const steps = [
    { label: 'Account', sub: 'Login details' },
    { label: 'Profile', sub: 'Personalize' },
    { label: 'Review', sub: 'Confirm' },
  ];

  return (
    <nav aria-label="Progress" class="pb-8 border-b border-zinc-100 mb-8">
      <ol className="flex items-center w-full">
        {steps.map((s, index) => {
          const isCompleted = currentStep > index;
          const isCurrent = currentStep === index;
          const isPending = currentStep < index;

          return (
            <li key={index} className={`flex items-center relative ${index !== steps.length - 1 ? 'flex-1' : ''}`}>
              <div className="flex items-center relative z-10 group cursor-default">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-medium transition-all duration-300
                    ${isCompleted 
                      ? 'border-zinc-900 bg-zinc-900 text-white' 
                      : isCurrent 
                        ? 'border-zinc-900 bg-white text-zinc-900 shadow-[0_0_0_1px_rgba(24,24,27,0.1)]' 
                        : 'border-zinc-200 bg-white text-zinc-400'
                    }
                  `}
                >
                  {isCompleted ? <Icons.Check size={14} /> : index + 1}
                </div>
                <div className="flex flex-col ml-3">
                  <span className={`text-sm font-medium transition-colors duration-300 ${isPending ? 'text-zinc-400' : 'text-zinc-900'}`}>
                    {s.label}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium hidden sm:block">
                    {s.sub}
                  </span>
                </div>
              </div>
              
              {index !== steps.length - 1 && (
                <div className="flex-1 hidden sm:block h-[1px] bg-zinc-100 mx-4 relative overflow-hidden rounded-full">
                  <div 
                    className={`absolute left-0 top-0 bottom-0 h-full bg-zinc-900 transition-all duration-500 ease-in-out`}
                    style={{ width: isCompleted ? '100%' : '0%' }}
                  ></div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default StepIndicator;