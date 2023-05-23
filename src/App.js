import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Books from "./components/Books";
import NewBook from "./components/NewBook";
import Navigation from "./components/Navigation";



function App() {
 

  return (
   <div>
    <Navigation/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/books' element={<Books/>} />
        <Route exact path='/books/:id' element={<Books/>} />
        <Route exact path='/add-new-book' element={<NewBook/>} />
      </Routes>
   </div>
  );
}

export default App;
