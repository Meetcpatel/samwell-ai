"use client";
import { useRouter } from "next/navigation";
import { useQuizTimer } from "./hooks/useQuizTimer";
import { useQuizState } from "./hooks/useQuizState";
import { mathQuestions } from "./data/quizQuestions";
import { Timer } from "./Components/Timer";
import { QuestionList } from "./Components/QuestionList";

export default function QuizPage() {
  const router = useRouter();
  const { remainingTime, timeSpent } = useQuizTimer(20);
  const {
    userAnswers,
    handleAnswerSelect,
    calculateScore,
    calculateAverageTimePerQuestion,
    getLongestTimeQuestions,
    getCurrentQuestionTimes,
  } = useQuizState(mathQuestions);

  const handleCompleteQuiz = () => {
    const score = calculateScore();
    const avgTimePerQuestion = calculateAverageTimePerQuestion();
    const longestTimeQuestions = getLongestTimeQuestions();
    const updatedQuestionTimes = getCurrentQuestionTimes();

    // Use localStorage to pass data between pages
    localStorage.setItem(
      "quizData",
      JSON.stringify({
        score,
        timeCompleted: timeSpent,
        averageTimePerQuestion: avgTimePerQuestion,
        longestTimeQuestions,
        userAnswers,
        questionTimes: updatedQuestionTimes,
      })
    );

    router.push("/quizOverview");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* <Sidebar /> */}

      <div className="flex-1">
        {/* <Header /> */}
        <Timer
          minutes={remainingTime.minutes}
          seconds={remainingTime.seconds}
        />

        <QuestionList
          questions={mathQuestions}
          userAnswers={userAnswers}
          onAnswerSelect={handleAnswerSelect}
        />

        <div className="px-[80px] pb-8 flex justify-end">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 font-medium transition-colors"
            onClick={handleCompleteQuiz}
          >
            Complete Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
