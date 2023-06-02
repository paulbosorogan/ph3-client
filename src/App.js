import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Navigation from "./components/Navigation";
import NoteContainer from "./components/NoteContainer";


function App() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    fetch('http://localhost:9292/books')
    .then((r)=>r.json())
    .then((data)=>setBooks(data))
  },[])

//new book 
function addBook(newEntry){
  setBooks([...books, newEntry])
}
//delete book
function onDeleteBook(id){
  const afterBookDelete = books.filter((book)=> book.id !== id)
  setBooks(afterBookDelete)
  }
//update note
function onUpdateNote(updatedNote){
  const updateNote = books.map((book)=>{
    if(book.id === updatedNote.book_id){
      const filteredNotes = book.notes.filter((note)=> note.id !== updatedNote.id)
      return {
        ...book,
        notes: [updatedNote, ...filteredNotes]
      }
    } else {
      return book
    }
  })
  setBooks(updateNote)
}
//add note 
function onAddNote(newNoteUpload){
  const newNoteUploaded = books.map((book)=>{
    if(book.id === newNoteUpload.book_id){
      return {
        ...book,
        notes: [newNoteUpload, ...book.notes]
      }
    } else {
      return book
    }
  })
  setBooks(newNoteUploaded)
}

//delete note
function onDeleteNote(deletedNote){
  const afterDeleteNote = books.map((book)=>{
    if(book.id === deletedNote.book_id){
      const filterDeleteNote = book.notes.filter((note)=> note.id !== deletedNote.id)
      return {
        ...book,
        notes: filterDeleteNote
      }
    } else {
      return book
    }
  })
  setBooks(afterDeleteNote)
}
  return (
   <div>
    <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/books' element={<Books books={books} onDeleteBook={onDeleteBook}/>} />
        <Route exact path='/books/:id' element={<NoteContainer books={books} onUpdateNote={onUpdateNote} onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}/>} />
        <Route exact path='/new-book' element={<NewBook addBook={addBook}/>} />
      </Routes>
   </div>
  );
}

export default App;
