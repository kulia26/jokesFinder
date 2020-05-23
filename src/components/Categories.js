import React from "react";
import PropTypes from "prop-types";

function Categories(props) {
  return (
    <div
      className={
        props.mode === "categories" ? "categories show" : "categories hide"
      }
    >
      {props.categories.map((cat) => {
        const checkStatus = cat === props.checked;
        return (
          <label htmlFor={cat} key={cat}>
            <input
              type="radio"
              id={cat}
              name="category"
              value={cat}
              checked={checkStatus}
              onChange={props.onCategorySelect}
            ></input>
            <span className="radio">{cat}</span>
          </label>
        );
      })}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array,
  mode: PropTypes.string.isRequired,
  onCategorySelect: PropTypes.func.isRequired,
  checked: PropTypes.string,
};

export default Categories;
