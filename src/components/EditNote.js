import React, {useState} from "react";

function EditNote({id, serverComment, onUpdateNote, activateEdit}){
  const [oldNote, setOldNote] = useState(serverComment)

    function handleEdit(e){
        e.preventDefault()

        fetch(`http://localhost:9292/notes/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                comment: oldNote
            })
        })
        .then(r=> r.json())
        .then(updatedNote => onUpdateNote(updatedNote))
        activateEdit()
    }

    return (
        <div className="edit-container">
        <form className="edit-form" onSubmit={handleEdit}>
            <label className="new-note" htmlFor="text">Notes:</label>
            <input type="text" value={oldNote} onChange={e=> setOldNote(e.target.value)}/>
            <input id='new-note' type='submit' value='Submit'/>
        </form>
        </div> 
    )
}

export default EditNote