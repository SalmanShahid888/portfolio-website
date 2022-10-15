import React from 'react'
import { useState } from 'react'
import styles from './ContactFrom.module.css'
const ContactFrom = () => {
  const [name, setName] = useState(" ")
  const [email, setEmail] = useState(" ")
  const [desciption, setDesciption] = useState(" ")
  return <form className={styles.contact__form}>
    <input type={"text"} value={name} onChange={(e)=>{setName(e.target.value)}}/>
    <input type={"email"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type={"text"} value={desciption} onChange={(e)=>{setDesciption(e.target.value)}}/>    
    <button>Send</button>
  </form>
}

export default ContactFrom