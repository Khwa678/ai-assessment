// FILE: src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";
import EmailAutomation from "../pages/EmailAutomation";
import Home from "../pages/Home";
import Assessment from "../pages/Assessment";
import Results from "../pages/Results";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
return ( <Routes>
<Route path="/" element={<Home />} />
<Route path="/assessment" element={<Assessment />} />
<Route path="/results" element={<Results />} />
<Route path="/success" element={<Success />} />
<Route path="*" element={<NotFound />} />
<Route
  path="/email-automation"
  element={<EmailAutomation />}
/>

 </Routes>
);
};

export default AppRoutes;
