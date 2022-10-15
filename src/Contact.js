import React from 'react'
import styles from './Contact.module.css'
import ContactFrom from './ContactFrom'
const Contact = () => {
  return (
    <>
    <div className={styles.contact__section}>
    <h1 className={styles.contact__heading}>Contact</h1>
    <div className={styles.contact__form}>
    <ContactFrom/>
    </div>
    </div>
    </>
  )
}

export default Contact