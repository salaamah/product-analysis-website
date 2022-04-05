import React from 'react';
import useReviews from '../../hooks/useReview';
import ReviewCompo from '../ReviewCompo/ReviewCompo';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>This is Review</h2>
            {
                reviews.map(review => <ReviewCompo
                    review = {review}
                ></ReviewCompo>)
            }
        </div>
    );
};

export default Review;