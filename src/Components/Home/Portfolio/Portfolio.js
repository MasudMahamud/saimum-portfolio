import React from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";

const portfolioData = [
  {
    id: "1",
    title: "UI & UX DESIGN",
    icon: `https://i.ibb.co/j43Styz/4115337-removebg-preview.png`,
  },
  {
    id: "2",
    title: "BRANDING DESIGN",
    icon: `https://i.ibb.co/j43Styz/4115337-removebg-preview.png`,
  },
  {
    id: "3",
    title: "FLYER & BROCHURE",
    icon: `https://i.ibb.co/j43Styz/4115337-removebg-preview.png`,
  },
  {
    id: "4",
    title: "SOCIAL MEDIA DESIGN",
    icon: `https://i.ibb.co/j43Styz/4115337-removebg-preview.png`,
  },
  {
    id: "5",
    title: "PACKAGE DESIGN",
    icon: `https://i.ibb.co/j43Styz/4115337-removebg-preview.png`,
  },
  {
    id: "6",
    title: "T-SHIRT & MERCHANDISE",
    icon: `https://i.ibb.co/j43Styz/4115337-removebg-preview.png`,
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <div className="about-title-container text-center">
          <p>PORTFOLIOS</p>
          <h2 className="mb-4"> Complete Work Here</h2>
        </div>
        <div className="row">
          {portfolioData.map((data) => (
            <PortfolioCard data={data} key={data.id}></PortfolioCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
