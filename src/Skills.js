import {React} from 'react'
import styles from "./Skills.module.css"
import reactImg from './svg/react-1.svg'
import reactNativeImg from './svg/react-native-1.svg'
import nodeImg from './svg/nodejs-2.svg'
import nextImg from './svg/next-js.svg'
import mongoDbImg from './svg/mongodb-icon-1.svg'
import javascriptImg from './svg/logo-javascript.svg'
import htmlImg from './svg/html-1.svg'
import gitImg from './svg/git-icon.svg'
import githubImg from './svg/github-icon-1.svg'
import cssImg from './svg/css-3.svg'
import firebaseImg from './svg/firebase-2.svg'

const Skills = () => {

    const logo = [
        {
            name: "HTML",
            image: htmlImg
        },
        {
            name: "CSS",
            image: cssImg
        },
        {
            name: "JavaScript",
            image: javascriptImg
        },
        {
            name: "React",
            image: reactImg
        },
        {
            name: "React Native",
            image: reactNativeImg
        }, 
        {
            name: "Next Js",
            image: nextImg
        },
        {
            name: "MongoDb",
            image: mongoDbImg
        },
        {
            name: "Firebase",
            image: firebaseImg
        },
        {
            name: "Version Control",
            image: gitImg
        },
        {
            name: "Github",
            image: githubImg
        },
        {
            name: "Node Js",
            image: nodeImg
        },
    ]
  return (
    <>
    <div id="projects" className={styles.heading__section}>
    <h1 className={styles.skills__heading}>My Skills</h1>
    </div>
    <div className={styles.skills__section}>
    {logo.map((item) => {
        return (
        <div className={styles.skills__container}>
        <img src={item.image} alt={`${item.name} logo`} className={styles.logo__img}></img>
        <p className={styles.logo__name}>{item.name}</p>
        </div>
        )
    })} 
    </div>
    </>
  )
}

export default Skills