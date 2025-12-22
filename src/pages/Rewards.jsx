import DashboardLayout from "../layout/DashboardLayout";
import RewardsTabs from "../components/rewards/RewardsTabs";
import PointsCard from "../components/rewards/PointsCard";
import DailyStreakCard from "../components/rewards/DailyStreakCard";
import SpotlightCard from "../components/rewards/SpotlightCard";


const Rewards = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-semibold">Rewards Hub</h1>
          <p className="text-gray-500 mt-1">
            Earn points, unlock rewards, and celebrate your progress!
          </p>
        </div>

        {/* Notification */}
        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
          🔔
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <RewardsTabs />
      </div>

      {/* Section */}
      <h2 className="text-xl font-semibold mt-8">
        Your Rewards Journey
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <PointsCard />
        <DailyStreakCard />
        <SpotlightCard />
      </div>
    </DashboardLayout>
  );
};

export default Rewards;
