import React from 'react';
import './addAddress.scss';

const AddAddress = () => {
    return (
        <>
            <div className="deliver"> Deliver To</div>
            <div className="columns">
                <div className="row">
                    <div>
                        <label>Name</label>
                    </div>
                    <input type="text" className="input-class" />
                </div>

                <div className="row">
                    <div>
                        <label>Last Name</label>
                    </div>
                    <input type="text" className="input-class" />
                </div>

                <div className="row">
                    <div>
                        <label>Email ID</label>
                    </div>
                    <input type="text" className="input-class" />
                </div>
                <div className="row">
                    <div>
                        <label>Phone Number</label>
                    </div>
                    <input type="number" className="input-class" />
                </div>

                <div className="row">
                    <div>
                        <label>Address line 1</label>
                    </div>
                    <input type="text" className="input-class" />
                </div>
                <div className="row">
                    <div>
                        <label>Address line 2</label>
                    </div>
                    <input type="text" className="input-class" />
                </div>
                <div className="row">
                    <div>
                        <label>State</label>
                    </div>
                    {/* <input type="text" className="input-class" /> */}
                    <div className="select">
                        <select name="slct" className="slct">
                            <option selected disabled>Choose an option</option>
                            <option value="1">Maharashtra</option>
                            <option value="2">West Bengal</option>
                            <option value="3">Uttar Pradesh</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <label>Pin Code</label>
                    </div>
                    <input type="number" className="input-class" />
                </div>
            </div>
        </>
    )
}

export default AddAddress;
