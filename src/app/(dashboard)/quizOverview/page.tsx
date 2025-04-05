"use client";
import { useRouter } from "next/navigation";
import { useQuizData } from "./hooks/useQuizData";
import Breadcrumb from "./Components/Breadcrumb";
import ResultTitle from "./Components/ResultTitle";
import ScoreCard from "./Components/ScoreCard";
import QuizStatistics from "./Components/QuizStatistics";
import TryAgainCard from "./Components/TryAgainCard";
import ActionButtons from "./Components/ActionButtons";

export default function QuizOverview() {
  const router = useRouter();
  const quizData = useQuizData();

  const handleTryAgain = () => {
    router.push("/quiz");
  };

  const handleReviewAnswers = () => {
    // You would implement a review mode that shows correct/incorrect answers
    // For now we'll just redirect to the quiz
    localStorage.setItem("quizReview", "true");
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1">
        <div className="px-[35px] pt-8">
          <div className="w-full mx-auto">
            <Breadcrumb />
            <ResultTitle score={quizData.score} />

            <div className="flex gap-[30px] px-[35px]">
              {quizData.score && <ScoreCard score={quizData.score} />}

              <QuizStatistics
                timeCompleted={{
                  hours: "00",
                  minutes: quizData.timeCompleted?.minutes || "00",
                  seconds: quizData.timeCompleted?.seconds || "00",
                }}
                avgTimePerQuestion={`${
                  quizData.averageTimePerQuestion || 0
                } mins`}
                longestTimeQuestions={
                  quizData.longestTimeQuestions?.map((q) => q.toString()) || []
                }
              />

              <div className="w-[257px] h-[250px]">
                <div className="h-1/2  cursor-pointer">
                  <TryAgainCard
                    className="h-full"
                    missedItems={quizData.score?.incorrect || 0}
                    onTryAgainClick={handleTryAgain}
                    onReviewClick={handleReviewAnswers}
                  />
                </div>
              </div>
            </div>

            <ActionButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
