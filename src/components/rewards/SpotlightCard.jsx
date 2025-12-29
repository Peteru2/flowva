import {
  Calendar,
  UserRoundPlus,
  Gift
  
} from "lucide-react";
const SpotlightCard = () => {
  return (
    <div className="rounded-xl  text-white bg-gradient-to-br from-purple-600 to-blue-500 relative
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-2xl
    ">
      <div className="p-5">
      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
        Featured
      </span>

      <h3 className="text-lg font-semibold mt-4">
        Top Tool Spotlight
      </h3>

      <button className="mt-3 font-bold">
        Reclaim
      </button>
      </div>

      <div className="bg-white text-gray-700 rounded-b-lg p-4 mt-5">
        <div className="flex justify-between w-full ">
          <Calendar  className="font-bold  w-24 mr-1 text-purple-700"/>
          <div className="ml-1 ">
        <p className="font-medium text-[14px] ">
          Automate and Optimize Your Schedule
        </p>
        <p className="text-sm text-gray-500 mt-1">
         Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!
        </p>
        </div>
        </div>

      <div className="flex border-t mt-6  border-gray-200 justify-between">
        <button className="mt-2 w-28 text-center cursor-pointer flex justify-center rounded-full py-2 px-2 text-[14px] bg-purple-600 text-white  ">
         <UserRoundPlus className="mr-[2px] w-[15px]"/> Sign up 
        </button>
        <button className="mt-2 w-28 bg-gradient-to-r from-purple-600 to-[#FF8687]   text-md rounded-full cursor-pointer  flex justify-center py-2 px-2 text-[14px]    text-white  ">
           <Gift className="mr-[2px] w-[15px] "/> Claim 50 pts
        </button>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
