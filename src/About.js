import React from 'react'
import styles from './About.module.css'
import profilePic from "./svg/profilepic.jpg"
import {FaTwitter,FaGithub,FaLinkedin} from 'react-icons/fa'
const About = () => {
  return (
    <>
    <div id="about" className={styles.heading__section}>
    <h1 className={styles.about__heading}>About</h1>
    </div>
    <div className={styles.about__section}>
    <div className={styles.profile__section}>
    <img className={styles.profile__pic} src={profilePic} alt={"profile"}></img>
    <h1 className={styles.profile__name}>Salman Shahid</h1>
    <div className={styles.social__links}>
        <span onClick={()=>{window.open('https://twitter.com/JJust_Sal', '_blank');}}><FaTwitter/></span>
        <span onClick={()=>{window.open('https://github.com/SalmanShahid888', '_blank');}}><FaGithub/></span>
        <span onClick={()=>{window.open('https://www.linkedin.com/in/salman-shahid-25aba71ba/', '_blank');}}><FaLinkedin/></span>
    </div> 
    </div>

    <div className={styles.profile__text}>
        <p className={styles.about__text}> I am a software engineer currently studying at the university in the last year of my Graduate Degree.
        I have 2+ years of experience with React.js. I love building websites and experimenting with stuff.
        Since 2020, I've been enjoying the opportunity open source has given me to make my contributions as well.
        I also enjoy gaming in my free time. I would say I am pretty good at First Person shooters.
        This will be an adventure that's different than anything I ever did before — one where you are part of a project from the beginning!</p>
    </div>
    </div>
    </>
  )
}

export default About