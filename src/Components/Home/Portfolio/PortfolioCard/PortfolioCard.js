import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({ data }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3 portfolio-card" style={{ textAlign: "center" }}>
        <div className="card-body">
          <div className="portfolio-text">
            <h4 className="card-title">{data.title}</h4>
            <img className="img-fluid" src={data.icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
