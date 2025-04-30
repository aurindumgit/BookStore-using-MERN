
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import AddBook from './components/AddBook'
import ViewBook from './components/ViewBook'
import SearchBook from './components/SearchBook'
import UpdateBook from './components/UpdateBook'
import DeleteBook from './components/DeleteBook'
import './App.css'

const App = () => {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className='app-container'>
      <Router>
        <nav>
          <div className="nav-links">
          <Link to = "/add">Add Book</Link>
          <Link to = "/view">View Book</Link>
          <Link to = "/search">Search Book</Link>
          <Link to = "/update">Update Book</Link>
          <Link to = "/delete">Delete Book</Link>
          </div>
          <button
            className="toggle-theme"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        <main>
        <Routes>
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/view' element={<ViewBook/>}/>
          <Route path='/search' element={<SearchBook/>}/>
          <Route path='/update' element={<UpdateBook/>}/>
          <Route path='/delete' element={<DeleteBook/>}/>
        </Routes>
        </main>
        <footer className="footer">
            &copy; {new Date().getFullYear()} Aurindum Bose. All rights reserved.
        </footer>

      </Router>
    </div>
  )
}

export default App