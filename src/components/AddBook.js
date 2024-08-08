import React from "react";

function AddBook() {
  return (
    <div>
      <div className="container w-50 mt-5" border border-secondary>
        <form style={{ padding: "20px 20px 10px 20px" }}>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Book Name
            </label>
            <input
              type="text"
              name="bookName"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="bookName"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
