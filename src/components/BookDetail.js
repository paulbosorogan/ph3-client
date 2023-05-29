import React, {useState} from "react";
import { NavLink, useParams } from "react-router-dom";
import Review from "./Review";
import EditReview from "./EditReview"



function BookDetail({books, onUpdateRev}){
  const [isEdit, setIsEdit] = useState(true)
  const parameter = useParams()
  const foundBook = books.find((individualBook) => individualBook.id === parseInt(parameter.id))

  function onEdit(){
    setIsEdit(isEdit=> !isEdit)
  }
 
return (
    <div className="book-detail-card">
    <NavLink to={`/books`}><p>Back to Books</p></NavLink> 
        <img src={foundBook.image} alt='cover-book-detail'/>
        <hr></hr>
        <h3><b>"{foundBook.title}"</b></h3>
        <div className="detail-info">
        <p><b>Author:</b> {foundBook.author}</p>
        </div>
        <br></br>
       {foundBook.reviews.map((review)=>{
        return (
          <div key={review.id}>
            {isEdit? <Review review={review} onEdit={onEdit}/>
             : <EditReview review={review} onUpdateRev={onUpdateRev} onEdit={onEdit}/>}
          </div>
       )})}
    </div>
  )
}

export default BookDetail