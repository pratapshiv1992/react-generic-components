import React from 'react';
import ItemCard from './common/IteamCard';
import Aenean_Sm from './assets/Aenean_Sm.png';
import './styles/index.css';

const ItemCardData = [
    [{
        src: Aenean_Sm,
        alt: "",
        width: 240,
        description: " Duis rhoncus dui venenatis consequat porttitor",
        title: "Aenean Sed Nibh A Magna Posuere",
        link: "/",
        linkText: "Link",
        price: "$4.99"
    }, {
        src: Aenean_Sm,
        alt: "",
        width: 240,
        description: " Duis rhoncus dui venenatis consequat porttitor",
        title: "Aenean Sed Nibh A Magna Posuere",
        link: "/",
        linkText: "Link",
        price: "$4.99"
    }, {
        src: Aenean_Sm,
        alt: "",
        width: 240,
        description: " Duis rhoncus dui venenatis consequat porttitor",
        title: "Aenean Sed Nibh A Magna Posuere",
        link: "/",
        linkText: "Link",
        price: "$4.99"
    }],
    [{
        src: Aenean_Sm,
        alt: "",
        width: 240,
        description: " Duis rhoncus dui venenatis consequat porttitor",
        title: "Aenean Sed Nibh A Magna Posuere",
        link: "/",
        linkText: "Link",
        price: "$4.99"
    }, {
        src: Aenean_Sm,
        alt: "",
        width: 240,
        description: " Duis rhoncus dui venenatis consequat porttitor",
        title: "Aenean Sed Nibh A Magna Posuere",
        link: "/",
        linkText: "Link",
        price: "$4.99"
    }]
];

const Cart = (props) => {
    return (
        <div  style={{maxWidth: "780px",paddingTop:123,paddingBottom:123,margin:"auto"}}>{
            ItemCardData.map((itemGroup) => {
                const items = itemGroup.map((data, key) => <ItemCard key={`${key}`} {...data} />)
                return <div>{items}</div>
            })}
        </div>
    );
}

export default Cart;
