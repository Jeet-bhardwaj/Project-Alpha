import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Trainers from "./pages/Trainers";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import styles from "./App.module.css"; // Import CSS

function App() {
  return (
    <Router>
      <Navbar />
      <div className={styles.appContainer}>
        <div className={styles.pageWrapper}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Trainers" element={<Trainers />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
