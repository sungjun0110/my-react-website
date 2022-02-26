import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';
import { FaFileDownload } from 'react-icons/fa';

function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID)
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_EMAILJS_USER_ID
      ).then(result => {
        console.log(result.text);
      }, error => {
        console.log(error.text);
      });
  };

  return (
    <div id="contact">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <h1>Contact Me</h1>
        <input type="text" id="name-input" name="user_name" placeholder="Name" required /><br/>
        <input type="email" id="email-input" name="user_email" placeholder="Email" required /><br/>
        <textarea id="massage-input" name="message" placeholder="Message" required /><br/>
        <input type="submit" value="Send" />
      </form>
      <div id="resume-div">
          <a href="https://github.com/sungjun0110/resume/raw/main/resume.pdf" target="_blank">
            Download Resume
            <FaFileDownload size="1rem"/>
          </a>
        </div>
    </div>
  )
}

export default ContactMe
