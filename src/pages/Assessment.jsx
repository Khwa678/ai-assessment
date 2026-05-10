import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import ProgressBar from "../components/ui/ProgressBar";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import questionsData from "../data/questions";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Assessment = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setQuestions(shuffleArray(questionsData));
  }, []);

  if (!questions.length) return null;

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = option;

    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let totalScore = answers.reduce(
      (acc, item) => acc + item.score,
      0
    );

    localStorage.setItem(
      "assessmentScore",
      totalScore
    );

    navigate("/results");
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">

      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-36">

        <Card className="p-10">

          <div className="mb-10">

            <ProgressBar progress={progress} />

            <p className="text-gray-400 mt-4">
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </p>

          </div>

          <AnimatePresence mode="wait">

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.4 }}
            >

              <h1 className="text-5xl font-bold leading-tight">
                {
                  questions[currentQuestion]
                    .question
                }
              </h1>

              <div className="space-y-5 mt-10">

                {questions[
                  currentQuestion
                ].options.map((option, index) => (

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    key={index}
                    onClick={() =>
                      handleAnswer(option)
                    }
                    className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 ${
                      answers[currentQuestion]
                        ?.text === option.text
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 border-transparent"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {option.text}
                  </motion.button>

                ))}

              </div>

            </motion.div>

          </AnimatePresence>

          <div className="flex justify-between mt-12">

            <Button
              onClick={prevQuestion}
              className="bg-white/10 border border-white/10"
            >
              Previous
            </Button>

            {currentQuestion ===
            questions.length - 1 ? (

              <Button
                onClick={handleSubmit}
              >
                Submit
              </Button>

            ) : (

              <Button onClick={nextQuestion}>
                Next
              </Button>

            )}

          </div>

        </Card>

      </div>

    </div>
  );
};

export default Assessment;