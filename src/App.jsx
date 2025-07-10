import React, { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import styles from './App.module.css'
import Home from './Components/Home/Home.jsx'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <div className={`${styles.appContainer} ${darkMode ? styles.dark : ''}`}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar onToggleDarkMode={toggleDarkMode} />
        <Home />
      </div>
    </div>
  )
}

export default App
