// src/components/rewards/PointsCard.jsx
const PointsCard = () => {
  const points = 5;
  const maxPoints = 5000;
  const progress = (points / maxPoints) * 100;

  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="font-medium text-gray-700">Points Balance</h3>

      <div className="flex items-center justify-between mt-4">
        <span className="text-4xl font-bold text-purple-600">
          {points}
        </span>
        <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
          ⭐
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-3">
        Progress to $5 Gift Card
      </p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{points}</span>
        <span>{maxPoints}</span>
      </div>

      <p className="text-xs text-gray-500 mt-3">
        🚀 Just getting started — keep earning points!
      </p>
    </div>
  );
};

export default PointsCard;
