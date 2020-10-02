import React, { useCallback, useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Launches from "./components/Launches/Launches";

function App() {
  const [id, setID] = useState(55);
  const handelIDChange = useCallback((newId) => {
    setID(newId);
  }, []);

  return (
    
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path="/" element={<Launches id={id} handelIdChange={handelIDChange} />}/>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
