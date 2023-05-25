import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";

function BookDetail(){
    const [bookInfo, setBookInfo] = useState(null)
    const {id} = useParams

    useEffect(()=>{
        fetch(`http://localhost:9292/book/${id}`)
        .then(r=>r.json())
        .then(dataBook=>setBookInfo(dataBook))
    },[id])

    const {title, author, description, genre, reviews} = bookInfo
    return (
    <section>
    <div>
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{description}</h1>
        <h1>{genre}</h1>
        {reviews.map((review)=>{
           <Review review={review} />
        })}
        
    </div>
    </section>
    )
}

export default BookDetail