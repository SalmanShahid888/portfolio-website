import React from 'react'
import styles from './About.module.css'
import profilePic from "./svg/profilepic.jpg"
import {FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa'
const About = () => {
  return (
    <>
    <div className={styles.heading__section}>
    <h1 className={styles.about__heading}>About</h1>
    </div>
    <div className={styles.about__section}>
    <div className={styles.profile__section}>
    <img className={styles.profile__pic} src={profilePic} alt={"profile"}></img>
    <h1 className={styles.profile__name}>Salman Shahid</h1>
    <div className={styles.social__links}>
        <span><FaFacebook/></span>
        <span><FaGithub/></span>
        <span><FaLinkedin/></span>
        </div> 
    </div>

    <div className={styles.profile__text}>

    </div>
    </div>
    </>
  )
}

export default About