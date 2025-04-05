import { QuizScore } from "../types";

type ResultTitleProps = {
  score?: QuizScore;
};

export default function ResultTitle({ score }: ResultTitleProps) {
  const isGoodScore = score && score.percentage >= 70;

  return (
    <h1 className="font-inter font-semibold text-[32px] leading-none text-[#45505E] mb-[24px] px-[35px]">
      {isGoodScore
        ? "Great job! You did awesome!"
        : "Don't worry, you'll bounce back!"}
    </h1>
  );
}
