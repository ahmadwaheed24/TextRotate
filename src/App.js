import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Tell wether dark mode is enable or not
  const [alert, setAlert] = useState(null); // To show alerts

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#24292D';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextRotate - Dark mode Home';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextRotate - Light mode Home';

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextRotate" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm heading="Enter your Text to analyze" showAlert={showAlert} mode={mode} />
          {/* </Route>
        </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
