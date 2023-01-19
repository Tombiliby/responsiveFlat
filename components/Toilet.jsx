import React from "react";

function Toilet({ className }) {
  return (
    <div className={`toilet ${className}`}>
      <div className="sitting"></div>
      <div className="back">
        <div className="button"></div>
      </div>
    </div>
  );
}

export default Toilet;
