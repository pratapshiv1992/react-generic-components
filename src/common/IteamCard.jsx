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
      <div className="container">
        <img
          className="container-img"
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      </div>
      <div style={{ padding: 10 }}>
        <label className="heading">{title}</label>
        <p className="desc">{description}</p>
        <div>
          <a className="item-card-link" href={link}>
            {linkText} <span>></span>
          </a>
          {!isStepper && (
            <span style={{ fontWeight: "bolder", paddingLeft: "8px" }}>
              {value}
            </span>
          )}
        </div>
        <div className="padleft-10">
          <span className="bolder">$</span>
          <label className="heading">{price}</label>
          {isStepper ? (
            <Stepper value={value} name={id} id={id} dispatch={dispatch} />
          ) : (
            <ChipButton
              value={value}
              name={id}
              id={id}
              label="Add"
              disabled={false}
              dispatch={dispatch}
              icon={<AddIcon />}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
