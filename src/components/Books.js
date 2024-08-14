import React from "react";

export default function Books({ books, deleteBook, lendBook, backBook}) {
  return (
    <div className="container mt-5">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Autor</th>
            <th scope="col">Departments</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan={"3"}>
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {
          books.map((book, index)=>{
             return(<tr key={index}>
                    <td>{book._id}</td>
                    <td>{book.bookName}</td>
                  {/* <td data-toggle="tooltip" data-placement="top" title={book.comments} ></td> */}
                    <td>{book.author}</td>
                    <td>{book.department}</td>
                    <td>{book.quantity}</td>
                    <th scope="col" colSpan={"3"}>
                    <button onClick={()=> deleteBook(book._id)} type="button"  className="btn btn-primary">DELETE</button>
                    <button onClick={()=>lendBook(book._id)} type="button"  className="btn btn-primary">LEND</button>
                    <button onClick={ ()=>backBook(book._id)} type="button"  className="btn btn-primary">BACK</button>
                    </th>
              </tr>) 
          })       
          }
        </tbody>
      </table>
    </div>
  );
}
