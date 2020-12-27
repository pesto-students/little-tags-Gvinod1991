import React from "react";
import AddressCard from "../../components/addressCard/addressCard";
import "./deliver-to.scss";
const DeliverTo = () => {

  const list = 
  [
    {
      name: "Emerson",
      address : "9522 Libero. St.",
			city : "Lozzo Atestino",
			postal :"27476"
    },
    {
      name: "Keane",
      address : "8857 Tortor Avenue",
			city : "Cantley",
			postal :"131189"
    }
  ]
  return (
    <div className="centerCard">
      <span><strong>Deliver To</strong></span>
      {
        list.map((item,index) => (
          <AddressCard details = {item} isDummy= {false} />
        
          )  )
      }
    </div>
  );
};

export default DeliverTo;
