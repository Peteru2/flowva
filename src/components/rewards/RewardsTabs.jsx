const RewardsTabs = () => {
  return (
    <div className="flex gap-4">
      <button className="px-4 py-2 rounded-t-md border-b-[2px] border-purple-700 cursor-pointer bg-purple-100 text-purple-700 font-medium">
        Earn Points
      </button>
      <button className="px-4 py-2 rounded-md text-gray-500 cursor-pointer hover:bg-gray-100">
        Redeem Rewards
      </button>
    </div>
  );
};

export default RewardsTabs;
