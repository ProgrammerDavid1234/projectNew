import React from 'react'
import styles from './Sidebar.module.css'
import Search from '../../assets/search.png'
const Sidebar = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.generalDivTop}>
                    <div className={styles.logo}>
                        <p>CL</p>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.name}>Clinton</p>
                        <p className={styles.regNum}>
                            Reg No: 123456789
                        </p>
                    </div>

                </div>

                {/* new div */}
                <div className={styles.tabs}>
                    <div className={styles.tabsHover}>
                        <div className={styles.search}>
                            <img src={Search} alt="search" className={styles.searchIcon} />
                            <input type="text" placeholder="Search..." className={styles.searchInput} />
                        </div>
                        <p>Home</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Contact Us</p>
                    </div>

                </div>

                {/* footer */}
                <hr />
                <div className={styles.footer}>
                    <p>Login</p>
                    <p>Signup</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
