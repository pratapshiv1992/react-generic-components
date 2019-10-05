import React from "react";
import DeleteIcon from "../assets/DeleteIcon";
import "../styles/index.css";

export const ChipButton = ({
  name,
  id,
  value,
  label,
  icon,
  onClick,
  children,
  disabled,
  onMouseOver,
  onMouseOut,
  dispatch
}) => {
  return (
    <button
      style={{ width: 66, height: 26, float: "right" }}
      value={value}
      name={name}
      className="chip-button"
      disabled={disabled}
      onClick={(e)=>dispatch({type:"increment",payload:{id}})}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <span className="chip-button-label">{label}</span>
      {children}
      {icon}
    </button>
  );
};

export const Stepper = ({
  name,
  value = 1,
  id,
  label,
  icon,
  onClick,
  children,
  disabled,
  onMouseOver,
  onMouseOut,
  dispatch
}) => {
  return (
    <span style={{ float: "right" }}>
      <button 
        className="stepper-button"
        onClick={(e)=>dispatch({type:"decrement",payload:{id}})} 
      >
        <span className="stepper-button-label">
          {value === 1 && <DeleteIcon />}
          {value > 1 && <span>-</span>}
        </span>
      </button>
      <span className="span">{value}</span>
      <button 
       className="stepper-button"
       onClick={(e)=>dispatch({type:"increment",payload:{id}})} 
      >
        <span className="stepper-button-label"> + </span>
      </button>
    </span>
  );
};
