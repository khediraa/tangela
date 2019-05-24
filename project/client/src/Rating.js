import React from 'react';
import './css/rating.css';

function Rating ({rating}) {
    const starsTotal = 5;
    let nbrOfStars = 0;
    for (let stars of rating) {
        nbrOfStars += stars;
    }
    const avgRating = rating.length === 0 ? 0: nbrOfStars/rating.length;
    const starPercentage = (avgRating/starsTotal)*100;
    const starPercentageRounded = `${Math.round((starPercentage/10)*10)}%`;
    return (
        <div className="stars">
           <div className="stars-outer">
               <div className="stars-inner" style={{width:starPercentageRounded}}></div>
           </div>
           <span>&nbsp;{rating.length} ratings</span>
        </div>
    );
}

export default Rating;