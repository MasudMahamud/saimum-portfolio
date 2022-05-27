import React from "react";
import "./Service.css";
import ServiceCart from "./ServiceCart/ServiceCart";
const ServiceData = [
  {
    id: "1",
    title: "UI UX DESIGN",
    icon: "https://i.ibb.co/j43Styz/4115337-removebg-preview.png",
    describe: `Photo editing is the act of altering an
    image. But that’s oversimplifying a
    subject that can be complex and
    employs different methods and tools.`,
  },
  {
    id: "2",
    title: "BRANDING DESIGN",
    icon: "https://i.ibb.co/j43Styz/4115337-removebg-preview.png",
    describe: `Photo editing is the act of altering an
    image. But that’s oversimplifying a
    subject that can be complex and
    employs different methods and tools`,
  },
  {
    id: "3",
    title: "FLYER & BROCHURE",
    icon: "https://i.ibb.co/j43Styz/4115337-removebg-preview.png",
    describe: `A Flyer, brochure or media kit is a digital
    document that visually outlines key
    information about your business or brand
    that would be relevant to a potential
    client.`,
  },
  {
    id: "4",
    title: "SOCIAL MEDIA DESIGN",
    icon: "https://i.ibb.co/j43Styz/4115337-removebg-preview.png",
    describe: `A website template is a predesigned
    resource that shows the structure for
    the comprehensive layout and
    display features of any website. A
    good looking web templates grow
    your sales and business`,
  },
  {
    id: "5",
    title: "PACKAGE DESIGN",
    icon: "https://i.ibb.co/j43Styz/4115337-removebg-preview.png",
    describe: `A website template is a predesigned
    resource that shows the structure for the
    comprehensive layout and display features
    of any website. A good looking web
    templates grow your sales and business`,
  },
  {
    id: "6",
    title: "T-SHIRT & MERCHANDISE",
    icon: "https://i.ibb.co/j43Styz/4115337-removebg-preview.png",
    describe: `scratch, upload your own artwork or
    ask an expert for design help. It's all
    possible in our state-of-the-art
    design lab.`,
  },
];

const Service = () => {
  return (
    <section className="service-section" id="service">
      <div className="container">
        <div className="about-title-container text-center">
          <p>MY POPULAR SERVICES</p>
          <h1> My Offered Service</h1>
          <h4 className="mb-4">Build Your Brand With Me !!</h4>
        </div>

        <div className="row py-3">
          {ServiceData.map((data) => (
            <ServiceCart data={data} key={data.id}></ServiceCart>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
