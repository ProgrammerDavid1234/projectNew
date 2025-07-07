import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import styles from './App.module.css'
import Home from './Components/Home/Home.jsx'

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      <div className={styles.rightSection}>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App
