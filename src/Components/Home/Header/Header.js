import React from "react";
import "./Header.css";
import img from "../../../Image/main-image.jpg";
import { Button } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <img className="img-fluid text-center" src={img} alt="" style={{width:'70%'}}/>
          </div>
          <div className="col-md-6" style={{ margin: "auto" }}>
            <div className="header-text ">
              <h1 className="header-title mt-3">
                I'm <strong className="name">Saimum </strong> Islam
              </h1>
              <p className="header-descriptions my-4">
                {" "}
                There are many variations of passages of Lorem Ipsum available{" "}
                <br />
                but the majority have suffered alteration in some form{" "}
              </p>
              <Button variant="secondary">See More</Button>
              <Button variant="outline-dark">Hire Me</Button>
            </div>
            <div className="header-text icon mt-5">
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <WhatsAppIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
