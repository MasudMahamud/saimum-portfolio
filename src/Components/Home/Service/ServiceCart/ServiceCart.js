import React from "react";
import "./ServiceCard.css";
import Zoom from "react-reveal/Zoom";

const ServiceCart = ({ data }) => {
  return (
    <div className="col-md-4 service">
      <Zoom bottom>
        <div className="card mb-3">
          <div className="card-body">
            <h4 className="card-title text-center">{data.title}</h4>
            <img className="img-fluid" src={data.icon} alt="" />
            <p className="text">{data.describe}</p>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default ServiceCart;
