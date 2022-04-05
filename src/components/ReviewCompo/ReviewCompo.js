import React from 'react';

const ReviewCompo = (props) => {
    //console.log(props);
    const {name, body, rating} = props.review;
    //console.log(name);
    return (
        <div>
            <h4>Reviewer: {name}</h4>
            <p>{body}</p>
            <p>Rating: {rating}</p>
        </div>
    );
};

export default ReviewCompo;