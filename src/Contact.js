import React from 'react'
import styles from './Contact.module.css'
import ContactFrom from './ContactFrom'
const Contact = () => {
  return (
    <>
    <div id="contact" className={styles.contact__section}>
    <h1 className={styles.contact__heading}>Contact</h1>
    <div className={styles.contact__form}>
    <text className={styles.contact__text}>
        I occaionally take FreeLance work. Say Hi! to me {`\uD83D\uDC4B`} or Leave a message if want to work with me. 
    </text>
    <ContactFrom/>
    </div>
    </div>
    </>
  )
}

export default Contact