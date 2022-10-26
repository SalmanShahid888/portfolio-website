import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import styles from './ContactFrom.module.css'
import KEY from './EmailKey';
import Modal from './Modal';

const ContactFrom = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [description, setDescription] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
  const form = useRef();
  
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (emailRegex.test(email) && name.length >= 0 && description.length >= 0){
      emailjs.sendForm(KEY.serviceID, KEY.templateID, form.current, KEY.userID)
      .then((result) => {
          console.log(result.text);         
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      })
      setIsOpen(true)
      setName("");
      setEmail('');
      setDescription("");
    } else {
        window.alert("Invalid Form Submission")
    } 
  }; 


  return <>
  <form ref={form} id={styles.contact__formId} onSubmit={formSubmitHandler} autoComplete={"off"}>
    <input type={"text"} className="form__sumbit__input" name={"user_name"} value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}} required={true} autoComplete={"off"}/>
    <input type={"email"} className="form__sumbit__input" name={"user_email"} value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} required={true} autoComplete={"off"}/>
    <input id={styles.user__message} className="form__sumbit__input" name={"message"} value={description} onChange={e=>setDescription(e.target.value)} placeholder="Message" required={true} autoComplete={"off"}></input>   
    <input id={styles.form__button} className="form__sumbit__button" type="submit" value={"send"}/>
  </form>
   <Modal open={isOpen} onClose={()=>{setIsOpen(false)}}/>
  </> 
};

export default ContactFrom