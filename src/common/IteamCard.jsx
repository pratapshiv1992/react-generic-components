import React from 'react';
import {ChipButton} from './Button';
import  AddIcon from '../assets/AddIcon';

const ItemCard = ({src, alt, height, width, description, title, link, linkText, price}) => {
    return (
        <div className="item-card" style={{maxWidth: "240px",margin:" 10px", display: "inline-block"}}>
            <div><img src={src} alt={alt} height={height} width={width}/></div>
            <div style={{padding:10}}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div><a className="item-card-link" href={link}>{linkText}</a></div>
            <div>
                <span style={{fontWeight:"bolder"}}>{price}</span>
                <ChipButton
                    label="Add"
                    disabled={false}
                    icon={<AddIcon />}
                />
            </div>
            </div>
        </div>
    );
}

export default ItemCard;
