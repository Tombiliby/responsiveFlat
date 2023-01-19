import React from "react";

function Chair() {
  return (
    <div className="chair">
      <div className="back"></div>
      <div className="sitting"></div>
    </div>
  );
}

function DiningTable({ className }) {
  return (
    <div className={`diningTable ${className}`}>
      <div className="sideChairs left">
        <Chair />
        <Chair />
        <Chair />
        <Chair />
      </div>
      <div className="table">
        <div className="inner"></div>
      </div>
      <div className="sideChairs right">
        <Chair />
        <Chair />
        <Chair />
        <Chair />
      </div>
    </div>
  );
}

export default DiningTable;
