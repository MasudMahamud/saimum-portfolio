import React from "react";
import PortfolioCard from "./PortfolioCard/PortfolioCard";

const portfolioData = [
  {
    id: "1",
    title: "UI & UX DESIGN",
    icon: `https://i.ibb.co/ZSCpS1P/UI-Ux.png`,
  },
  {
    id: "2",
    title: "BRANDING DESIGN",
    icon: `https://i.ibb.co/J32yhXy/Branding.png`,
  },
  {
    id: "3",
    title: "FLYER & BROCHURE",
    icon: `https://i.ibb.co/TKjMvFP/Flyer.png`,
  },
  {
    id: "4",
    title: "SOCIAL MEDIA DESIGN",
    icon: `https://i.ibb.co/mqqssq5/Social-Media.png`,
  },
  {
    id: "5",
    title: "PACKAGE DESIGN",
    icon: `https://i.ibb.co/xYfyB9h/Pack.png`,
  },
  {
    id: "6",
    title: "T-SHIRT & MERCHANDISE",
    icon: `https://i.ibb.co/rx6Qzcj/T-shirt.png`,
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
