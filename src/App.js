import "./App.css";
import React, {useState,useEffect} from "react";
import AddBook from "./components/AddBook";
import Books from './components/Books'
import axios from 'axios'

function App() {

  const [books, setBooks] = useState([])
  const [book, setBook] = useState([{
    bookName:"",
    author:"",
    quantity:"",
    department:"",
    comments:""
  }])

  useEffect(()=>{

    fetch('/books').then(res=>{

    if(res.ok){
      return res.json()
    }}).then(jsonRes => setBooks(jsonRes))
  })

 const handleChange =(e) => {
  const {name, value} = e.target;
  setBook(prevInput => 
  {
    return({
      ...prevInput,
      [name]:value
    })
  }
  )
 }

 const addBook = (e)=>
 {
  e.preventDefault();
  const newBook = {
    bookName: book.bookName,
    author:book.author,
    quantity:book.quantity,
    department:book.department,
    comments:book.comments

  }
  axios.post('/newbook', newBook )
  alert (`´The Book ${book.bookName} is added`)
  setBook({bookName:"",author:"",quantity:"",department:"",comments:""})
 }
  return (
    <div className="App">
     
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            ACR-BOOKS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Books <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  AddBook
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Departments
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">
                    History & Criticism
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Religios
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Music
                  </a>
                  <div className="dropdown-divider"></div>

                  <a className="dropdown-item" href="#">
                    Study and Teaching
                  </a>
                </div>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
  
      <AddBook book={book} handleChange={handleChange} addBook={addBook}/>
      <Books books={books}/>
    </div>
  );
}

export default App;
