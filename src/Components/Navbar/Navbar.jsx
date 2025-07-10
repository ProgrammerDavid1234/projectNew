import React from 'react'
import styles from './Navbar.module.css'
import Bulb from '../../assets/bulb.png'

const Navbar = ({ onToggleDarkMode }) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={`${styles.logo} ${styles.alwaysBlack}`}>
          <p>CL</p>

        </div>
        <div className={styles.navbarContainer}>
          <div className={styles.icon} onClick={onToggleDarkMode}>
            <img src={Bulb} alt="icon" className={styles.iconImage} />
          </div>
          <div className={`${styles.navbarTexts} ${styles.alwaysBlack}`}>
            <p>Home</p>
            <p>About</p>
            <p>Contact Us</p>
            <p>Services</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
