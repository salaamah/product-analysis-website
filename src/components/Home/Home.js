import React from 'react';
import geepas from "../../geepas-burner.jpg";
import useReviews from '../../hooks/useReview';
import ReviewCompo from '../ReviewCompo/ReviewCompo';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const newReviews = reviews.slice(0,3);
    return (
        <div>
            <section id='main-section'>                    
                <div>
                    <h1>Induction Burner 2000W<br></br>Gic33013 Black/Red</h1>
                </div>
                <div>
                    <img src={geepas} alt='burner'></img>
                </div>
            </section>
            <section id ='review-section'>
                <h1>Customer Reviews({newReviews.length})</h1>
                {
                    newReviews.map(review => <ReviewCompo
                        review = {review}
                    ></ReviewCompo>)
                }
            </section>
        </div>
    );
};

export default Home;