import React from "react";

export function Armchair({ className }) {
  return (
    <div className={`armchair ${className}`}>
      <div className="back"></div>
      <div className="sittingZone">
        <div className="armrest left"></div>
        <div className="sitting"></div>
        <div className="armrest right"></div>
      </div>
    </div>
  );
}

function Lounge({ className }) {
  return (
    <div className={`lounge ${className}`}>
      <div className="couch left">
        <div className="back"></div>
        <div className="sittingZone">
          <div className="armrest left"></div>
          <div className="sitting"></div>
          <div className="sitting"></div>
          <div className="sitting"></div>
          <div className="armrest right"></div>
        </div>
      </div>
      <div className="table"></div>
      <Armchair className="armchair-1" />
      <Armchair className="armchair-2 right" />
    </div>
  );
}

export default Lounge;
