import {
  Award,
  Star
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useRewards } from "../../hooks/useRewards";

const PointsCard = () => {
  const { user } = useAuth();
  const rewards = useRewards(user?.id); 
  
  const maxPoints = 5000;
  const progress = (rewards?.points / maxPoints) * 100;

  return (
    <div className="bg-white rounded-xl shadow">
      <h3 className="font-medium text-[18px] text-gray-700 flex rounded-t-xl bg-indigo-50 p-5">
      
        <Award className="text-purple-700 mr-2"/>
        Points Balance</h3>
<div className=" p-5">
      <div className="flex items-center justify-between mt-4">
        <span className="text-4xl font-bold text-purple-600">
          {rewards?.points}
        </span>
        <div className="h-12 w-12 rounded-full bg-yellow-200 flex items-center justify-center">
          
          <Star className="text-yellow-600 "/>
        </div>
      </div>


<div className="flex w-full justify-between mt-3 items-center">
      <p className="text-sm text-gray-500 w-full  flex">
        Progress to $5 Gift Card
      </p>

       <div className="flex  text-xs font-bold text-gray-700 ">
        <span> 
          {rewards?.points} 
          </span>/
        <span>{maxPoints}</span>
      </div>
</div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div
          className="bg-purple-600 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

     

      <p className="text-xs text-gray-500 mt-3">
        🚀 Just getting started — keep earning points!
      </p>
    </div>
    </div>
  );
};

export default PointsCard;
