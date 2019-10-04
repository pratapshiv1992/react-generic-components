import React from 'react';
import '../styles/index.css';

export const ChipButton = ({name, label, onClick, children, disabled, onMouseOver, onMouseOut}) => {
    return (
        <button style={{width:66, height:26 }}
            name={name} className="chip-button" disabled={disabled}
            onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <span className="chip-button-label">{label}</span>{children}
        </button>
    );
}