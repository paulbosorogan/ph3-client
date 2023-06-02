import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewBook({addBook}){
    const [newTitle, setNewTitle] = useState("")
    const [newAuthor, setNewAuthor] = useState("")
    const [newCover, setNewCover] = useState("")
    const navigate = useNavigate();

    function handleSubmitNewBook(e){
        e.preventDefault()

        const bookData = {
            title: newTitle,
            author: newAuthor,
            image: newCover
        }
        
        fetch(`http://localhost:9292/books`, {
            method: 'POST', 
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(bookData)
        })
        .then(r=>r.json())
        .then(newBook => addBook(newBook))
        .then(()=> navigate('/books'))
    }
    return(
        <div className="new-book-container">
        <h1>What book do you wanna read next?</h1>
        <form className="new-book-form" onSubmit={handleSubmitNewBook}>
            <label className="new-book" htmlFor="text">Book title:</label>
            <input id="title" type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
            <label className="new-book" htmlFor="text">Book author:</label>
            <input id="author" type="text" value={newAuthor} onChange={(e)=> setNewAuthor(e.target.value)}/>
            <label className="new-book" htmlFor="text">Book cover:</label>
            <input id="image_url" type="text" value={newCover} onChange={(e)=>setNewCover(e.target.value)}/>
            <input type="submit" value='Submit book'/>
        </form>
        </div>
    )
}

export default NewBook