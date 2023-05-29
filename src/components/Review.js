import React from "react";

function Review({review, onEdit}){
    return(
        <div key={review.id} className="detail-info">
          <p><b>Thoughts:</b> {review.comment}</p>
           <button onClick={onEdit} className="edit-bttn"><span role="img" aria-label="edit">✏️</span></button>
          </div>
    )
}

export default Review