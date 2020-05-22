import React from "react";
import PropTypes from "prop-types";

class SearchField extends React.Component {

  render() {
    return (
         <> 
          <label htmlFor="search">
            <input
              type="radio"
              id="search"
              name="mode"
              onChange={this.props.onModeChange}
              value="search"
            ></input>
            <span className="radio">Search</span>
          </label>
          <input
            className={
              this.props.mode === "search" ? "search show" : "search hide"
            }
            type="search"
            placeholder="Free text search..."
            id="search-field"
            name="mode"
            onChange={this.props.onSearchChange}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                this.props.getJoke();
              }
            }}
          ></input>
          </>

    );
  }
}

SearchField.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
  getJoke: PropTypes.func.isRequired,
  onModeChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

export default SearchField;
