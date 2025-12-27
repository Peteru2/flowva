import { useState, useEffect } from "react";
import {
  Calendar,
  Zap
} from "lucide-react";
import WeekDays from "./WeekDays";
import { useAuth } from "../../context/AuthContext";
import { useRewards } from "../../hooks/useRewards";
import { handleDailyCheckin } from "../../utils/dailyCheckin";
import { supabase } from "../../lib/supabase";
import RewardSuccessModal from "../../utils/RewardSuccessModal";

const DailyStreakCard = () => {
  const [claimedToday, setClaimedToday] = useState(false);
const [claiming, setClaiming] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { user } = useAuth();

  const handleClaim = async () => {
  if (claimedToday || claiming) return;
  setClaiming(true);

  const result = await handleDailyCheckin(user.id);

  if (result?.success) {
    if (
      result.status === "checked_in" ||
      result.status === "already_checked_in"
    ) {
      setClaimedToday(true);
      setShowSuccessModal(true);
      
    }
  }

  setClaiming(false);
};
useEffect(() => {
  const checkClaimStatus = async () => {
    const today = new Date().toISOString().split("T")[0];

    const { data } = await supabase
      .from("profiles")
      .select("last_checkin")
      .eq("id", user.id)
      .maybeSingle();

    if (data?.last_checkin === today) {
      setClaimedToday(true);
      console.log(data?.last_checkin)
    }
  };

  if (user?.id) checkClaimStatus();
}, [user?.id]);
    const rewards = useRewards(user?.id); 

    
  return (
    <div className="bg-white rounded-xl shadow">
      <h3 className="font-medium text-[18px] text-gray-700 flex rounded-t-xl bg-indigo-50 p-5">
        <Calendar className="mr-2 text-sky-300" />
        Daily Streak</h3>
<div className="p-5">
      <p className="text-4xl font-bold text-purple-600 mt-4">
        
        
        {rewards?.daily_streak} day 
      </p>

      <WeekDays />

      <p className="text-sm text-center w-full text-gray-500 mt-3">
        Check in daily to earn +5 points  
      </p>

      <button
        onClick={handleClaim}
        disabled={claimedToday || claiming}
        className={`mt-4 w-full py-2 flex justify-center rounded-full text-white transition
          ${
            claimedToday
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-800 cursor-pointer"
          }
        `}
      >
        <Zap className="mr-[4px]" />
        {claimedToday ? "Claimed Today" : claiming ? "Claiming..." : "Claim Daily Points"}
</button>
    </div>
<RewardSuccessModal
  isOpen={showSuccessModal}
  onClose={() => setShowSuccessModal(false)}
  points={5}
/>

    </div>
  );
};

export default DailyStreakCard;
