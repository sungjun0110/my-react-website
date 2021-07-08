import React from 'react'
import './ContactMe.css'
import emailjs from 'emailjs-com'
import { FaFileDownload } from 'react-icons/fa'


function ContactMe() {

  function sendEmail(e) {
    e.preventDefault()
    
    emailjs.sendForm("service_qvxkboe", "template_htkav4p", e.target, "user_LCqp45zOungkwyrup0cD9")
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
    <div id="contact">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1>Contact Me</h1>
        <input type="text" id="name-input" name="user_name" placeholder="Name" required /><br/>
        <input type="email" id="email-input" name="user_email" placeholder="Email" required /><br/>
        <textarea id="massage-input" name="message" placeholder="Message" required /><br/>
        <input type="submit" value="Send" />
        <div id="resume-div">
          <a href="https://github.com/sungjun0110/resume/raw/main/Sungjun_Choi_Resume.docx" target="_blank">
            Download Resume
            <FaFileDownload size="1rem"/>
          </a>
        </div>
      </form>
    </div>
  )
}

export default ContactMe
