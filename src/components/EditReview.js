import React, {useState} from "react";

function EditReview({review, onUpdateRev, onEdit}){
    const [comment, setComment] = useState('')

    function handleEdit(e){
        e.preventDefault()

        fetch(`http://localhost:9292/reviews/${review.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                comment: comment
            })
        })
        .then(r=> r.json())
        .then(updatedRev => onUpdateRev(updatedRev))
        .then(onEdit())
    }

    return (
        <form onSubmit={handleEdit}>
            <label htmlFor="text">Thoughts:</label>
            <input value={comment} onChange={e=>setComment(e.target.value)} type="text"/>
            <input type='submit' value='Submit'/>
        </form>
    )
}

export default EditReview