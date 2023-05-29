import React from "react";
import { NavLink } from "react-router-dom";

function BookCard({
    book:{id, title, author, image}, 
    onDeleteBook}){
  
   function handleDelete(){
    fetch(`http://localhost:9292/books/${id}`,{
        method: "DELETE",
    })
    .then(onDeleteBook(id))
    alert('Are you sure you want to delete the book?')
   } 
  
    return(
        
        <div className="book-card">
            
            <img src={image} alt='book-cover'/>
            <hr></hr>
        <div className="book-info">
            <h4>"{title}"</h4>
            <p>By: <b>{author}</b></p>
            <div className="actions">
        <NavLink to={`/books/${id}`}><p>See details</p></NavLink> 
        <button className='trash-bttn'><span role="img" aria-label="delete" onClick={handleDelete}>🗑</span></button>
          </div>
         </div>
        </div>
    )
}
export default BookCard