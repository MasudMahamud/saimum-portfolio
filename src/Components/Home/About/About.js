import { Button } from "react-bootstrap";
import React from "react";
import "./About.css";
import img from "../../../Image/about-image.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  const connectWhatsApp = () => {
    window.open("https://wa.me/01636623121", "_blank");
  };
  return (
    <section className="about-container" id="about">
      <div className="container">
        <div className="row my-5 p-3">
          <div className=" col-sm-12 col-md-6 ">
            <Fade left>
              <img className="img-fluid" src={img} alt="" />
            </Fade>
          </div>

          <Fade right>
            <div className="col-sm-12 col-md-6">
              <div className="about-details">
                <h2 className="mt-5"> About Me! </h2>
                <p className="my-4">
                  Hi This is Saimum. <br />
                  I do not compromise with perfection! <br />
                  I’m a friendly, professional Creative Design Director & Ui Ux
                  Designer Located In Bangladesh. I Specialize in Branding and
                  Visual Identities as well as Creative Graphic Design and much
                  more. I'm very punctual and have a quick turnaround time.
                  <br />
                  Seeking full time opportunity. Having 05 Years+ experience in
                  Graphic Design. I am happy if you ask any question to me.
                </p>
                <Button variant="secondary"  onClick={connectWhatsApp}>Contact</Button>
                <Button variant="outline-dark">Hire me</Button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default About;
