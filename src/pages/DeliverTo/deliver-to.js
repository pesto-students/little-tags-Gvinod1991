import React from "react";
import "./deliver-to.scss";
const DeliverTo = () => {
  return (
    <div className="centerCard">
      <span>Deliver To</span>
        <div className="card">
          
            <div className="flex-card">
            <input type="radio" className="form__radio-input" name="address" />
                <article className="address">
                <strong>Name</strong>
                <br />
                <span>Address Test
                        PinCode
                </span>
                </article>
            </div>
        </div>

        <div className="card">
          
            <div className="flex-card">
            <input type="radio" className="form__radio-input" name="address" />
                <article className="address">
                <strong>Name2</strong>
                <br />
                <span>Address Test
                        PinCode
                </span>
                </article>
            </div>
        </div>
    </div>
  );
};

export default DeliverTo;
