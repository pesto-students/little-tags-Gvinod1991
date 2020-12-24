import React, { useState } from "react";
import './counter.scss';

function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(1);
    const [disabled, setDisabled] = useState('flex-child');
    const reduceCount = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log(count)
            setDisabled('flex-child')
            if (count - 1 === 0) {
                console.log('0', count)
                setDisabled('flex-child disabled')
            }
        }
    }
    return (
        <>
            <div className="flex-container">
                <div onClick={reduceCount} className={disabled}> - </div>
                <div className="flex-child">{count}</div>
                <div className="flex-child" onClick={() => { setCount(count + 1); setDisabled('flex-child') }}> + </div>
            </div>
        </>
    );
}

export default Counter;
