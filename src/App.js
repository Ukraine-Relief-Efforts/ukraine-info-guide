import "./App.css";

//COMPONENTS
import Navbar from "./Components/Navbar/Navbar";

//PAGES
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
