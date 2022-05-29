import React from "react";
import "./Feedback.css";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Feedback = () => {
  return (
    <section className="feedback-container my-5">
      <h2 className="text-center pt-5"> Client’s Feedback About Me? </h2>
      <p className="text-center my-4">
        We could say that graphic designers are artists applying their talents
        mostly not in pure art but communicating and purposeful art.
      </p>
      <div className=" feedback-bg">
        <div className="container">
          <div className="row ">
            <FeedbackCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
