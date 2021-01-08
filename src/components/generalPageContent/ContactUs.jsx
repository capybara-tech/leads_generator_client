import React, { useEffect } from 'react'
import "./ContactUs.style.css";
import { Icon } from "semantic-ui-react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="contactUsContent">
      <h1 data-cy="title" id="title">Contact the SOLSPANA team</h1>
      <h3 id= "subTitle">The quickest way to to get in touch is to start a <span id="liveChat">live chat</span><Icon name="rocketchat" />, alternatively:</h3>
      <h2 className="contactTitle">Email</h2>
      <p className="contactContent">capybara.it@gmail.com</p>
      <h2 className="contactTitle">Post</h2>
      <p className="contactContent">Kista, Stockholm</p> <br />
      <p id="conclusion">Real people ready to address your queries or offer friendly advice.</p>
    </div>
  )
}

export default ContactUs