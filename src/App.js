import { Suspense } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";

//PAGES
import Footer from "./Components/Footer/Footer";

import Router from "./pages/Router";

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
          <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Navbar />
            <Router />
            <Footer />
          </div>
        </Suspense>
      </div>
    </HelmetProvider>
  );
}

export default App;
