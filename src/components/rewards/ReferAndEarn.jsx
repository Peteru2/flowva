import { Star, Share2, Users } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
const ReferAndEarn = () => {

    const { user } = useAuth()
  return (
    <div className="space-y-6 my-4">

      {/* Refer & Earn Section */}
      <div>
        <h2 className="text-lg border-l-4 pl-4 border-purple-700 font-semibold text-gray-800 mb-3">
          Refer & Earn
        </h2>

        <div className="bg-white rounded-xl shadow">
          {/* Header */}
          <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-t-xl">
            <Users className="text-purple-600" />
            <div>
              <h3 className="font-medium text-gray-800">Share Your Link</h3>
              <p className="text-sm text-gray-500">
                Invite friends and earn 25 points when they join!
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 text-center py-6">
            <div>
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-500">Referrals</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-600">0</p>
              <p className="text-sm text-gray-500">Points Earned</p>
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-purple-50 p-4 rounded-b-xl">
            <p className="text-sm text-gray-600 mb-2">
              Your personal referral link:
            </p>

            <div className="flex items-center gap-2 bg-white rounded-lg border p-2">
              <input
                readOnly
                value={`https://app.flowyhub.com/signup/?ref=${user?.email?.slice(0,4)}`}
                className="flex-1 text-sm text-gray-700 outline-none bg-transparent"
              />
              <button className="p-2 rounded-md hover:bg-purple-100">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-purple-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
