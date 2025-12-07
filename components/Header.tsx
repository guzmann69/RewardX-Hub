import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="mb-6 flex flex-col items-center justify-center pt-8 pb-4 text-center">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#22ff9b] flex items-center justify-center shadow-lg shadow-cyan-500/20">
          <span className="text-[#001] font-bold text-xl tracking-tighter">RX</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          RewardX Hub
        </h1>
      </div>
      <p className="text-sm text-[#9aa6b2] max-w-md mx-auto px-4">
        Your Digital Rewards & Gaming Items Showcase
      </p>
    </header>
  );
};