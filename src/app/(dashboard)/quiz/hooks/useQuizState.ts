import { useState } from "react";
import { QuizQuestion } from "../data/quizQuestions";

type QuizScore = {
  percentage: number;
  correct: number;
  incorrect: number;
  unanswered: number;
};

export function useQuizState(questions: QuizQuestion[]) {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [questionTimes, setQuestionTimes] = useState<{ [key: number]: number }>(
    {}
  );
  const [currentQuestionStartTime, setCurrentQuestionStartTime] =
    useState<Date>(new Date());
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);

  const handleAnswerSelect = (
    questionNumber: number,
    selectedOption: string
  ) => {
    // If user is switching to a new question, update time spent on the previous one
    if (questionNumber !== currentQuestion) {
      const now = new Date();
      const timeSpentOnQuestion = Math.floor(
        (now.getTime() - currentQuestionStartTime.getTime()) / 1000
      );

      setQuestionTimes((prev) => ({
        ...prev,
        [currentQuestion]: (prev[currentQuestion] || 0) + timeSpentOnQuestion,
      }));

      // Reset timer for new question
      setCurrentQuestionStartTime(now);
      setCurrentQuestion(questionNumber);
    }

    setUserAnswers((prev) => ({
      ...prev,
      [questionNumber]: selectedOption,
    }));
  };

  const calculateScore = (): QuizScore => {
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;

    // Check all questions
    questions.forEach((q) => {
      const userAnswer = userAnswers[q.number];
      if (!userAnswer) {
        unanswered++;
      } else if (q.correctAnswer === userAnswer) {
        correct++;
      } else {
        incorrect++;
      }
    });

    // Calculate percentage based on total questions
    const percentage = Math.round((correct / questions.length) * 100);

    return {
      percentage,
      correct,
      incorrect,
      unanswered,
    };
  };

  const calculateAverageTimePerQuestion = (): number => {
    // Final update for current question time
    const now = new Date();
    const updatedQuestionTimes = { ...questionTimes };
    updatedQuestionTimes[currentQuestion] =
      (updatedQuestionTimes[currentQuestion] || 0) +
      Math.floor((now.getTime() - currentQuestionStartTime.getTime()) / 1000);

    // Calculate total time and average
    const totalTimeSeconds = Object.values(updatedQuestionTimes).reduce(
      (sum, time) => sum + time,
      0
    );
    const answeredQuestions = Object.keys(userAnswers).length || 1; // Avoid division by zero

    return Math.round(totalTimeSeconds / answeredQuestions / 60); // Return in minutes
  };

  const getLongestTimeQuestions = (): number[] => {
    // Final update for current question time
    const now = new Date();
    const updatedQuestionTimes = { ...questionTimes };
    updatedQuestionTimes[currentQuestion] =
      (updatedQuestionTimes[currentQuestion] || 0) +
      Math.floor((now.getTime() - currentQuestionStartTime.getTime()) / 1000);

    // Sort questions by time spent and get the top 2
    const sortedQuestions = Object.entries(updatedQuestionTimes)
      .sort(([, timeA], [, timeB]) => timeB - timeA)
      .slice(0, 2)
      .map(([questionNumber]) => parseInt(questionNumber));

    return sortedQuestions.length > 0 ? sortedQuestions : [1, 2]; // Fallback if no data
  };

  const getCurrentQuestionTimes = () => {
    return {
      ...questionTimes,
      [currentQuestion]:
        (questionTimes[currentQuestion] || 0) +
        Math.floor(
          (new Date().getTime() - currentQuestionStartTime.getTime()) / 1000
        ),
    };
  };

  return {
    userAnswers,
    handleAnswerSelect,
    calculateScore,
    calculateAverageTimePerQuestion,
    getLongestTimeQuestions,
    getCurrentQuestionTimes,
  };
}
