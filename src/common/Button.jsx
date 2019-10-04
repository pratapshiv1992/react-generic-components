import React from 'react';
import '../styles/index.css';

export const ChipButton = ({name, value, label, icon, onClick, children, disabled, onMouseOver, onMouseOut}) => {
    return (
        <button
            value={value} name={name} className="chip-button" disabled={disabled}
            onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <span className="chip-button-label">{label}</span>
            {children}
            {icon}
        </button>
    );
}