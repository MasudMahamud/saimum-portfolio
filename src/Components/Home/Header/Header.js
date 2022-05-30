import React from "react";
import "./Header.css";
import img from "../../../Image/main-image.jpg";
import beehance from "../../../Image/social/Beehance.png";
import dribble from "../../../Image/social/Dribble.png";
import { Button } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Fade from "react-reveal/Fade";

const Header = () => {
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
    window.open("https://wa.me/+88001636623121", "_blank");
  };
  const beehanceHandler = () => {
    window.open("https://www.behance.net/saimumbiz", "_blank");
  };
  const dribbleHandler = () => {
    window.open("https://www.dribbble.com/saimumbiz", "_blank");
  };

  return (
    <section className="header" id="home">
      <div class="container head">
        <div class="row head">
          <div class="col-sm-12 col-md-6 col-lg-6 ">
            <Fade left>
              <img className="img-fluid" src={img} alt="" style={{textAlign:'center'}}/>
            </Fade>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 right-side">
            <Fade right>
              <div className="header-descriptions">
                <h1>
                  {" "}
                  I'm <strong className="name">Saimum</strong> Islam{" "}
                </h1>
                <p>
                  {" "}
                  This is Saimum Islam Creative Design Director & Ui Ux Designer
                  Located In Bangladesh. Looking for work around the globe.{" "}
                  <br />I am happy if you ask any question to me.{" "}
                </p>
                <Button variant="secondary">See more</Button>
                <Button variant="outline-dark">Hire me</Button>
                <div className="header-icons mt-5">
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
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
