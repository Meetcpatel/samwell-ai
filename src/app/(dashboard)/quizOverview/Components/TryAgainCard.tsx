import { ChevronRight } from "lucide-react";

type TryAgainCardProps = {
  className?: string;
  missedItems: number;
  onTryAgainClick?: () => void;
  onReviewClick?: () => void;
};

export default function TryAgainCard({
  className = "",
  missedItems = 0,
  onTryAgainClick,
  onReviewClick,
}: TryAgainCardProps) {
  return (
    <div className={`flex flex-col gap-[2px] ${className}`}>
      {/* Try Again Card */}
      <div
        className="bg-white rounded-xl shadow-sm pt-[16px] pl-[24px] pr-[24px] pb-[16px] w-full cursor-pointer"
        onClick={onTryAgainClick}
      >
        <div className="flex items-center mb-[8px]">
          <div className="font-inter font-bold text-[16px] leading-[19px] text-[#45505E] flex items-center align-middle">
            Try Again{" "}
            <span className="text-[#4B7BF9] ml-2 flex items-center">
              <ChevronRight size={16} />
            </span>
          </div>
        </div>
        <p className="font-inter font-normal text-[14px] leading-[20px] text-[#454545]">
          Retake the test to improve your score.
        </p>
      </div>

      {/* Review your answer Card */}
      <div
        className="bg-white rounded-xl shadow-sm pt-[16px] pl-[24px] pr-[24px] pb-[16px] w-full cursor-pointer"
        onClick={onReviewClick}
      >
        <div className="bg-[#FFE7C2] min-w-[118px] h-[24px] rounded-[8px] px-2 py-1 flex items-center gap-1 overflow-hidden">
          <svg
            className="w-4 h-4 text-[#992900] flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-inter font-semibold text-xs leading-none text-[#992900] truncate">
            {missedItems} Missed {missedItems === 1 ? "item" : "items"}
          </span>
        </div>
        <div className="flex items-center mt-[14px]">
          <div className="font-inter font-bold text-[16px] leading-[19px] text-[#45505E] flex items-center align-middle">
            Review your answers{" "}
            <span className="text-[#4B7BF9] ml-2 flex items-center">
              <ChevronRight size={16} />
            </span>
          </div>
        </div>
        <p className="font-inter font-normal text-[14px] leading-[24px] text-[#454545] mt-2">
          Go over your answers and get instant AI feedback.
        </p>
      </div>
    </div>
  );
}
