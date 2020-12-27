import React from "react";
import Card from "../card/card";

import "./ListDashboard.scss";

const ListDashboard = () => {
  // style={{backgroundImage: `url(${pencil})`}}
  const imagesDummyy = [
    {
      url: '/purple-jacket.png',
      title: 'Jacket1'
    },
    {
      url: '/purple-jacket.png',
      title: 'Jacket2'
    },
    {
      url: '/purple-jacket.png',
      title: 'Jacket3'
    },
    {
      url: '/purple-jacket.png',
      title: 'Jacket9'
    }
  ];
  return (
    <>
      <main>
        <div className="titleDemand"><strong>Most in Demand</strong></div>
      </main>
      <div className="wrapper">
        {
          imagesDummyy.map(image => (
            <Card pathname={image.url} title={image.title} />
          ))
        }
      </div>
    </>
  );
};

export default ListDashboard;
