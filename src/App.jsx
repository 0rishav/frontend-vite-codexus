import Footer from "./components/Footer";
import Header from "./components/Header";
import DigiMarket from "./components/pages/digi-market/DigiMarket";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Webdev from "./components/pages/web&dev/Webdev";
import Android from "./components/pages/Android/Android";
import AiMlService from "./components/pages/Ai-Mi-Service/AiMlService";
import Service from "./components/pages/services/Service";
import Codexuslab from "./components/pages/labsetup/Codexuslab";
import QuestionPage from "./components/pages/question-page/QuestionPage";
import SystemDesign from "./components/pages/system-design/SystemDesign";
import About from "./components/pages/About/About";
import AdminDashboard from "./components/admin/admin-dashborad/AdminDashboard";
import { useEffect, useState } from "react";
import Profile from "./components/pages/profile/Profile";
import ProjectTrack from "./components/pages/project-track/ProjectTrack";
import Payment from "./components/pages/payment/Payment";
import Login from "./components/pages/login/Login";
import ProjectRegistration from "./components/pages/project-Registration/ProjectRegistration";
import InternshipRegistration from "./components/pages/Internship-Registration/InternshipRegistration";
import { useRefreshTokenMutation } from "./features/api/userSlice";
import TokenManager from "./components/utils/TokenManager";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import PublicRoute from "./components/utils/PublicRoute";
import AdminProtected from "./components/utils/AdminProtected"


const App = () => {
  const [scrolled, setScrolled] = useState(false);

  const [refreshToken] = useRefreshTokenMutation();



  const handleScroll = () => {
    if (window.scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Toaster position="top-right" reverseOrder={false} />
        <Header scrolled={scrolled} />
        <TokenManager refreshToken={refreshToken} />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home scrolled={scrolled} />} />
            <Route path="/digi_market" element={<DigiMarket />} />
            <Route path="/web&dev" element={<Webdev />} />
            <Route path="/android-service" element={<Android />} />
            <Route path="/ai&ml-service" element={<AiMlService />} />
            <Route path="/service" element={<Service />} />
            <Route path="/codexuslabs" element={<Codexuslab />} />
            <Route path="/question-page/:id" element={<QuestionPage />} />
            <Route path="/system-design" element={<SystemDesign />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/project-registration"
              element={<ProjectRegistration />}
            />
            <Route
              path="/internship-registration"
              element={<InternshipRegistration />}
            />
            <Route path="/user-profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/track-projet-status" element={<ProtectedRoute><ProjectTrack /></ProtectedRoute>} />
            <Route path="/admin-dashboard/*" element={<AdminProtected><AdminDashboard/></AdminProtected>} />
            <Route path="/payment-history" element={<Payment />} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
