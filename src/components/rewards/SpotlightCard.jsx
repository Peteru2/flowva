// src/components/rewards/SpotlightCard.jsx
const SpotlightCard = () => {
  return (
    <div className="rounded-xl p-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 relative">
      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
        Featured
      </span>

      <h3 className="text-lg font-semibold mt-4">
        Top Tool Spotlight
      </h3>

      <button className="mt-3 underline">
        Reclaim
      </button>

      <div className="bg-white text-gray-700 rounded-lg p-4 mt-5">
        <p className="font-medium">
          Automate and Optimize Your Schedule
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Reclaim.ai is an AI-powered calendar assistant that
          automatically schedules your tasks and meetings.
        </p>

        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg">
          Sign up & Claim 50 pts
        </button>
      </div>
    </div>
  );
};

export default SpotlightCard;
