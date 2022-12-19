import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';

const Ratings = ({ratings, numOfReview, variant, averageRate}) => {
    const rating = [1,2,3,4,5].map((star) => star <= ratings ? 
        <FontAwesomeIcon icon={solid('star')} key={star} /> : 
        (star - ratings < 1 ? 
            <FontAwesomeIcon icon={solid('star-half-stroke')} key={star} /> : 
            <FontAwesomeIcon icon={regular('star')} key={star} /> )
        );
    return ( <div className="ratings">
        {rating} <span className={`text-${variant}`}>{numOfReview && ` - ${numOfReview} reviews`} {numOfReview == null && ` - ${ratings}`}</span>
    </div> );
}
 
export default Ratings;