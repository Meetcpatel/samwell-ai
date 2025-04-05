type TimerProps = {
  minutes: number;
  seconds: number;
};

export const Timer = ({ minutes, seconds }: TimerProps) => {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-sm text-gray-500">Time left:</span>
        <div className="flex items-center gap-1">
          <div className="bg-[#2D2D2D] text-white text-xs px-2 py-1 rounded">
            {minutes.toString().padStart(2, "0")}
          </div>
          <span className="text-[#2D2D2D] font-medium">:</span>
          <div className="bg-[#2D2D2D] text-white text-xs px-2 py-1 rounded">
            {seconds.toString().padStart(2, "0")}
          </div>
          <span className="text-[#2D2D2D] font-medium">:</span>
          <div className="bg-[#2D2D2D] text-white text-xs px-2 py-1 rounded">
            00
          </div>
        </div>
      </div>
    </div>
  );
};
