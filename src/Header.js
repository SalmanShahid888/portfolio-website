import React from 'react'
import styles from "./Header.module.css"
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'

const Header = () => {
  return (
    <div id="home" className={styles.header__container}>
        <span onClick={()=>{}} className={styles.logo__text}>S</span>
        <div className={styles.main__menu}>
        <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        </div>
        <div className={styles.social__links}>
        <span onClick={()=>{window.open('https://twitter.com/JJust_Sal', '_blank');}}><FaTwitter/></span>
        <span onClick={()=>{window.open('https://github.com/SalmanShahid888', '_blank');}}><FaGithub/></span>
        <span onClick={()=>{window.open('https://www.linkedin.com/in/salman-shahid-25aba71ba/', '_blank');}}><FaLinkedin/></span>
        </div>     
    </div>
  )
}

export default Header