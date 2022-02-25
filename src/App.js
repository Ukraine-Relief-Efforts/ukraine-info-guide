import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import './App.css';
import './components/LanguagePicker';
import LanguagePicker from './components/LanguagePicker';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Ukraine')}
        </a>
        <LanguagePicker />
      </header>
    </div>
  );
}

export default App;
