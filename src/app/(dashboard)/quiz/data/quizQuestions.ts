export type QuizOption = {
  label: string;
  text: string;
};

export type QuizQuestion = {
  number: number;
  question: string;
  options: QuizOption[];
  correctAnswer: string;
};

export const mathQuestions: QuizQuestion[] = [
  {
    number: 1,
    question: "What is 15 + 27?",
    options: [
      { label: "A", text: "32" },
      { label: "B", text: "42" },
      { label: "C", text: "52" },
      { label: "D", text: "62" },
    ],
    correctAnswer: "B",
  },
  {
    number: 2,
    question: "Calculate 45 - 18",
    options: [
      { label: "A", text: "17" },
      { label: "B", text: "23" },
      { label: "C", text: "27" },
      { label: "D", text: "37" },
    ],
    correctAnswer: "C",
  },
  {
    number: 3,
    question: "What is 7 × 9?",
    options: [
      { label: "A", text: "56" },
      { label: "B", text: "63" },
      { label: "C", text: "72" },
      { label: "D", text: "81" },
    ],
    correctAnswer: "B",
  },
  {
    number: 4,
    question: "Solve: 64 ÷ 8",
    options: [
      { label: "A", text: "6" },
      { label: "B", text: "7" },
      { label: "C", text: "8" },
      { label: "D", text: "9" },
    ],
    correctAnswer: "C",
  },
  {
    number: 5,
    question: "What is 125 - 37?",
    options: [
      { label: "A", text: "78" },
      { label: "B", text: "88" },
      { label: "C", text: "98" },
      { label: "D", text: "108" },
    ],
    correctAnswer: "B",
  },
];
