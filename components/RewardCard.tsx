import React from 'react';
import { Reward } from '../constants';
import { Lock } from 'lucide-react';

interface RewardCardProps {
  reward: Reward;
  onUnlock: (reward: Reward) => void;
}

export const RewardCard: React.FC<RewardCardProps> = ({ reward, onUnlock }) => {
  return (
    <div className="group bg-[#0f1720] border border-white/5 rounded-[20px] p-3 md:p-4 flex flex-col gap-3 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10 hover:border-white/10 relative overflow-hidden">
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Container */}
      <div className="aspect-square w-full rounded-2xl overflow-hidden bg-[#07101a] relative">
        <img 
          src={reward.img} 
          alt={reward.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
          <span className="text-[10px] text-white/90 font-medium uppercase tracking-wide">
            {reward.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="text-sm font-semibold text-white leading-tight mb-1 line-clamp-2 min-h-[2.5em]">
          {reward.title}
        </h3>
        
        <button 
          onClick={() => onUnlock(reward)}
          className="mt-auto w-full py-2.5 px-3 rounded-xl bg-[#0b0f13] border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 group-hover:bg-[#00d4ff] group-hover:text-black group-hover:border-transparent transition-all duration-300"
        >
          <Lock className="w-3 h-3" />
          Unlock Reward
        </button>
      </div>
    </div>
  );
};