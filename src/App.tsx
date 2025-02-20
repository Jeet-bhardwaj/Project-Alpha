import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Trainers from "./pages/Trainers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import styles from "./App.module.css"; // Import CSS
import Servicess from "./pages/Servicess";
import SocialMedia from "./components/SocialMedia";
import TopBar from "./components/TopBar";
import Admin from "./pages/Admin";
import Cardio from "./pages/Service/Cardio";
import CrossFit from "./pages/Service/CrossFit";
import StrengthTraining from "./pages/Service/StrengthTraining";
import Yoga from "./pages/Service/Yoga";
import Zumba from "./pages/Service/Zumba";
import Calisthenics from "./pages/Service/Calisthenics";
import Registration from "./components/Registration";
import CalorieDeficit from "./components/CallaryDeficate";
// Wrapper Component to handle Layout and Routing
const AppContent = () => {
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <>
      <TopBar />
      <Navbar />
      {isHomePage && <SocialMedia />}
      <main className={styles.appContainer}>
        <div className={styles.pageWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/services" element={<Servicess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/services/cardio" element={<Cardio />} />
            <Route path="/services/crossfit" element={<CrossFit />} />
            <Route path="/services/strength-training" element={<StrengthTraining />} />
            <Route path="/services/yoga" element={<Yoga />} />
            <Route path="/services/zumba" element={<Zumba />} />
            <Route path="/services/Calisthenics" element={<Calisthenics />} />
            <Route path="/registration" element={<Registration isOpen={isRegistrationOpen} onClose={() => setIsRegistrationOpen(false)} />} />
            <Route path="/calorie-deficit" element={<CalorieDeficit />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
