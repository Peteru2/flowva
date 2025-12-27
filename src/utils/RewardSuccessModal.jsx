import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const RewardSuccessModal = ({ isOpen, onClose, points = 5 }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl p-6 w-[90%] max-w-sm text-center relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full border-4 border-green-400 flex items-center justify-center">
                <span className="text-green-500 text-4xl">✓</span>
              </div>
            </div>

            <h2 className="text-purple-600 font-semibold text-lg">
              Level Up! 🎉
            </h2>

            <p className="text-3xl font-bold text-purple-700 mt-2">
              +{points} Points
            </p>

            <p className="text-sm text-gray-500 mt-3">
              You've claimed your daily points!  
              Come back tomorrow for more!
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RewardSuccessModal;
