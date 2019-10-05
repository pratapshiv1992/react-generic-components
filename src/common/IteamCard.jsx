import React from "react";
import { ChipButton, Stepper } from "./Button";
import AddIcon from "../assets/AddIcon";

const ItemCard = ({
  id,
  src,
  alt,
  height,
  width,
  description,
  title,
  link,
  linkText,
  price,
  icon,
  isStepper,
  dispatch,
  value
}) => {
  return (
    <div
      className="item-card"
      style={{ maxWidth: "240px", margin: " 10px", display: "inline-block" }}
    >
      <div>
        <img src={src} alt={alt} height={height} width={width} />
      </div>
      <div style={{ padding: 10 }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>
          <a className="item-card-link" href={link}>
            {linkText} <span>></span>
          </a>
          {!isStepper && <span style={{ fontWeight: "bolder", paddingLeft:"8px" }}>{value}</span>}
        </div>
        <div>
          <span style={{ fontWeight: "bolder" }}>{price}</span>
          {isStepper ? (
            <Stepper value={value} name={id} id={id} dispatch={dispatch} />
          ) : (
            <ChipButton value={value} name={id} id={id} label="Add" disabled={false} dispatch={dispatch} icon={<AddIcon />} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
