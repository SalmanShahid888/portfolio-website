import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from './ContactFrom.module.css'
import KEY from './EmailKey';
const ContactFrom = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const form = useRef();
  const formSubmitHandler = (event) => {
    event.preventDefault();

    emailjs.sendForm(KEY.serviceID, KEY.templateID, form.current, KEY.userID)
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });

      setName("");
      setEmail('');
      setDescription("");
  }; 

  return <>
  <form ref={form} id={styles.contact__formId} onSubmit={formSubmitHandler}>
    <input type={"text"} name={"user_name"} value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
    <input type={"email"} name={"user_email"} value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <input id={styles.user__message} name={"message"} value={description} onChange={e=>setDescription(e.target.value)} placeholder="Message"></input>   
    <input id={styles.form__button} type="submit" value={"send"}/>
  </form>
  </> 
};

export default ContactFrom