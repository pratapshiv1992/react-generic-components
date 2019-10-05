import React from 'react';
import ItemCard from './common/IteamCard';
import {callApi} from './utils';
import './styles/index.css';


const Cart = (props) => {
    const ItemCardData = callApi();
    
    return (
        <div  className="cards" style={{maxWidth: "780px",paddingTop:123,paddingBottom:123,margin:"auto"}}>
            {ItemCardData.map((data,key)=><ItemCard key={`${key}`} {...data} />)}
        </div>
    );

}

export default Cart;
