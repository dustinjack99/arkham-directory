import React from "react";

const SearchButtons = (props) => {
  return (
    <div className="buttonBox">
      <div>
        <label htmlFor="inc">Find Inmate by: </label>
        <button
          onClick={props.handleInputChange}
          name="search"
          value="Incarceration"
        >
          Incarceration
        </button>
      </div>
      <div>
        <label htmlFor="ward">Find Inmate by: </label>
        <button onClick={props.handleInputChange} name="search" value="Ward">
          Ward I
        </button>
        <button onClick={props.handleInputChange} name="search" value="Ward">
          Ward II
        </button>
        <button onClick={props.handleInputChange} name="search" value="Ward">
          Ward III
        </button>
      </div>
      <div>
        <label htmlFor="all">Find Inmate by: </label>
        <button
          onClick={props.handleInputChange}
          name="search"
          value="All Inmates"
        >
          All Inmates
        </button>
      </div>
    </div>
  );
};

export default SearchButtons;
