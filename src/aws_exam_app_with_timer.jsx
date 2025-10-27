import { useState, useEffect, useRef, useCallback } from "react";
import QUESTIONS from "./questions";

export default function ClfPracticeApp() {
  // --- STATE MANAGEMENT ---
  const [currentIndex, setCurrentIndex] = useState(0);         // Tracks current question index
  const [answers, setAnswers] = useState({});                  // Stores user's answers
  const [showResults, setShowResults] = useState(false);       // Toggles final results screen
  const [showExplanation, setShowExplanation] = useState(false); // Toggles explanation view after submitting
  const [selectedChoice, setSelectedChoice] = useState(null);  // Tracks user's current selection(s)
  const [timer, setTimer] = useState(120);                     // Countdown timer (in seconds)
  const [examStarted, setExamStarted] = useState(false);       // Controls whether the exam has started
  const [numQuestions, setNumQuestions] = useState(10);        // Number of questions to display
  const [questionSet, setQuestionSet] = useState([]);          // Holds the shuffled question set

  const timerRef = useRef(null);                               // Reference to interval timer (so it can be cleared)

  // --- TIMER LOGIC ---
  const startTimer = useCallback(() => {
    // Clear any existing timer to prevent duplicates
    clearInterval(timerRef.current);
    setTimer(120); // Reset timer to 2 minutes

    // Start countdown interval
    timerRef.current = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          // If time runs out, move to next question or show results
          clearInterval(timerRef.current);
          setCurrentIndex(i => {
            if (i + 1 < questionSet.length) {
              // Move to next question if available
              setShowExplanation(false);
              setSelectedChoice(null);
              setTimer(120);
              return i + 1;
            } else {
              // If no more questions, show final results
              setShowResults(true);
              return i;
            }
          });
          return 120;
        }
        return t - 1; // Decrease timer by 1 second
      });
    }, 1000);
  }, [questionSet.length]);

  // Start timer when exam begins or question changes
  useEffect(() => {
    if (examStarted) {
      startTimer();
      return () => clearInterval(timerRef.current); // Clean up timer on unmount or re-render
    }
  }, [currentIndex, examStarted, startTimer]);

  // --- START EXAM ---
  const startExam = () => {
    // Randomize question order and select the number requested by user
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setQuestionSet(shuffled.slice(0, numQuestions));

    // Initialize exam state
    setExamStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setSelectedChoice(null);

    // Begin countdown timer
    startTimer();
  };

  // --- HANDLE ANSWERS ---
  const handleAnswerSelection = (choice) => {
    // Identify if question allows multiple selections (Select TWO)
    const q = questionSet[currentIndex];
    const isSelectTwo = q?.q?.includes("(Select TWO.)");

    // Handle accordingly
    if (isSelectTwo) {
      handleSelectTwo(choice);
    } else {
      handleSelect(choice);
    }
  };

  // Handle single-choice questions
  const handleSelect = (choice) => {
    setSelectedChoice(choice);
  };

  // Handle multi-select questions ("Select TWO")
  const handleSelectTwo = (choice) => {
    let currentSelections = Array.isArray(selectedChoice) ? [...selectedChoice] : [];

    if (currentSelections.includes(choice)) {
      // Deselect if already selected
      currentSelections = currentSelections.filter((c) => c !== choice);
    } else {
      // Add if under 2 selections
      if (currentSelections.length < 2) {
        currentSelections.push(choice);
      }
    }

    setSelectedChoice(currentSelections);
  };

  // --- SUBMIT ANSWER ---
  const handleSubmit = () => {
    if (!selectedChoice) return; // Prevent submission with no selection

    // Save user's answer
    setAnswers((prev) => ({
      ...prev,
      [questionSet[currentIndex].id]: selectedChoice,
    }));

    // Show explanation for this question
    setShowExplanation(true);
    clearInterval(timerRef.current); // Pause timer while showing explanation
  };

  // --- NEXT QUESTION ---
  const handleNext = () => {
    if (currentIndex + 1 < questionSet.length) {
      // Go to next question
      setCurrentIndex((i) => i + 1);
      setShowExplanation(false);
      setSelectedChoice(null);
      setTimer(120);
      startTimer(); // Restart timer for next question
    } else {
      // End of exam → show results
      setShowResults(true);
      clearInterval(timerRef.current);
    }
  };

  // --- RESET EXAM ---
  const resetExam = () => {
    // Restore all states to default
    setExamStarted(false);
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setSelectedChoice(null);
    setTimer(120);
  };

  // --- SCORE CALCULATION ---
  const score = () => {
    let correct = 0;
    for (const Q of questionSet) {
      const userAns = answers[Q.id];
      const correctAns = Q.answer;

      if (Array.isArray(correctAns)) {
        // For multi-select questions
        const sortedUser = [...(userAns || [])].sort();
        const sortedCorrect = [...correctAns].sort();
        if (
          sortedUser.length === sortedCorrect.length &&
          sortedUser.every((val, index) => val === sortedCorrect[index])
        ) {
          correct++;
        }
      } else {
        // For single-select questions
        if (userAns === correctAns) correct++;
      }
    }
    return {
      correct,
      total: questionSet.length,
      pct: Math.round((correct / questionSet.length) * 100),
    };
  };

  // --- BUILD RESULT DETAILS FOR EXPLANATION VIEW ---
  const buildResultDetails = (question, userAnswer) => {
    const isCorrect = Array.isArray(question.answer)
      ? Array.isArray(userAnswer) &&
      userAnswer.length === question.answer.length &&
      [...userAnswer].sort().every((val, idx) => val === [...question.answer].sort()[idx])
      : userAnswer === question.answer;
    return {
      answer: isCorrect ? question.answer : userAnswer, // Show what the user answered
      explanation: question.explanation || "Unknown",
      correct: question.correct || "Unknown",
      incorrect: question.incorrect || {},
      references: question.references?.length
        ? question.references
        : ["Unknown"], // Include learning references
    };
  };

  // --- START SCREEN (Before Exam Begins) ---
  if (!examStarted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">AWS Exam Practice</h1>
          <p className="text-gray-700 mb-6">
            Select how many questions you want to attempt:
          </p>

          {/* Question count selector */}
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

          {/* Start exam button */}
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

  // --- RESULTS SCREEN (After Finishing Exam) ---
  if (showResults) {
    const s = score();
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full text-center">
          <h2 className="text-2xl font-bold mb-4">Exam Completed</h2>
          <p className="mb-2 text-lg">
            Score: {s.correct} / {s.total} ({s.pct}%)
          </p>

          {/* Restart exam */}
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

  // --- QUESTION VIEW (During Exam) ---
  const q = questionSet[currentIndex];                        // Current question
  const isSelectTwo = q?.q?.includes("(Select TWO.)");        // Check if question allows multiple selections
  const userAnswer = answers[q.id];
  const details = buildResultDetails(q, userAnswer || selectedChoice);
  const progressPercent = (timer / 120) * 100;                // Timer progress bar width

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="bg-white p-6 rounded-2xl shadow-md max-w-4xl w-full">
        {/* Question header */}
        <h2 className="text-xl font-semibold mb-2">
          Question {currentIndex + 1} / {questionSet.length}
        </h2>
        <p className="mb-4 text-gray-700">{q.q}</p>

        {/* Visual Timer Bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mb-4">
          <div
            className={`h-3 rounded-full ${timer <= 10 ? "bg-red-600" : "bg-green-500"
              } transition-all duration-1000`}
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Question Options */}
        <div className="space-y-3">
          {Object.entries(q.options).map(([key, text]) => {
            const isSelected = isSelectTwo
              ? selectedChoice?.includes(key)
              : selectedChoice === key;

            return (
              <label
                key={key}
                className={`block border p-3 rounded cursor-pointer ${isSelected ? "bg-blue-100 border-blue-500" : ""
                  } hover:bg-gray-100`}
              >
                <input
                  type={isSelectTwo ? "checkbox" : "radio"} // Type changes depending on question
                  name={`q_${q.id}`}
                  className="mr-2"
                  checked={isSelected}
                  onChange={() => handleAnswerSelection(key)}
                />
                <strong>{key}.</strong> {text}
              </label>
            );
          })}
        </div>

        {/* Buttons and Explanation Logic */}
        {!showExplanation ? (
          // Shown before submitting
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
          // Shown after submitting an answer
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

            {/* Button to go to the next question */}
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
