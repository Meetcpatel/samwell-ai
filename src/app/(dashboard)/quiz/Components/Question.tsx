"use client";

type QuestionProps = {
  number: number;
  totalQuestions: number;
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  onAnswerSelect: (questionNumber: number, selectedOption: string) => void;
  selectedAnswer?: string;
};

export const Question = ({
  number,
  totalQuestions,
  question,
  options,
  onAnswerSelect,
  selectedAnswer,
}: QuestionProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-10">
      {/* Question Number */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
          {number}
        </div>
        <span className="text-xs text-gray-500">
          Question {number} of {totalQuestions}
        </span>
      </div>

      {/* Question */}
      <h2 className="text-lg font-medium text-[#2D2D2D] mb-6">{question}</h2>

      {/* Options */}
      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.label}
            onClick={() => onAnswerSelect(number, option.label)}
            className={`border ${
              selectedAnswer === option.label
                ? "border-blue-500"
                : "border-gray-200"
            } 
              rounded-lg p-4 hover:border-blue-500 cursor-pointer transition-colors`}
          >
            <div className="flex items-center gap-2">
              <span className="text-gray-500">{option.label})</span>
              <span>{option.text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Don't know button */}
      <div className="text-center mt-6">
        <button className="text-blue-500 text-sm hover:underline">
          Don&apos;t know?
        </button>
      </div>
    </div>
  );
};
