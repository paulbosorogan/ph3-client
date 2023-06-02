import React, {useState} from "react";
import { useParams } from "react-router-dom";

function NewNote({onAddNote}){
    const {id: book_id} = useParams()
    const [newNote, setNewNote] = useState('')

    function handleNewNote(e){
        e.preventDefault()
        
        fetch(`http://localhost:9292/books/${book_id}/notes`, {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                comment: newNote
            })
            })
            .then(r=>r.json())
            .then(newNoteUpload => onAddNote(newNoteUpload))
        setNewNote('')
    }
return (
    <div>
        <form className="new-note-form" onSubmit={handleNewNote}>
            <label htmlFor="text">Add new note:</label>
            <input type="text" value={newNote} onChange={e=> setNewNote(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
    </div>
)
}

export default NewNote