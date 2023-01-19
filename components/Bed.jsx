import React from "react";

function Bed({ className }) {
  return (
    <div className={`bed ${className}`}>
      <div className="pillow1"></div>
      <div className="pillow2"></div>
      <div className="comforter"></div>
      <div className="bedsideTable1"></div>
      <div className="bedsideTable2"></div>
    </div>
  );
}

export default Bed;
