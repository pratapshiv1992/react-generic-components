import React from 'react';
import DeleteIcon from '../assets/DeleteIcon';
import '../styles/index.css';

export const ChipButton = ({name, value, label, icon, onClick, children, disabled, onMouseOver, onMouseOut}) => {
    return (
        <button style={{width:66, height:26, float:"right" }}
            value={value} name={name} className="chip-button" disabled={disabled}
            onClick={onClick} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <span className="chip-button-label">{label}</span>
            {children}
            {icon}
        </button>
    );
}

export const Stepper = ({name, value=1, label, icon, onClick, children, disabled, onMouseOver, onMouseOut}) => {
    return (
        <span style={{float: "right"}} >
            <button className="stepper-button">
                <span className="stepper-button-label">
                    {value ===1 && <DeleteIcon />}
                    {value > 1 && <span>-</span> }
                </span>
            </button>
            <span className="span" >{value}</span>
            <button className="stepper-button">
                <span className="stepper-button-label"> + </span>
            </button>
        </span>
    );
}