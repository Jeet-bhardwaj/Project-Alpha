import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

// Create a wrapper component to use useLocation
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <TopBar />
      <Navbar />
      {isHomePage && <SocialMedia />}
      <div className={styles.appContainer}>
        <div className={styles.pageWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Trainers" element={<Trainers />} />
            <Route path="/Servicess" element={<Servicess />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
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
