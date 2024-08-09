import React from "react";

function AddBook() {
  return (
    <div>
      <div className="container w-50 mt-5" border border-secondary>
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Book Name"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Autor
            </label>
            <input
              type="text"
              name="autor"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Autor"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Quantity"
            />
          </div>
          <select label="Select your Departments" className="form-select" aria-label="">
            <option selected>Departments</option>
            <option value="1">History & Criticism</option>
            <option value="2">Religios</option>
            <option value="3">Music</option>
            <option value="3">Study and Teaching</option>
          </select>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Comments
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button"  className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
