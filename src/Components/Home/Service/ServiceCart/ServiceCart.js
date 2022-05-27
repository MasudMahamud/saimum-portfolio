import React from "react";
import "./ServiceCard.css";

const ServiceCart = ({ data }) => {
  return (
    <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body">
            <h4 className="card-title text-center">{data.title}</h4>
            <img className="img-fluid" src={data.icon} alt=""/>
            <p className="card-text">{data.describe}</p>
          </div>
        </div>
    </div>
  );
};

export default ServiceCart;
