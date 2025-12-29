import React, { useState } from 'react';
import { Step, FormData } from './types';
import StepIndicator from './components/StepIndicator';
import AccountStep from './components/steps/AccountStep';
import ProfileStep from './components/steps/ProfileStep';
import ReviewStep from './components/steps/ReviewStep';
import ProfileDashboard from './components/ProfileDashboard';
import { Icons } from './components/ui/Icons';

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(Step.ACCOUNT);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    role: '',
    usage: '',
    authProvider: 'email'
  });

  const updateFormData = (fields: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (step < Step.COMPLETED) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > Step.ACCOUNT) {
      setStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setStep(Step.ACCOUNT);
    setFormData({
      name: '',
      email: '',
      password: '',
      role: '',
      usage: '',
      authProvider: 'email'
    });
  };

  // Validation Logic
  const canProceed = () => {
    switch (step) {
      case Step.ACCOUNT:
        if (formData.authProvider !== 'email') return true; // Social auth is instant
        return formData.name.length > 1 && formData.email.includes('@') && formData.password.length >= 8;
      case Step.PROFILE:
        return formData.role !== '' && formData.usage !== '';
      case Step.REVIEW:
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (step) {
      case Step.ACCOUNT:
        return <AccountStep data={formData} updateData={updateFormData} />;
      case Step.PROFILE:
        return <ProfileStep data={formData} updateData={updateFormData} />;
      case Step.REVIEW:
        return <ReviewStep data={formData} onEdit={() => setStep(Step.ACCOUNT)} />;
      case Step.COMPLETED:
        return <ProfileDashboard data={formData} onReset={handleReset} />;
      default:
        return null;
    }
  };

  if (step === Step.COMPLETED) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
         {/* Decorative Background */}
        <div className="fixed top-0 w-full h-screen -z-10 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
        </div>
        <ProfileDashboard data={formData} onReset={handleReset} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-6 p-4">
      {/* Decorative Background */}
      <div className="fixed top-0 w-full h-screen -z-10 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
      </div>

      <div className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm sm:border sm:border-zinc-100 sm:shadow-xl sm:shadow-zinc-200/40 rounded-2xl p-6 sm:p-10 relative overflow-hidden transition-all duration-300">
        
        <StepIndicator currentStep={step} />

        <div className="min-h-[400px] flex flex-col justify-between">
          
          <div className="py-2">
            {renderStep()}
          </div>

          <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-100">
            <button
              onClick={handleBack}
              disabled={step === Step.ACCOUNT}
              className={`inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 h-10 px-4 py-2 hover:bg-zinc-50 text-zinc-500 hover:text-zinc-900
                ${step === Step.ACCOUNT ? 'opacity-0 pointer-events-none' : 'opacity-100'}
              `}
            >
              <Icons.ArrowLeft size={16} className="mr-2" />
              Back
            </button>
            
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-zinc-900 text-white hover:bg-zinc-800 h-10 px-6 py-2 shadow-md shadow-zinc-900/10 active:scale-[0.98]"
            >
              {step === Step.REVIEW ? (
                <>
                  <span>Complete Setup</span>
                  <Icons.Check size={16} className="ml-2" />
                </>
              ) : (
                <>
                  <span>Next Step</span>
                  <Icons.ArrowRight size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;