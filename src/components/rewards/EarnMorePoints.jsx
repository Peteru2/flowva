import { Star, Share2} from "lucide-react";

const EarnMorePoints = () => {
  return (
    <div className="space-y-6 my-4">

         <h2 className="text-lg font-bold pl-4 border-l-4 border-purple-700 text-gray-800 mb-3">
          Earn More Points
        </h2>
      {/* Top Cards */}
      <div className="grid md:grid-cols-3  grid-cols-1 gap-4">
        {/* Refer & Win */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white
        transition-all duration-300 ease-out
    hover:-translate-y-[3px]
    hover:shadow-2xl
    hover:border-purple-700
        ">
          <div className="flex items-center  gap-2 mb-3">
            <div className="bg-purple-100 p-2 rounded-lg">
            <Star className="text-purple-600 " />
            </div>
            <h3 className="font-semibold text-gray-800">
              Refer and win 10,000 points!
            </h3>
          </div>

          <p className="text-sm text-gray-600">
            Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of{" "}
            <span className="text-purple-600 font-medium">10,000 points</span>.
            Friends must complete onboarding to qualify.
          </p>
        </div>

        {/* Share Stack */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white
        transition-all duration-300 ease-out
    hover:-translate-y-[3px]
    hover:shadow-2xl
    hover:border-purple-700
        ">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Share2 className="text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Share Your Stack</h3>
              <p className="text-xs text-gray-500">Earn +25 pts</p>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">Share your tool stack</p>
            <button className="flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200">
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
      </div>

      </div>
                 
  );
};

export default EarnMorePoints
