import { Routes, Route } from "react-router-dom";
import "./App.css";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";

//PAGES
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import BorderInformationpage from "./pages/border-information";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="border-information" element={<BorderInformationpage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Routes>
    </div>
  );
}

export default App;
