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
        <span onClick={()=>{window.open('https://www.google.com', '_blank');}}><FaTwitter/></span>
        <span onClick={()=>{window.open('https://www.google.com', '_blank');}}><FaGithub/></span>
        <span onClick={()=>{window.open('https://www.google.com', '_blank');}}><FaLinkedin/></span>
        </div>     
    </div>
  )
}

export default Header