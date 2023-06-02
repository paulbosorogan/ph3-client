import React from "react";
import BookCard from "./BookCard";




function Books({books, onDeleteBook}){
    return(
        <div className="wrapper">
            <div className="book-list">
            {books.map((book)=> (
                <BookCard book={book} key={book.id} onDeleteBook={onDeleteBook} />
                ))}
            </div>
           </div>

    )
}

export default Books