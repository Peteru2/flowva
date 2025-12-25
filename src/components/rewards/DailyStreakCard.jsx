import {
  Calendar,
} from "lucide-react";
import WeekDays from "./WeekDays";

const DailyStreakCard = () => {
  return (
    <div className="bg-white rounded-xl shadow">
      <h3 className="font-medium text-[18px] text-gray-700 flex rounded-t-xl bg-indigo-50 p-5">
        <Calendar className="mr-2 text-sky-300" />
        Daily Streak</h3>
<div className="p-5">
      <p className="text-4xl font-bold text-purple-600 mt-4">
        1 day
      </p>

      <WeekDays />

      <p className="text-sm text-center w-full text-gray-500 mt-3">
        Check in daily to earn +5 points
      </p>

      <button
        disabled
        className="mt-4 w-full py-2 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
      >
        ⚡ Claimed Today
      </button>
    </div>
    </div>
  );
};

export default DailyStreakCard;
