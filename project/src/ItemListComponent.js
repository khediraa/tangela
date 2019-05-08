import React from 'react';
import './css/itemListComponent.css';

/* Function returning component with bikes available in the database */
function ItemListComponent({title, price}) {
    return (
        <div className="itemListComponent">
            <h4 className="title"><a href="http://google.com">{title}</a></h4>
            <h6>{price} kr/day</h6>
        </div>
    );
}

export default ItemListComponent;