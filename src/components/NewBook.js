import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewBook({addBook}){
    const [newTitle, setNewTitle] = useState("")
    const [newAuthor, setNewAuthor] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newGenre, setNewGenre] = useState("")
    const [newCover, setNewCover] = useState("")
    const navigate = useNavigate();

    function handleSubmitNB(e){
        e.preventDefault()

        const bookData = {
            title: newTitle,
            author: newAuthor,
            description: newDescription,
            genre: newGenre,
            image: newCover,
            reviews: {
                score: 0,
                comment: 'Fill the blank',
            }
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
        console.log(bookData)
    }
    return(
        <div className="new-book-container">
        <h1>What book do you wanna read next?</h1>
        <form className="new-book-form" onSubmit={handleSubmitNB}>
            <label htmlFor="text">Book title:</label>
            <input id="title" type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
            <label htmlFor="text">Book author:</label>
            <input id="author" type="text" value={newAuthor} onChange={(e)=> setNewAuthor(e.target.value)}/>
            <label htmlFor="text">Book description:</label>
            <input id="description" type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/>
            <label htmlFor="text">Book genre:</label>
            <input id="genre" type="text" value={newGenre} onChange={(e)=>setNewGenre(e.target.value)}/>
            <label htmlFor="text">Book cover:</label>
            <input id="image_url" type="text" value={newCover} onChange={(e)=>setNewCover(e.target.value)}/>
            <input type="submit" value='Submit book'/>
        </form>
        </div>
    )
}

export default NewBook