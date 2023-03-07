import React, {useState} from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";


function App() {
  const [mode, Setmode] = useState('light');    //whether dark or light mode is activated

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const handleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      Setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Success");
    }

    else{
      Setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TITLE" mode={mode} toggleMode = {handleMode} />
        <Alert alert={alert} />
        <div className = "container">
          <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm example="new text" heading="Box of contents" mode={mode} showAlert = {showAlert}/> }/>
                   
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
