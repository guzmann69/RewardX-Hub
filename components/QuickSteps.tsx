import React from 'react';
import { MousePointerClick, CheckCircle2, ShieldCheck } from 'lucide-react';

export const QuickSteps: React.FC = () => {
  const steps = [
    {
      icon: <MousePointerClick className="w-4 h-4 text-[#00eaff]" />,
      title: 'Select Reward',
      desc: 'Choose any item from the available rewards list.'
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#00eaff]" />,
      title: 'Complete Offer',
      desc: 'Follow the instructions on the sponsor page and finish the required steps.'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#00eaff]" />,
      title: 'Verify',
      desc: 'Return to this page and click Verify to finalize your request.'
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 mb-8">
      <div className="border-t border-white/5 pt-6">
        <h2 className="text-[#00eaff] text-xs font-bold uppercase tracking-wider mb-4 text-center md:text-left">
          Quick Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-[#0f1720]/50 border border-white/5 rounded-2xl p-4 flex flex-row md:flex-row items-center gap-3 shadow-sm hover:border-[#00eaff]/30 transition-colors duration-300"
            >
              <div className="bg-[#00eaff]/10 p-2 rounded-lg shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-white text-sm font-semibold leading-tight mb-1">{step.title}</h3>
                <p className="text-[#9aa6b2] text-[11px] leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};