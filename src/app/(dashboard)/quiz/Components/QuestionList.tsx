import { Question } from "./Question";
import { QuizQuestion } from "../data/quizQuestions";

type QuestionListProps = {
  questions: QuizQuestion[];
  userAnswers: { [key: number]: string };
  onAnswerSelect: (questionNumber: number, selectedOption: string) => void;
};

export const QuestionList = ({
  questions,
  userAnswers,
  onAnswerSelect,
}: QuestionListProps) => {
  return (
    <div className="px-[80px] pt-8">
      <div className="w-full mx-auto space-y-8">
        {questions.map((q) => (
          <Question
            key={q.number}
            number={q.number}
            totalQuestions={questions.length}
            question={q.question}
            options={q.options}
            selectedAnswer={userAnswers[q.number]}
            onAnswerSelect={onAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
};
