import React from 'react'
// import {useNavigate} from "react-router-dom"
import styles from "./Header.module.css"
import {FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa'

const Header = () => {
  return (
    <div className={styles.header__container}>
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
        <span><FaFacebook/></span>
        <span><FaGithub/></span>
        <span><FaLinkedin/></span>
        </div>     
    </div>
  )
}

export default Header