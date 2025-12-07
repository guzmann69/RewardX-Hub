import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { QuickSteps } from './components/QuickSteps';
import { RewardCard } from './components/RewardCard';
import { UnlockModal } from './components/UnlockModal';
import { REWARDS, LOCKER_URL, TIMER_DURATION_SECONDS, Reward } from './constants';
import { CheckCircle } from 'lucide-react';

const App: React.FC = () => {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timer, setTimer] = useState(TIMER_DURATION_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Fixed: Used 'any' instead of 'NodeJS.Timeout' to avoid namespace errors in browser environments
    let interval: any;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  const handleUnlock = (reward: Reward) => {
    setSelectedReward(reward);
    setTimer(TIMER_DURATION_SECONDS);
    setIsTimerRunning(false);
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  const handleStartOffer = () => {
    // Open locker safely
    window.open(LOCKER_URL, '_blank', 'noopener,noreferrer');
    setIsTimerRunning(true);
  };

  const handleVerify = () => {
    setIsModalOpen(false);
    setShowSuccess(true);
    // Reset success msg after 5s
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#04060a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f1720] via-[#04060a] to-[#04060a] pb-12">
      
      {/* Header */}
      <Header />

      {/* Quick Steps - Top Position */}
      <QuickSteps />

      {/* Rewards Gallery */}
      <main className="w-full max-w-5xl mx-auto px-4">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Rewards Gallery</h2>
          <span className="text-xs text-[#9aa6b2]">
            {REWARDS.length} Items Available
          </span>
        </div>

        {/* Responsive Grid: 2 columns on mobile, 3 on md, 4 on lg */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {REWARDS.map((reward) => (
            <RewardCard 
              key={reward.id} 
              reward={reward} 
              onUnlock={handleUnlock} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center border-t border-white/5 pt-8 pb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-1 h-1 rounded-full bg-[#00d4ff]"></div>
          <span className="text-[#00d4ff] text-xs font-bold tracking-widest uppercase">RewardX Hub</span>
          <div className="w-1 h-1 rounded-full bg-[#00d4ff]"></div>
        </div>
        <p className="text-[11px] text-[#9aa6b2]">Digital Items Showcase • Not affiliated with listed brands</p>
      </footer>

      {/* Modals & Overlays */}
      <UnlockModal 
        isOpen={isModalOpen}
        reward={selectedReward}
        timer={timer}
        isTimerRunning={isTimerRunning}
        onClose={() => setIsModalOpen(false)}
        onStartOffer={handleStartOffer}
        onVerify={handleVerify}
      />

      {/* Success Notification */}
      {showSuccess && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="bg-[#0f1720]/90 backdrop-blur-md border border-[#22ff9b]/30 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#22ff9b]" />
            <div>
              <h4 className="text-white text-sm font-bold">Verification Pending</h4>
              <p className="text-[11px] text-[#9aa6b2]">Check your email for status updates.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;