import {React} from 'react'
import { createPortal } from 'react-dom';
import "./Modal.css"

export default function Modal(props) { 
if (!props.open) return null;

    return createPortal(
      <>      
          <div className="modal">
            <div onClick={props.onClose} className="modal__overlay"></div>
            <div className="modal__content">
              <h2>Your Message has been sent!</h2>
              <p>
                Thank you for sending me a message, I'll get back to you shortly through email.
              </p>
              <button className="close__modal__button" onClick={props.onClose}>
                CLOSE
              </button>
            </div>
          </div>
      </>, document.getElementById("portal")
    );  }
