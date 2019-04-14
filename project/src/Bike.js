import React, { Component } from 'react';

function Bike(props) {
    return (
        <article className="bicycle">
        <h2>title</h2>
        <p>city</p>
        <p>available from yyyy/mm/dd to yyyy/mm/dd</p>
        <p>price: XX kr / day</p>
        <button>Yes please!</button>
    </article>
    );
}

export default Bike;

