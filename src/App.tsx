import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useMemo } from "react";
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

// Wrapper Component to handle Layout and Routing
const AppContent = () => {
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]);

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
