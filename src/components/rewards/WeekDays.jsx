// src/components/rewards/WeekDays.jsx
const days = ["M", "T", "W", "T", "F", "S", "S"];

const WeekDays = () => {
  const today = new Date().getDay(); 
  
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <div className="flex gap-2 mt-3">
      {days.map((day, index) => (
        <div
          key={index}
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
            ${
              index === todayIndex
                ? "border-2 bg-gray-200 border-purple-600 text-purple-600"
                : "bg-gray-100 text-gray-400"
            }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
