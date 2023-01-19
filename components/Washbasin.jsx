import React from "react";

function Washbasin({ className }) {
  return (
    <div className={`washbasin ${className}`}>
      <div className="basin">
        <div className="inner"></div>
      </div>
      <div className="tap"></div>
    </div>
  );
}

export default Washbasin;
