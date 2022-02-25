import "./App.css";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";
import LanguagePicker from "./Components/LanguagePicker/LanguagePicker";
import { Helmet, HelmetProvider } from "react-helmet-async"

//PAGES
import Home from "./Components/Home/Home";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>Leave Ukraine</title>
          <link rel="canonical" href="https://www.leaveukraine.com/" />
          <meta name="description" content="Help and information for refugees trying to leave ukraine" />
          <meta name="keywords" content="ukraine, help, info, leaveukraine" />
        </Helmet>
        <LanguagePicker />
        <Navbar />
        <Home />
      </div>
    </HelmetProvider>
  );
}

export default App;
