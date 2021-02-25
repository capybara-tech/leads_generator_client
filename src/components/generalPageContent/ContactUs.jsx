import React, { useEffect } from "react";
import "./ContactUs.style.css";
import Media from "react-media";
import { Icon } from "semantic-ui-react";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Media
        queries={{
          mobile: "(max-width: 599px)",
          desktop: "(min-width: 600px)",
        }}
      >
        {(matches) => (
          <>
            {matches.mobile && (
              <div id="contactUsContentMobile">
                <p data-cy="title" id="titleMobile">
                  Contact the WATTSWHAT team
                </p>
                <p id="subTitleMobile">
                  The quickest way to to get in touch is to start a{" "}
                  <span id="liveChat">live chat</span>
                  <Icon name="rocketchat" />, alternatively:
                </p>
                <h2 className="contactTitleMobile">Email</h2>
                <p className="contactContentMobile">capybara.it@gmail.com</p>
                <h2 className="contactTitleMobile">Post</h2>
                <p className="contactContentMobile">Kista, Stockholm</p> <br />
                <p id="conclusionMobile">
                  Real people ready to address your queries or offer friendly
                  advice.
                </p>
              </div>
            )}
            {matches.desktop && (
              <div id="contactUsContent">
                <p data-cy="title" id="title">
                  Contact the WATTSWHAT team
                </p>
                <p id="subTitle">
                  The quickest way to to get in touch is to start a{" "}
                  <span id="liveChat">live chat</span>
                  <Icon name="rocketchat" />, alternatively:
                </p>
                <h2 className="contactTitle">Email</h2>
                <p className="contactContent">capybara.it@gmail.com</p>
                <h2 className="contactTitle">Post</h2>
                <p className="contactContent">Kista, Stockholm</p> <br />
                <p id="conclusion">
                  Real people ready to address your queries or offer friendly
                  advice.
                </p>
              </div>
            )}
          </>
        )}
      </Media>
    </div>
  );
};

export default ContactUs;
