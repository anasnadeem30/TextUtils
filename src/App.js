import Alert from "./components/Alert";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enbaled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("black");
      document.body.style.backgroundColor = "#010611";
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Dark mode has been disabled", "success");
    }
  };

  return (
    <BrowserRouter>
 <Navbar title="TextUtils" aboutText='About' mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 <Routes>
           <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below:" mode={mode}/>} />
           <Route path="about" element={<About/>} />
         </Routes>
 </div>
 </BrowserRouter>
   );
 }
 
 export default App;