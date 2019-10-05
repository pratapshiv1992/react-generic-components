import React from 'react';
import ItemCard from './common/IteamCard';
import {callApi} from './utils';
import './styles/index.css';


const Cart = (props) => {
    const ItemCardData = callApi();
    return (
        <div  style={{maxWidth: "780px",paddingTop:123,paddingBottom:123,margin:"auto"}}>{
            ItemCardData.map((itemGroup,key) => {
                const items = itemGroup.map((data, key) => <ItemCard key={`${key}`} {...data} />)
                return <div key={`${key}`} >{items}</div>
            })}
        </div>
    );
}

export default Cart;
