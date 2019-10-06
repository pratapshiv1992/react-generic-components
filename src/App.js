import React, {useReducer} from "react";
import ItemCard from "./common/IteamCard";
import { callApi, cartReducer, getTotalCountOfItems} from "./utils";
import "./styles/index.css";

const Cart = props =>  {
  const [state, dispatch] = useReducer(cartReducer, {});
  const ItemCardData = callApi();
  console.log("Cart component state: ", state);

  return (
    <div
      className="cards"
      style={{
        maxWidth: "780px",
        paddingTop: 123,
        paddingBottom: 123,
        margin: "auto"
      }}
    >
    <h1>Total item in cart : {getTotalCountOfItems(state)}</h1>
      {ItemCardData.map((data, key) => (
        <ItemCard key={`${key}`} {...data} value={state[data.id]} dispatch={dispatch} width={240} link="/" linkText="Link" alt="" />
      ))}
    </div>
  );
};

export default Cart;
