import { useState, useEffect } from "react";

type TimeDisplay = {
  minutes: string;
  seconds: string;
  milliseconds: string;
};

type RemainingTime = {
  minutes: number;
  seconds: number;
};

export function useQuizTimer(quizLengthMinutes: number = 20) {
  const [startTime] = useState<Date>(new Date());
  const [timeSpent, setTimeSpent] = useState<TimeDisplay>({
    minutes: "00",
    seconds: "00",
    milliseconds: "00",
  });
  const [remainingTime, setRemainingTime] = useState<RemainingTime>({
    minutes: quizLengthMinutes,
    seconds: 0,
  });

  // Update time spent
  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const elapsedMilliseconds = currentTime.getTime() - startTime.getTime();

      const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const milliseconds = Math.floor((elapsedMilliseconds % 1000) / 10);

      setTimeSpent({
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
        milliseconds: milliseconds.toString().padStart(2, "0"),
      });

      // Update remaining time
      const remainingMinutes = Math.max(0, quizLengthMinutes - 1 - minutes);
      const remainingSeconds =
        minutes === quizLengthMinutes - 1
          ? Math.max(0, 59 - seconds)
          : 59 - seconds;

      setRemainingTime({
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, quizLengthMinutes]);

  return { timeSpent, remainingTime, startTime };
}
