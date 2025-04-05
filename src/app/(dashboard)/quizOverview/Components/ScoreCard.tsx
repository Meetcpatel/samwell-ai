import CircularProgress from "./CircularProgress";
import { QuizScore } from "../types";

type ScoreCardProps = {
  score: QuizScore;
};

export default function ScoreCard({ score }: ScoreCardProps) {
  return (
    <div className="bg-white rounded-lg p-[24px] shadow-sm w-[306px] h-[250px]">
      <h2 className="font-inter font-bold text-[20px] leading-[24px] tracking-[-0.015em] text-[#45505E] align-middle capitalize mb-4">
        Quiz Score
      </h2>
      <div className="font-inter font-medium text-[40px] leading-none tracking-[-1.55px] text-[#45505E] mb-[8px]">
        {score.percentage}%
      </div>

      <div className="h-[1px] bg-[#E0E0E0] mb-[28px]" />

      <CircularProgress
        correct={score.correct}
        incorrect={score.incorrect}
        unanswered={score.unanswered}
      />
    </div>
  );
}
