import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
// import { useAuth } from "../context/AuthContext";

import { handleDailyCheckin } from "../utils/dailyCheckin";
import DashboardLayout from "../layout/DashboardLayout";
import RewardsTabs from "../components/rewards/RewardsTabs";
import PointsCard from "../components/rewards/PointsCard";
import DailyStreakCard from "../components/rewards/DailyStreakCard";
import SpotlightCard from "../components/rewards/SpotlightCard";
import EarnMorePoints from "../components/rewards/EarnMorePoints";
import ReferAndEarn from "../components/rewards/ReferAndEarn";



const Rewards = () => {
  const { user } = useAuth();

  // useEffect(() => {
  //   if (!user?.id) return;

  //   handleDailyCheckin(user.id)
  //     .catch(err => console.error("Daily check-in failed:", err));
  // }, [user?.id]);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className=" bg-gray-50 items-start">
        
      <div className="md:mt-24 mt-14 mb-4">
      <p className="text-gray-500 mb-4  md:hidden flex">
                      Earn points, unlock rewards, and celebrate your progress!
                    </p>
           {/* Tabs */}
      <div >
        <RewardsTabs />
      </div>

      {/* Section */}
      <h2 className="text-2xl border-l-4  border-purple-700 pl-[12px] font-semibold mt-8">
        Your Rewards Journey
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <PointsCard />
        <DailyStreakCard />
        <SpotlightCard />
      </div>
      <div>
        <EarnMorePoints />
       
      </div>
      <div>
        <ReferAndEarn />
      </div>
      </div>
</div>
    </DashboardLayout>
  );
};

export default Rewards;
