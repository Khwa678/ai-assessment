import Navbar from "../components/layout/Navbar";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import generatePDF from "../utils/generatePDF";

const Results = () => {
  const score =
    Number(
      localStorage.getItem("assessmentScore")
    ) || 0;

  const email =
    localStorage.getItem(
      "assessmentEmail"
    ) || "No Email";

  const getRemark = () => {
    if (score >= 120)
      return "Excellent Performance";

    if (score >= 80)
      return "Good Performance";
     return "Needs Improvement";
  };

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-hidden">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 pt-36 pb-20">
        <div id="report">
          <div className="grid lg:grid-cols-2 gap-10">
            <Card className="p-8">
              <h1 className="text-5xl font-bold">
                Assessment Results
              </h1>
<p className="text-gray-400 mt-5 text-lg">
                Your dynamic AI assessment analysis.
              </p>

              <div className="mt-6 bg-white/5 border border-white/10 p-5 rounded-2xl">
                <p className="text-gray-400">
                  User Email
                </p>

                <h3 className="text-xl mt-2">
                  {email}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                <Card className="text-center">
                  <h2 className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    {score}
                  </h2>

                  <p className="text-gray-400 mt-3">
                    Total Score
                  </p>
                </Card>

                <Card className="text-center">
                  <h2 className="text-2xl font-bold">
                    {getRemark()}
                  </h2>
 <p className="text-gray-400 mt-3">
                    AI Evaluation
                  </p>
                </Card>
              </div>

              <div className="mt-10">
                <Button onClick={generatePDF}>
                  Download PDF Report
                </Button>
              </div>
                          </Card>

            <Card className="p-8">
              <h2 className="text-4xl font-bold">
                Recommendations
              </h2>

              <div className="space-y-5 mt-8">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  Improve React architecture skills.
                </div>
<div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  Build more AI integrated projects.
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300">
                  Practice frontend optimization.
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;