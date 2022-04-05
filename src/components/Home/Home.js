import React from 'react';
import geepas from "../../geepas-burner.jpg";
import useReviews from '../../hooks/useReview';
import ReviewCompo from '../ReviewCompo/ReviewCompo';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    const newReviews = reviews.slice(3,6);
    return (
        <div>
            <section id='main-section'>                    
                <div className='main-para'>
                    <h1>Enjoy fast,<br></br>precise cooking</h1>
                    <p>The GEEPAS cooker is a programmable stove that has a timer function which allows you to set up the cooker up to 2 hours. It will automatically turn off when the timer is off. Plus, this cooker allows maximum control over the heat and texture of food and heats up instantly to the required temperature</p>
                </div>
                <div>
                    <img src={geepas} alt='burner'></img>
                </div>
            </section>
            <hr></hr>
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