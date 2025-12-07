import React from 'react';
import { X, ExternalLink, ShieldCheck, Timer } from 'lucide-react';
import { Reward } from '../constants';

interface UnlockModalProps {
  isOpen: boolean;
  reward: Reward | null;
  timer: number;
  isTimerRunning: boolean;
  onClose: () => void;
  onStartOffer: () => void;
  onVerify: () => void;
}

export const UnlockModal: React.FC<UnlockModalProps> = ({
  isOpen,
  reward,
  timer,
  isTimerRunning,
  onClose,
  onStartOffer,
  onVerify
}) => {
  if (!isOpen || !reward) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#0f1720] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl p-6 relative animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-white mb-1">Unlock Reward</h2>
            <p className="text-sm text-[#9aa6b2]">Complete offer to proceed</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-[#9aa6b2] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Reward Preview */}
        <div className="flex items-center gap-4 bg-[#0b0f13] p-3 rounded-xl border border-white/5 mb-6">
          <img 
            src={reward.img} 
            alt={reward.title} 
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-sm font-semibold text-white">{reward.title}</h3>
            <p className="text-xs text-[#00d4ff]">{reward.category}</p>
          </div>
        </div>

        {/* Action Logic */}
        <div className="space-y-4">
          <p className="text-sm text-[#9aa6b2] leading-relaxed">
            To unlock this reward, please complete the sponsor offer. The page will open in a new tab.
          </p>

          {isTimerRunning && (
            <div className="flex flex-col items-center justify-center py-4 bg-[#00d4ff]/5 rounded-xl border border-[#00d4ff]/20">
              <span className="text-xs text-[#00d4ff] uppercase font-bold tracking-wider mb-1">Time Remaining</span>
              <div className="flex items-center gap-2 text-2xl font-mono font-bold text-white">
                <Timer className="w-6 h-6 text-[#00d4ff] animate-pulse" />
                {formatTime(timer)}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3 pt-2">
            <button
              onClick={onStartOffer}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#00b7ff] hover:brightness-110 text-black font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
            >
              Start Offer
              <ExternalLink className="w-4 h-4" />
            </button>
            <button
              onClick={onVerify}
              disabled={!isTimerRunning}
              className={`flex items-center justify-center gap-2 border font-semibold py-3 px-4 rounded-xl transition-all ${
                isTimerRunning 
                  ? 'border-[#22ff9b] text-[#22ff9b] hover:bg-[#22ff9b]/10 cursor-pointer active:scale-95' 
                  : 'border-white/10 text-gray-500 cursor-not-allowed'
              }`}
            >
              Verify
              <ShieldCheck className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <p className="text-[10px] text-center text-[#9aa6b2]/50 mt-6">
          By continuing, you agree to the terms of service.
        </p>

      </div>
    </div>
  );
};