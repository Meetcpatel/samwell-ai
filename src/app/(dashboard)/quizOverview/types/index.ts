export type QuizScore = {
  percentage: number;
  correct: number;
  incorrect: number;
  unanswered: number;
};

export type TimeCompleted = {
  minutes: string;
  seconds: string;
  milliseconds: string;
};

export type QuizOverviewData = {
  score?: QuizScore;
  timeCompleted?: TimeCompleted;
  averageTimePerQuestion?: number;
  longestTimeQuestions?: number[];
  userAnswers?: { [key: number]: string };
  questionTimes?: { [key: number]: number };
};
