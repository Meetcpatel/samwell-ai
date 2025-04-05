import { QuizOverviewData } from "../types";

export const mockQuizData: QuizOverviewData = {
  score: {
    percentage: 40,
    correct: 4,
    incorrect: 6,
    unanswered: 0,
  },
  timeCompleted: {
    minutes: "00",
    seconds: "18",
    milliseconds: "54",
  },
  averageTimePerQuestion: 4,
  longestTimeQuestions: [6, 8],
};
