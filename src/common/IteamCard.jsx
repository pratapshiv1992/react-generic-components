import React from 'react';
import {ChipButton} from './Button';
import  AddIcon from '../assets/AddIcon';

const ItemCard = ({src, alt, height, width, description, title, link, linkText, price}) => {
    return (
        <div style={{display: "inline-block", padding: "16px" }} >
            <div><img src={src} alt={alt} height={height} width={width}/></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div><a href={link}>{linkText}</a></div>
            <div>
                <span>{price}</span>
                <ChipButton
                    label="Add"
                    disabled={false}
                    icon={<AddIcon />}
                />
            </div>
        </div>
    );
}

export default ItemCard;
