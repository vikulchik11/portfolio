import React, {useRef} from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import {FaSlack} from "react-icons/fa"
import {IoLogoWhatsapp} from "react-icons/io"
import emailjs from 'emailjs-com';




function Contact() {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6f0xjve', 'template_321840j', form.current, 'SC_AAAQk9KkMkMe7_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); 
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option_icon"/> 
            <h4>Email</h4>
             <a href="mailto: viktoriyakurguzova@yahoo.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <FaSlack className="contact_option_icon"/> 
            <h4>Slack</h4>
            <a href="https://acmeco.slack.com/team/U01GHNAH8AV" target="_blank">Send a message</a>

          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className= "contact_option_icon"/> 
            <h4>WhatsApp</h4>
            <a href="https://api.WhatsApp.com/send?phone=19166926604" target="_blank">Send a message</a>
          </article> 
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button type="submit" className="btn btn_primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact