import React from 'react'
import styles from './Footer.module.css'
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <div className={styles.footer__section}>
        <section className={styles.footer__name}>
        <h1 className={styles.name}>Salman</h1>
        <h1 className={styles.js}>Javascript Developer</h1>
        </section>
        <section className={styles.footer__menu}>
           <text className={styles.footer__headings}>Pages</text> 
           <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
           </ul>
        </section>
        <section className={styles.footer__contact}>
            <text className={styles.footer__headings}>Contact</text>
            <text className={styles.contact__text}>SalmanShahid8896@gmail.com</text>
            <text className={styles.contact__text}>RYK, Pakistan</text>
        </section>
        <section className={styles.social__links}>
        <span onClick={()=>{window.open('https://twitter.com/JJust_Sal', '_blank');}}><FaTwitter/></span>
        <span onClick={()=>{window.open('https://github.com/SalmanShahid888', '_blank');}}><FaGithub/></span>
        <span onClick={()=>{window.open('https://www.linkedin.com/in/salman-shahid-25aba71ba/', '_blank');}}><FaLinkedin/></span>
        </section>
    </div>
    <div className={styles.footer__bottom}>
    <text className={styles.footer__bottom__text}>Copyright © 2022 by Salman Shahid. All Rights Reserved.</text>
    </div>
    </>
  )
}

export default Footer