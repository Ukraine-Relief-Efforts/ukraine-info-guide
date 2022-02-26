import { Routes, Route } from "react-router-dom";
import "./App.css";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";

//PAGES
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import BorderInformationpage from "./pages/border-information";
import LanguagePicker from "./Components/LanguagePicker/LanguagePicker";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Leave Ukraine</title>
          <link rel="canonical" href="https://www.leaveukraine.com/" />
          <meta
            name="description"
            content="Help and information for refugees trying to leave ukraine"
          />
          <meta name="keywords" content="ukraine, help, info, leaveukraine" />
        </Helmet>
        <LanguagePicker />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="border-information"
            element={<BorderInformationpage />}
          />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
