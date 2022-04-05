import React from 'react';
import useReviews from '../../hooks/useReview';
import ReviewCompo from '../ReviewCompo/ReviewCompo';

const Review = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2>Review of our Customers</h2>
            {
                reviews.map(review => <ReviewCompo
                    review = {review}
                ></ReviewCompo>)
            }
        </div>
    );
};

export default Review;