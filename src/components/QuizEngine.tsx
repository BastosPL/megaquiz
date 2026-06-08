"use client";

import { useState, useCallback } from "react";
import type { Quiz, QuizResult, QuizProfile } from "@/lib/types";
import QuizResultView from "./QuizResult";

interface QuizEngineProps {
  quiz: Quiz;
}

export default function QuizEngine({ quiz }: QuizEngineProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [profileScores, setProfileScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion) / quiz.questions.length) * 100;
  const isTrivia = quiz.type === "trivia";

  const calculatePersonalityResult = useCallback(
    (finalScores: Record<string, number>): QuizResult => {
      const topProfileId = Object.entries(finalScores).sort(
        ([, a], [, b]) => b - a
      )[0]?.[0];

      const profile = quiz.profiles?.find((p) => p.id === topProfileId) ||
        quiz.profiles?.[0];

      return {
        profile: profile as QuizProfile,
        shareText: `Fiz o quiz "${quiz.title}" e meu resultado foi: ${profile?.title}! ${profile?.emoji}`,
      };
    },
    [quiz]
  );

  const calculateTriviaResult = useCallback(
    (finalScore: number): QuizResult => {
      const total = quiz.questions.length;
      const percentage = Math.round((finalScore / total) * 100);
      const percentile =
        percentage >= 90
          ? 95
          : percentage >= 70
          ? 80
          : percentage >= 50
          ? 55
          : 30;

      return {
        score: finalScore,
        totalQuestions: total,
        percentage,
        percentile,
        shareText: `Acertei ${finalScore}/${total} no quiz "${quiz.title}"! Consegue me superar?`,
      };
    },
    [quiz]
  );

  const handleSelect = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOption(optionId);

    if (isTrivia) {
      setShowFeedback(true);
      const option = question.options.find((o) => o.id === optionId);
      const newScore = option?.isCorrect ? score + 1 : score;
      if (option?.isCorrect) setScore(newScore);

      setTimeout(() => {
        const newAnswers = [...answers, optionId];
        setAnswers(newAnswers);

        if (currentQuestion < quiz.questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
          setSelectedOption(null);
          setShowFeedback(false);
        } else {
          setResult(calculateTriviaResult(newScore));
        }
      }, 1500);
    } else {
      const option = question.options.find((o) => o.id === optionId);
      const newScores = { ...profileScores };
      if (option?.profilePoints) {
        Object.entries(option.profilePoints).forEach(([profileId, points]) => {
          newScores[profileId] = (newScores[profileId] || 0) + points;
        });
      }
      setProfileScores(newScores);

      setTimeout(() => {
        const newAnswers = [...answers, optionId];
        setAnswers(newAnswers);

        if (currentQuestion < quiz.questions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
          setSelectedOption(null);
        } else {
          setResult(calculatePersonalityResult(newScores));
        }
      }, 400);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setScore(0);
    setProfileScores({});
    setResult(null);
    setAnswers([]);
  };

  if (result) {
    return (
      <QuizResultView
        quiz={quiz}
        result={result}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-text-light mb-2">
          <span>
            Pergunta {currentQuestion + 1} de {quiz.questions.length}
          </span>
          {isTrivia && (
            <span className="font-medium text-primary">
              {score} acerto{score !== 1 ? "s" : ""}
            </span>
          )}
        </div>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: quiz.color,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="animate-fade-in" key={currentQuestion}>
        <h2 className="text-xl sm:text-2xl font-bold text-text mb-6 text-center">
          {question.text}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option) => {
            let optionStyle = "bg-bg-card border-border hover:border-primary/50 hover:shadow-md cursor-pointer";

            if (showFeedback && isTrivia) {
              if (option.isCorrect) {
                optionStyle = "bg-success/10 border-success text-success";
              } else if (option.id === selectedOption && !option.isCorrect) {
                optionStyle = "bg-error/10 border-error text-error";
              } else {
                optionStyle = "bg-bg-card border-border opacity-50";
              }
            } else if (selectedOption === option.id && !isTrivia) {
              optionStyle = "border-primary bg-primary/10 shadow-md";
            }

            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${optionStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                    {option.id.toUpperCase()}
                  </span>
                  <span className="font-medium">{option.text}</span>
                  {showFeedback && option.isCorrect && (
                    <span className="ml-auto text-success text-xl">✓</span>
                  )}
                  {showFeedback &&
                    option.id === selectedOption &&
                    !option.isCorrect && (
                      <span className="ml-auto text-error text-xl">✗</span>
                    )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showFeedback && question.explanation && (
          <div className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-xl animate-fade-in">
            <p className="text-sm text-text-light">
              <span className="font-semibold text-primary">Sabia?</span>{" "}
              {question.explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
