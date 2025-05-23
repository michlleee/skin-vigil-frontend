import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/HomePage";
import AboutUs from "./pages/about/AboutUsPage";
import UploadSection from "./pages/upload/DetectUpload";
import InformationPage from "./pages/information/InformationPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<InformationPage/>}></Route>
        <Route path="/upload" element={<UploadSection />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
