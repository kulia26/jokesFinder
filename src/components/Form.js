import React from "react";
import PropTypes from "prop-types";
import Categories from "./Categories";
import SearchField from './SearchField';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      fromCategory: null,
      mode: "random",
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            categories: result,
            fromCategory: result[0],
          });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  onCategorySelect = (event) => {
    this.setState({ fromCategory: event.target.value });
  };

  onModeChange = (event) => {
    this.setState({ mode: event.target.value });
  };

  onSearchChange = (event) => {
    this.setState({ query: event.target.value });
  };

  getJoke = () => {
    if (this.state.mode === "random") {
      this.props.getRandomJoke();
    }
    if (this.state.mode === "categories" && this.state.fromCategory) {
      this.props.getJokeFromCategory(this.state.fromCategory);
    }
    if (this.state.mode === "search" && this.state.query) {
      this.props.getJokeFromQuery(this.state.query);
    }
  };

  render() {
    return (
      <form>
        <fieldset name="selectMode">
          <legend>Let’s try to find a joke for you:</legend>
          <label htmlFor="random">
            <input
              type="radio"
              id="random"
              name="mode"
              value="random"
              onChange={this.onModeChange}
              defaultChecked
            ></input>
            <span className="radio">Random</span>
          </label>
          <fieldset name="fromCategories" className="categories">
            <legend>
              <label htmlFor="categories">
                <input
                  type="radio"
                  id="categories"
                  name="mode"
                  onChange={this.onModeChange}
                  value="categories"
                ></input>
                <span className="radio">From categories</span>
              </label>
            </legend>

            <Categories
              categories={this.state.categories}
              mode={this.state.mode}
              onCategorySelect={this.onCategorySelect}
              checked={this.state.fromCategory}
            />
          </fieldset>
          <SearchField
            onSearchChange={this.onSearchChange}
            onModeChange={this.onModeChange}
            mode={this.state.mode}
            getJoke={this.getJoke}
          />
          <button
            type="button"
            className="getJoke"
            onClick={this.getJoke}
            onSubmit={this.getJoke}
          >
            Get a joke
          </button>
          <img
            id="chuck"
            className={
              !this.props.isLoaded && !this.props.error ? "show" : "hide"
            }
            src="./loader.gif"
            alt="loading..."
          ></img>
          <p
            id="errorMessage"
            className={
              this.props.error && this.props.error.show ? "show" : "hide"
            }
          >
            {this.props.error ? this.props.error.message : ""}
          </p>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  getJokeFromCategory: PropTypes.func.isRequired,
  getRandomJoke: PropTypes.func.isRequired,
  getJokeFromQuery: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  error: PropTypes.object,
};

export default Form;
