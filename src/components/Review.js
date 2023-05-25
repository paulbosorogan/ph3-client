import React from "react";

function Review({review}){
    return(
        <div>
            <h1>{review.user}</h1>
            <p>Score:{review.score}</p>
            <p>{review.comment}</p>

        </div>
    )
}

export default Review