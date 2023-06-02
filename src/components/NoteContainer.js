import React from "react";
import NewNote from "./NewNote";
import NoteCard from "./NoteCard";
import { useParams, NavLink } from "react-router-dom";

function NoteContainer({books, onUpdateNote, onAddNote, onDeleteNote}){
    
    const parameter = useParams()
    const individualBook = books.find((book)=> book.id === parseInt(parameter.id))
    const {notes} = individualBook

    return(
        <div className="new-note-container">
            <div className='back-to-books'>
            <NavLink to={`/books`}><p>Back to books</p></NavLink>
            </div>
            <NewNote onAddNote={onAddNote}/>
            {notes.map((note)=>{
                return (
                    <NoteCard 
                    key={note.id}
                    note={note}
                    onUpdateNote={onUpdateNote}
                    onDeleteNote={onDeleteNote}
                    />
                )
            })}
            
        </div>
    )
}

export default NoteContainer