import './App.css';
import { useTranslation } from 'react-i18next';
import { PolandBorderInfo } from './Pages/PolandBorder';

//COMPONENTS
import Navbar from './Components/Navbar/Navbar';
import LanguagePicker from './Components/LanguagePicker/LanguagePicker';

//PAGES
import Home from './Components/Home/Home';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguagePicker />
      <Navbar />
      <PolandBorderInfo />
      <Home />
    </div>
  );
}

export default App;
