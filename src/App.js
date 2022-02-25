import './App.css';
import { PolandBorderInfo } from './Pages/PolandBorder';

//COMPONENTS
import Navbar from './Components/Navbar/Navbar';

//PAGES
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PolandBorderInfo />
      <Home />
    </div>
  );
}

export default App;
