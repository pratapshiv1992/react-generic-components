import React from 'react';
import ItemCard from './common/IteamCard';
import Aenean_Sm from './assets/Aenean_Sm.png';

const ItemCardData = [{
    src:Aenean_Sm,
    alt:"",
    width:240,
    description:" Duis rhoncus dui venenatis consequat porttitor",
    title:"Aenean Sed Nibh A Magna Posuere",
    link:"/",
    linkText:"Link",
    price:"$4.99"
},
    {
        src:Aenean_Sm,
        alt:"",
        width:240,
        description:" Duis rhoncus dui venenatis consequat porttitor",
        title:"Aenean Sed Nibh A Magna Posuere",
        link:"/",
        linkText:"Link",
        price:"$4.99"
    },

    {
        src:Aenean_Sm,
        alt:"",
        width:240,
        description:" Duis rhoncus dui venenatis consequat porttitor",
        title:"Aenean Sed Nibh A Magna Posuere",
        link:"/",
        linkText:"Link",
        price:"$4.99"
    },
    {
        src:Aenean_Sm,
        alt:"",
        width:240,
        description:" Duis rhoncus dui venenatis consequat porttitor",
        title:"Aenean Sed Nibh A Magna Posuere",
        link:"/",
        linkText:"Link",
        price:"$4.99"
    },
];

const Cart = (props) => {
    return (
        <div>
            <ChipButton label="Add" disabled={false} ><AddIcon /></ChipButton>
        </div>
    );
}

export default App;
