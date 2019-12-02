import React from 'react';

import Button from './Button';

const Box = (props) => {
    function renderButton(i) {
        return <Button buttonNumber={props.buttons[i]} onClick={() => props.onClick(i)} />
    }
    
    return (
        <div>
            <div className="board-row">
                {renderButton(0)}
                {renderButton(1)}
                {renderButton(2)}
                {renderButton(3)}
            </div>
            <div className="board-row">
                {renderButton(4)}
                {renderButton(5)}
                {renderButton(6)}
                {renderButton(7)}
            </div>
            <div className="board-row">
                {renderButton(8)}
                {renderButton(9)}
                {renderButton(10)}
                {renderButton(11)}
            </div>
            <div className="board-row">
                {renderButton(12)}
                {renderButton(13)}
                {renderButton(14)}
                {renderButton(15)}
            </div>
        </div>
    );
}

export default Box;