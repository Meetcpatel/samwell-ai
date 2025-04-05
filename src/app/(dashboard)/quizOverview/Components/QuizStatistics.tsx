import { ChevronRight } from "lucide-react";

type QuizStatisticsProps = {
  timeCompleted: {
    hours: string;
    minutes: string;
    seconds: string;
  };
  avgTimePerQuestion: string;
  longestTimeQuestions: string[];
};

export default function QuizStatistics({
  timeCompleted = { hours: "00", minutes: "18", seconds: "54" },
  avgTimePerQuestion = "4 mins",
  longestTimeQuestions = ["6", "8"],
}: QuizStatisticsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-[24px] w-[577px] h-[250px] col-span-2">
      <div className="flex h-full">
        {/* Left Column */}
        <div className="w-[45%] flex flex-col justify-center">
          <h2 className="text-[#45505E] text-xl font-semibold mb-6">
            Time Completed
          </h2>
          <div className="flex items-center">
            <div className="bg-[#45505E] text-white text-2xl font-medium rounded w-16 h-14 flex items-center justify-center">
              {timeCompleted.hours}
            </div>
            <span className="text-[#45505E] text-2xl font-medium mx-2">:</span>
            <div className="bg-[#45505E] text-white text-2xl font-medium rounded w-16 h-14 flex items-center justify-center">
              {timeCompleted.minutes}
            </div>
            <span className="text-[#45505E] text-2xl font-medium mx-2">:</span>
            <div className="bg-[#45505E] text-white text-2xl font-medium rounded w-16 h-14 flex items-center justify-center">
              {timeCompleted.seconds}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-[#E0E0E0] mx-4 self-stretch"></div>

        {/* Right Column */}
        <div className="w-[55%] pl-4 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-[#45505E] text-xl font-semibold mb-4">
              Avg. Time Per Question
            </h2>
            <div className="inline-block bg-[#F8F8F8] px-6 py-3 rounded-full">
              <span className="text-[#45505E] font-medium">
                {avgTimePerQuestion}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-[#45505E] text-xl font-semibold mb-4">
              Longest Time On A Question
            </h2>
            <div className="flex gap-4">
              {longestTimeQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-center bg-[#F8F8F8] rounded-full"
                >
                  <span className="text-[#45505E] font-medium px-5 py-2">
                    Q. {question}
                  </span>
                  <div className="pr-3">
                    <ChevronRight className="h-5 w-5 text-[#4B7BF9]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
