import React from 'react'

export default function Books() {
  return (
    <div className="container mt-5 alert-dark">
      <table>
        <thead>
         
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Autor</th>
            <th scope="col">Departments</th>
            <th scope="col">quantity</th>
            <th scope="col" colSpan={"3"}>
              Process
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
}
