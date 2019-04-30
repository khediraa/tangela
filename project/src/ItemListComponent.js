import React from 'react';

function ItemListComponent({title, price}) {
    return (
        <div>
            <h2><a href=""></a>{title}</h2>
            <h4>{price} kr</h4>
        </div>
    );
}

export default ItemListComponent;