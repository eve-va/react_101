import './index.css';
import React from 'react';
import Main from "./components/Main"
import Navbar from "./components/Navbar"

function App() {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Main darkMode={darkMode} />
      </div>
  )
}

export default App;
