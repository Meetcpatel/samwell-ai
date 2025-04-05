type CircularProgressProps = {
  correct: number;
  incorrect: number;
  unanswered: number;
};

export default function CircularProgress({
  correct,
  incorrect,
  unanswered,
}: CircularProgressProps) {
  const radius = 45;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Calculate percentages
  const total = correct + incorrect + unanswered;
  const correctPercentage = (correct / total) * 100;

  return (
    <div className="flex gap-[24px]">
      <div className="relative">
        <svg width={radius * 2} height={radius * 2} className="-rotate-90">
          <circle
            stroke="#FF784D"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
          />
          <circle
            stroke="#4ADE80"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeLinecap="round"
            strokeDasharray={`${
              (correctPercentage * circumference) / 100
            } ${circumference}`}
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4ADE80]" />
            <span className="font-inter text-[#4ADE80] text-base font-medium">
              Correct
            </span>
          </div>
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center ml-auto">
            <span className="font-inter text-[#45505E] text-xl font-medium">
              {correct}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#FF784D]" />
            <span className="font-inter text-[#FF784D] text-base font-medium">
              Incorrect
            </span>
          </div>
          <div className="w-10 h-10 bg-[#F8F8F8] rounded-full flex items-center justify-center ml-auto">
            <span className="font-inter text-[#45505E] text-xl font-medium">
              {incorrect}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
