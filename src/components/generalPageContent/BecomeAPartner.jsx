import React, { useEffect } from "react";
import "./BecomeAPartner.style.css";
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Customer satisfaction',
    description:
      'We love our customers and want you too so its important that you provide a first class service at all times.',
  },
  {
    header: 'MCS certified',
    description:
      'The only other condition is that you are MCS registered.',
  },
]

const BecomeAPartner = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div id="becomeAPartnerContent">
      <h1 id="title" data-cy="title">Join #TEAMSOLSPANA</h1>
      <h3 id= "subTitle">Get a <span id="highlightedWord">steady flow of jobs*</span>, reduce your admin & <span id="highlightedWord">keep all revenue</span> from our referral (apart from of course our minimal intro fee).</h3>
      <Card.Group centered items={items} /> <br />
      <p className="conclusion">Say goodbye to tedious paperwork, simply drop us an email or start a live chat to get the ball rolling.</p>
      <p className="conclusion">Join our quest to help make the UK more energy efficient.</p>
    </div>
  );
};

export default BecomeAPartner;