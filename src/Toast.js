import React, { useState } from 'react';

// Different types of toast color  based on the a type props


function Toast(props) {
    const COLOR_TYPE_MAP = {
        'success': 'green',
        'danger': 'red'
    }

    const {text, type }  = props;
    const color = COLOR_TYPE_MAP[type];
    const [showClearButton, updateClearButton ] = useState(true);
    const [ count, updateCount] = useState(0);

    console.log("Colors", color);

    const handleOnClick = ()=> {

        // Async functions
        updateClearButton(() => {
            return false
        });
        console.log("Value of showbutton", showClearButton);
    }
    
     console.log("Value of showbutton in render", showClearButton);
    return (
        <div>
            <div style={{color: `${color}`}}>{text}</div>
            {showClearButton ? <button onClick={handleOnClick}>Clear</button>: null }
        </div>
    );
}

export default Toast;