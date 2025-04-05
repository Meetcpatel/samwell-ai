import { useState, useEffect } from "react";
import { QuizOverviewData } from "../types";
import { mockQuizData } from "../data/mockData";

export function useQuizData() {
  const [quizData, setQuizData] = useState<QuizOverviewData>({
    score: mockQuizData.score,
    timeCompleted: mockQuizData.timeCompleted,
    averageTimePerQuestion: mockQuizData.averageTimePerQuestion,
    longestTimeQuestions: mockQuizData.longestTimeQuestions,
  });

  useEffect(() => {
    // Get data from localStorage instead of URL query parameters
    try {
      const storedData = localStorage.getItem("quizData");
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setQuizData(parsedData);
      }
    } catch (error) {
      console.error("Error parsing quiz data:", error);
    }
  }, []);

  return quizData;
}
