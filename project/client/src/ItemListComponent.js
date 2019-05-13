import React from 'react';
import './css/itemListComponent.css';

/* Function returning component with bikes available in the database */
function ItemListComponent({title, price}) {
    return (
        <div className="itemListComponent">
            <h1 className="title"><a href="http://google.com">{title}</a></h1>
            <h4>{price} kr/day</h4>
        </div>
    );
}

export default ItemListComponent;