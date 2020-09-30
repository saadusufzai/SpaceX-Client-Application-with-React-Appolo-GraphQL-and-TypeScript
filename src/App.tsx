import React, { useCallback, useState } from "react";
import LaunchList from "./components/LaunchList";
import LaunchProfile from "./components/LaunchProfile";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [id, setID] = useState(55);
  const handelIDChange = useCallback((newId) => {
    setID(newId);
  }, []);

  return (
    <>
      <Header/>
      <div className="App">
        <LaunchList handelIdChange={handelIDChange} />
        <LaunchProfile id={id} />
      </div>
    </>
  );
}

export default App;
