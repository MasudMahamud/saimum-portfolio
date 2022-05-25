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
    <section className=" header">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 .col-lg-6 ">
            <img src={img} alt="" />
          </div>

          <div class="col-sm-12 col-md-6 .col-lg-6 right-side">
            <div className="header-descriptions">
              <h1 className="mt-3"> I'm Saimum Islam </h1>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
              <Button variant="secondary">See more</Button>
              <Button variant="outline-dark">Hire me</Button>
              <div className="header-icons my-4">
                <FacebookIcon className="mr-3" />
                <InstagramIcon className="mr-3" />
                <TwitterIcon className="mr-3" />
                <LinkedInIcon className="mr-3" />
                <WhatsAppIcon className="mr-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
