import React from "react";
import PropTypes from "prop-types";

function SearchField(props) {
  return (
    <>
      <label htmlFor="search">
        <input
          type="radio"
          id="search"
          name="mode"
          onChange={props.onModeChange}
          value="search"
        ></input>
        <span className="radio">Search</span>
      </label>
      <input
        className={props.mode === "search" ? "search show" : "search hide"}
        type="search"
        placeholder="Free text search..."
        id="search-field"
        name="mode"
        onChange={props.onSearchChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            props.getJoke();
          }
        }}
      ></input>
    </>
  );
}

SearchField.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  getJoke: PropTypes.func.isRequired,
  onModeChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default SearchField;
