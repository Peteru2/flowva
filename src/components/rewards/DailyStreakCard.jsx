// src/components/rewards/DailyStreakCard.jsx
import WeekDays from "./WeekDays";

const DailyStreakCard = () => {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-medium text-gray-700">Daily Streak</h3>

      <p className="text-4xl font-bold text-purple-600 mt-4">
        1 day
      </p>

      <WeekDays />

      <p className="text-sm text-gray-500 mt-3">
        Check in daily to earn +5 points
      </p>

      <button
        disabled
        className="mt-4 w-full py-2 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
      >
        ⚡ Claimed Today
      </button>
    </div>
  );
};

export default DailyStreakCard;
