import React, { useCallback, useState } from 'react';
import LaunchList from './components/LaunchList';
import LaunchProfile from './components/LaunchProfile';

import './App.css';

function App() {

  const [id, setID] = useState(42)
  const handelIDChange = useCallback(newId =>{
    setID(newId)
  }, [])

  return (
    <div className="App">
      <LaunchList/>
      <LaunchProfile/>
     
    </div>
  );
}

export default App;
