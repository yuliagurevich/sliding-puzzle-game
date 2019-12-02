import React from 'react';

const Button = (props) => {
    return (
        <button className="square" onClick={(i) => props.onClick(i)} >{props.buttonNumber}</button>
    );
}

export default Button;