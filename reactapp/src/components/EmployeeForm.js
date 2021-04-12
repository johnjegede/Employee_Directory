import React from "react";

function EmployeeForm(props) {
  return (
    <form>
      <div>
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="SearchName"
          id="search"
        />
      </div>
    </form>
  );
}

export default EmployeeForm;
