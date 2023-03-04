import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      console.log('DarkMode');
      document.body.style.backgroundColor = 'rgb(48,65,78)';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "success");
    }
    else{
      setMode('light');
      console.log('LightMode');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212529';
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route path='/TextUtilities' element={<TextForm mode={mode} showAlert={showAlert} heading="Text Utilities - Word, Character Counter and Much More..." />}/>
          <Route path='/about' element={<About mode={mode}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
