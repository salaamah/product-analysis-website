import React from 'react';

const ReviewCompo = (props) => {
    //console.log(props);
    const {name, body} = props.review;
    //console.log(name);
    return (
        <div>
            <h4>Reviewer: {name}</h4>
            <p>{body}</p>
        </div>
    );
};

export default ReviewCompo;