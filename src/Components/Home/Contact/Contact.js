import React from "react";
import "./Contact.css";
import beehance from "../../../Image/social/Beehance.png";
import dribble from "../../../Image/social/Dribble.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  const FbHandler = () => {
    window.open("https://www.facebook.com/saimumbiz", "_blank");
  };
  const instagramHandler = () => {
    window.open("https://www.instagram.com/saimumbiz", "_blank");
  };
  const twitterHandler = () => {
    window.open("https://www.twitter.com/saimumbiz", "_blank");
  };
  const linkedinHandler = () => {
    window.open("https://www.linkedin.com/in/saimumbiz", "_blank");
  };
  const whatsappHandler = () => {
    window.open("https://www.facebook.com/saimumbiz", "_blank");
  };
  const beehanceHandler = () => {
    window.open("https://www.behance.net/saimumbiz", "_blank");
  };
  const dribbleHandler = () => {
    window.open("https://www.dribbble.com/saimumbiz", "_blank");
  };
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-12">
            <h1 className="pt-5">Let's Discuss For A Project</h1>
            <p className="my-5">
              Change is the law of life. <br />
              And those who look only to the past and present are certain to
              miss the future.
              <br />
              Change is the first step in improvement. Change can change your
              life and life style
            </p>
            <button className="contact_btn">Start Talking</button>
            <div className="contact-icon">
              <FacebookIcon className="mr-3" onClick={FbHandler} />
              <InstagramIcon className="mr-3" onClick={instagramHandler} />
              <TwitterIcon className="mr-3" onClick={twitterHandler} />
              <LinkedInIcon className="mr-3" onClick={linkedinHandler} />
              <WhatsAppIcon className="mr-3" onClick={whatsappHandler} />
              <img
                className="img-fluid mr-3"
                src={beehance}
                alt=""
                onClick={beehanceHandler}
                style={{ width: "18px" }}
              />
              <img
                className="img-fluid"
                src={dribble}
                alt=""
                onClick={dribbleHandler}
                style={{ width: "18px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
