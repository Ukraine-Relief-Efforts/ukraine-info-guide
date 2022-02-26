import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";

//PAGES
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import Header from "./Components/Header/Header";
import BorderInformationPage from "./pages/border-information";
import PolandFormPage from "./pages/poland-form";

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
        <Suspense fallback="Loading...">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="border-information"
              element={<BorderInformationPage />}
            />
            <Route path="about" element={<AboutPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="poland-form" element={<PolandFormPage />} />
          </Routes>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
