import React, {useState} from "react";
import EditNote from './EditNote'

function NoteCard({note, onUpdateNote, onDeleteNote}){
    const [isEdit, setIsEdit] = useState(false)
    const {id, comment} = note

    function activateEdit(){
        setIsEdit((isEdit)=> !isEdit)
    }

    function handleDeleteNote(){
        fetch(`http://localhost:9292/notes/${id}`,{
            method: 'DELETE',
        })
        .then(r=>r.json())
        .then(deletedNote=>onDeleteNote(deletedNote))
    }
    return (
       <div className="note-card">
        <h4>Notes:</h4>
            <div className="notes-info">
                <p><b>Annonymous reader says:</b></p>
                <p>"{comment}"</p>
            </div>
       {isEdit ? (<EditNote 
        id={id}
        serverComment={comment}
        onUpdateNote={onUpdateNote}
        activateEdit={activateEdit}
        />) : (<div className="btn-group">
        <button className='edit-bttn' onClick={activateEdit} role='img'>✏️</button>
        <button className="trash-bttn-detail" onClick={handleDeleteNote} role='img'>🗑</button>
        </div>)}
       </div>
    )
}
export default NoteCard