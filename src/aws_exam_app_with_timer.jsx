import { useState, useEffect, useRef, useCallback } from "react";
import QUESTIONS from "./questions";

export default function ClfPracticeApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [timer, setTimer] = useState(120);
  const [examStarted, setExamStarted] = useState(false);
  const [numQuestions, setNumQuestions] = useState(10);
  const [questionSet, setQuestionSet] = useState([]);

  const timerRef = useRef(null);

  // --- TIMER LOGIC ---
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    setTimer(120);
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          setCurrentIndex(i => {
            if (i + 1 < questionSet.length) {
              setShowExplanation(false);
              setSelectedChoice(null);
              setTimer(120);
              return i + 1;
            } else {
              setShowResults(true);
              return i;
            }
          });
          return 120;
        }
        return t - 1;
      });
    }, 1000);
  }, [questionSet.length]);

  useEffect(() => {
    if (examStarted) {
      startTimer();
      return () => clearInterval(timerRef.current);
    }
  }, [currentIndex, examStarted, startTimer]);

  // --- START EXAM ---
  const startExam = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setQuestionSet(shuffled.slice(0, numQuestions));
    setExamStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setSelectedChoice(null);
    startTimer();
  };

  // --- HANDLE ANSWERS ---
  const handleSelect = (choice) => setSelectedChoice(choice);

  const handleSubmit = () => {
    if (!selectedChoice) return;
    setAnswers((prev) => ({
      ...prev,
      [questionSet[currentIndex].id]: selectedChoice,
    }));
    setShowExplanation(true);
    clearInterval(timerRef.current);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questionSet.length) {
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
      setSelectedChoice(null);
      setTimer(120);
      startTimer();
    } else {
      setShowResults(true);
      clearInterval(timerRef.current);
    }
  };

  const resetExam = () => {
    setExamStarted(false);
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setSelectedChoice(null);
    setTimer(120);
  };

  // --- SCORE ---
  const score = () => {
    let correct = 0;
    for (const Q of questionSet) {
      if (answers[Q.id] === Q.answer) correct++;
    }
    return {
      correct,
      total: questionSet.length,
      pct: Math.round((correct / questionSet.length) * 100),
    };
  };

  // --- RESULT DETAILS BUILDER ---
  const buildResultDetails = (question, userAnswer) => {
    const isCorrect = userAnswer === question.answer;
    return {
      answer: isCorrect ? question.answer : userAnswer,
      explanation: question.explanation || "Unknown",
      correct: question.correct || "Unknown",
      incorrect: question.incorrect || {},
      references: question.references?.length
        ? question.references
        : ["Unknown"],
    };
  };

  // --- START SCREEN ---
  if (!examStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">AWS Exam Practice</h1>
          <p className="text-gray-700 mb-6">
            Select how many questions you want to attempt:
          </p>

          <select
            value={numQuestions}
            onChange={(e) => setNumQuestions(parseInt(e.target.value))}
            className="border p-2 rounded w-full mb-4"
          >
            {[5, 10, 25, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n} Questions
              </option>
            ))}
          </select>

          <button
            onClick={startExam}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  // --- RESULTS SCREEN ---
  if (showResults) {
    const s = score();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Exam Completed</h2>
          <p className="mb-2 text-lg">
            Score: {s.correct} / {s.total} ({s.pct}%)
          </p>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={resetExam}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }

  // --- QUESTION VIEW ---
  const q = questionSet[currentIndex];
  const userAnswer = answers[q.id];
  const details = buildResultDetails(q, userAnswer || selectedChoice);
  const progressPercent = (timer / 120) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full">
        <h2 className="text-xl font-semibold mb-2">
          Question {currentIndex + 1} / {questionSet.length}
        </h2>
        <p className="mb-4 text-gray-700">{q.q}</p>

        {/* Timer bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mb-4">
          <div
            className={`h-3 rounded-full ${timer <= 10 ? "bg-red-600" : "bg-green-500"
              } transition-all duration-1000`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {Object.entries(q.options).map(([key, text]) => (
            <label
              key={key}
              className={`block border p-3 rounded cursor-pointer ${selectedChoice === key ? "bg-blue-100 border-blue-500" : ""
                } hover:bg-gray-100`}
            >
              <input
                type="radio"
                name={`q_${q.id}`}
                className="mr-2"
                checked={selectedChoice === key}
                onChange={() => handleSelect(key)}
              />
              <strong>{key}.</strong> {text}
            </label>
          ))}
        </div>

        {!showExplanation ? (
          <div className="flex justify-between mt-4">
            <button
              className="px-3 py-2 bg-gray-200 rounded"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            >
              Previous
            </button>
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="mt-6 bg-gray-50 border p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">
              {details.answer === q.answer ? "✅ Correct!" : "❌ Incorrect!"}
            </h3>
            <p><strong>Answer:</strong> {details.answer}</p>
            <p><strong>Explanation:</strong> {details.explanation}</p>
            <p><strong>Correct:</strong> {details.correct}</p>

            <p className="mt-2"><strong>Incorrect:</strong></p>
            <ul className="list-disc ml-6">
              {Object.entries(details.incorrect).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>

            <p className="mt-2"><strong>References:</strong></p>
            <ul className="list-disc ml-6">
              {details.references.map((ref, idx) => (
                <li key={idx}>
                  {ref.startsWith("http") ? (
                    <a
                      href={ref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {ref}
                    </a>
                  ) : (
                    ref
                  )}
                </li>
              ))}
            </ul>

            <div className="flex justify-end mt-4">
              <button
                className="px-3 py-2 bg-green-600 text-white rounded"
                onClick={handleNext}
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
