import { useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/layout/Navbar";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const EmailAutomation = () => {

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSend = async () => {

    if (!email) {
      toast.error("Please enter email");
      return;
    }

    setLoading(true);

    try {

      await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            service_id:
              "service_m3t29no",

            template_id:
              "template_zkbmfos",

            user_id:
              "LMTPZ6SGwxHkFlvW8",

            template_params: {
              user_email: email,

              message:
                "Your AI Assessment Report has been generated successfully.",
            },
          }),
        }
      );

      toast.success(
        "Email Sent Successfully"
      );

      setEmail("");

    } catch (error) {

      toast.error("Failed To Send Email");

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

      <div className="max-w-3xl mx-auto px-6 pt-40 relative z-10">

        <Card className="p-10">

          <h1 className="text-5xl font-bold">
            Email Automation
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Send assessment reports automatically to users.
          </p>

          <div className="mt-10">

            <Input
              type="email"
              placeholder="Enter user email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

          </div>

          <div className="mt-8">

            <Button onClick={handleSend}>

              {loading
                ? "Sending..."
                : "Send Email"}

            </Button>

          </div>

        </Card>

      </div>

    </div>
  );
};

export default EmailAutomation;