import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import ProgressBar from "../components/ui/ProgressBar";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";

import questionsData from "../data/questions";
import { saveAssessment } from "../services/assessmentService";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Assessment = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [answers, setAnswers] = useState([]);

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

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
    if (!answers[currentQuestion]) {
      toast.error("Please select an option");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      let totalScore = answers.reduce(
        (acc, item) => acc + item.score,
        0
      );

      localStorage.setItem(
        "assessmentScore",
        totalScore
      );

      localStorage.setItem(
        "assessmentEmail",
        email
      );

      await saveAssessment({
        email,
        score: totalScore,
        answers,
      });

      toast.success(
        "Assessment Submitted Successfully"
      );

      navigate("/results");
    } catch (error) {
      toast.error("Something went wrong");

      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">

      <Navbar />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-4xl mx-auto px-6 pt-36 relative z-10">

        <Card className="p-10">

          <div className="mb-8">

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

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

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">

                {
                  questions[currentQuestion]
                    .question
                }

              </h1>

              <div className="space-y-5 mt-10">

                {questions[
                  currentQuestion
                ].options.map(
                  (option, index) => (

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

                  )
                )}

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
                {loading
                  ? "Submitting..."
                  : "Submit"}
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