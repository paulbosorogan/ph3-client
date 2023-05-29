import React, {useState, useEffect} from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Navigation from "./components/Navigation";
import BookDetail from "./components/BookDetail";


function App() {
  const [books, setBooks] = useState([])
 
  useEffect(()=>{
    fetch('http://localhost:9292/books')
    .then((r)=>r.json())
    .then((data)=>setBooks(data))
  },[])

function addBook(newEntry){
  setBooks([...books, newEntry])

}
function onDeleteBook(id){
  const updatedBooks = books.filter((bookUp)=> bookUp.id !== id)
  setBooks(updatedBooks)
  }

  function onUpdateRev(updatedRev){
   const updatedReview = books.map((book) => {
     if(book.id === updatedRev.book_id){
      const filtered = book.reviews.filter((review) =>review.id !== updatedRev.id)
      return {
        ...book,
        reviews: [updatedRev, ...filtered]
      }
    } else {
      return book
    }
   })
   setBooks(updatedReview)
  }

  
  return (
   <div>
    <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/books' element={<Books books={books} onDeleteBook={onDeleteBook}/>} />
        <Route exact path='/books/:id' element={<BookDetail books={books} onUpdateRev={onUpdateRev}/>} />
        <Route exact path='/new-book' element={<NewBook addBook={addBook}/>} />
      </Routes>
   </div>
  );
}

export default App;
