import React from "react";

import "./ListDashboard.scss";

const ListDashboard = ({element}) => {
  return (
    <>
      <main ref={element}>
        <div>Most in Demand</div>
      </main>
      <div className="wrapper">
        <div className="box row1">
            <div className="text-item">
                <span>T-Shirt</span>
            </div>
        </div>
        <div className="box row2">
            <div className="text-item">
                <span>Jeans</span>
            </div>
        </div>
        <div className="box box1">
            <div className="text-item">
                <span>Backpack</span>
            </div>
        </div>
        <div className="box box2">
            <div className="text-item">
                <span>Charm Necklace</span>
            </div>
        </div>
       
      </div>
    </>
  );
};

export default ListDashboard;
