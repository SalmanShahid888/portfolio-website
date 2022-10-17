import React from 'react'
import styles from './Introduction.module.css'

const Introduction = () => {
  return (
    <>
    <div className={styles.intro__container}>
        <h1 className={styles.intro__name}>Salman</h1>
        <h2 className={styles.intro__js}>Javascript Developer</h2>
        <p className={styles.intro__text}>Hey!  I am Salman, a Software Engineer and a self-taught web developer focused on the building the Frontend of Websites and Web application 
        that lead to success of the overall product.</p>
    </div>
    <div className={styles.overview__section}>
    <h1 className={styles.overview__heading}>Overview</h1>
    <p className={styles.overview__text}> The main goal was to create a sleek, modern and minimalistic design for a javascript developer portfolio website. After some research on modern and minimalistic design I came up with a rough idea of how I can make it to the point, clean and easy to understand.<br/> <br/>Using only some basic colors and a dark background, I was able to give this website a unique and modern feel. This not only makes the viewer feel free due to empty spaces but also helps with the eye comfort considering the increasing use of dark mode. Similarly, as there are almost no images in the design this, thus, keeping the number of colors in the design minimum. This makes the overall design more consistent and clean.</p>
    </div>
    </>
  )
}

export default Introduction