import React from 'react';
import './css/rating.css';

function Rating ({ratings}) {
    const starsTotal = 5;
    let nbrOfStars = 0;
    for (let stars of ratings) {
        nbrOfStars += stars;
    }
    const avgRating = ratings.length === 0 ? 0: nbrOfStars/ratings.length;
    const starPercentage = (avgRating/starsTotal)*100;
    const starPercentageRounded = `${Math.round((starPercentage/10)*10)}%`;
    return (
        <div className="stars">
           <div className="stars-outer">
               <div className="stars-inner" style={{width:starPercentageRounded}}></div>
           </div>
           <span>&nbsp;{ratings.length} ratings</span>
        </div>
    );
}

export default Rating;