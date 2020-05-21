import React from "react";
import Joke from "./Joke";

class App extends React.Component {
  constructor(props) {
    super(props);

    const favouriteJSON = localStorage.getItem("favourite");

    const favourite = favouriteJSON ? JSON.parse(favouriteJSON) : [];

    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
      mode: "random",
      fromCategory: null,
      query: null,
      jokes: [],
      counterForUniqueId: 0,
      favourite,
    };

    this.onModeChange = this.onModeChange.bind(this);
    this.onCategorySelect = this.onCategorySelect.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.getUniqueCounterValue = this.getUniqueCounterValue.bind(this);
    this.addToFavourite = this.addToFavourite.bind(this);
    this.removeFromFavourite = this.removeFromFavourite.bind(this);
    this.isJokeFavourite = this.isJokeFavourite.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            categories: result,
            fromCategory: result[0],
          });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  componentDidUpdate() {
    if (this.state.error) {
      setTimeout(() => {
        document.getElementById("errorMessage").classList.remove("show");
        document.getElementById("errorMessage").classList.add("hide");
        setTimeout(() => {
          this.setState({
            error: null,
            isLoaded: true,
          });
        }, 300);
      }, 3000);
    }
  }
  onModeChange(event) {
    this.setState({ mode: event.target.value });
  }

  onCategorySelect(event) {
    this.setState({ fromCategory: event.target.value });
  }

  onSearchChange(event) {
    this.setState({ query: event.target.value });
  }

  getUniqueCounterValue() {
    const value = this.state.counterForUniqueId + 1;
    this.setState({ counterForUniqueId: value });
    return value;
  }

  isJokeFavourite(id) {
    const find = this.state.favourite.filter((j) => j.id === id);
    return find.length !== 0;
  }

  addToFavourite(jokeId) {
    const favourite = this.state.favourite;
    let joke = {};
    const jokes = this.state.jokes.map((j) => {
      if (j.id === jokeId) {
        j.isFavourite = true;
        joke = { ...j };
      }
      return j;
    });
    joke.reactId = joke.reactId + this.getUniqueCounterValue();
    joke.isFavourite = true;
    favourite.push(joke);
    this.setState({ favourite, jokes });
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }

  removeFromFavourite(jokeId) {
    const favourite = this.state.favourite.map((j) => {
      if (j.id === jokeId) {
        j.className = "hide";
        j.isFavourite = false;
      }
      return j;
    });

    const jokes = this.state.jokes.map((j) => {
      if (j.id === jokeId) {
        j.isFavourite = false;
      }
      return j;
    });

    this.setState({ favourite, jokes });

    setTimeout(() => {
      const favourite = this.state.favourite.filter((j) => j.id !== jokeId);
      this.setState({ favourite, jokes });
      localStorage.setItem("favourite", JSON.stringify(favourite));
    }, 400);
  }

  getRandomJoke() {
    this.setState({ isLoaded: false });
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(
        (result) => {
          const jokes = this.state.jokes;
          result.reactId = result.id + this.getUniqueCounterValue();
          jokes.unshift(result);
          this.setState({ isLoaded: true, jokes });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  getJokeFromCategory() {
    this.setState({ isLoaded: false });
    const category = this.state.fromCategory;
    fetch(
      "https://api.chucknorris.io/jokes/random?category=" + encodeURI(category)
    )
      .then((res) => res.json())
      .then(
        (result) => {
          const jokes = this.state.jokes;
          result.reactId = result.id + this.getUniqueCounterValue();
          jokes.unshift(result);
          this.setState({ isLoaded: true, jokes });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  }

  getJokeFromQuery() {
    if (this.state.query.length < 3 || this.state.query.length > 120) {
      this.setState({
        error: {
          message: "Query must be from 3 to 120 characters",
          isLoaded: true,
        },
      });
    } else {
      const query = this.state.query;
      fetch("https://api.chucknorris.io/jokes/search?query=" + encodeURI(query))
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.total === 0) {
              this.setState({
                isLoaded: true,
                error: {
                  message: "There is no jokes about " + query,
                },
              });
            } else {
              this.setState({ isLoaded: false });
              let jokes = this.state.jokes;
              result.result.forEach((joke) => {
                joke.reactId = joke.id + this.getUniqueCounterValue();
              });
              jokes = result.result.concat(jokes);
              setTimeout(() => this.setState({ isLoaded: true, jokes }), 300);
            }
          },
          (error) => {
            this.setState({ isLoaded: true, error });
          }
        );
    }
  }

  getJoke() {
    if (this.state.mode === "random") {
      this.getRandomJoke();
    }
    if (this.state.mode === "categories" && this.state.fromCategory) {
      this.getJokeFromCategory();
    }
    if (this.state.mode === "search" && this.state.query) {
      this.getJokeFromQuery();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrap">
          <header>
            <h1>MSI 2020</h1>
          </header>
          <input className="menu" type="checkbox" id="menu" />
          <div className="menu">
            <div>
              <span></span>
              <span></span>
            </div>
            <h2>Favourite</h2>
          </div>

          <main>
            <h2>Hey!</h2>
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

                  <div
                    className={
                      this.state.mode === "categories"
                        ? "categories show"
                        : "categories hide"
                    }
                  >
                    {this.state.categories.map((cat) => {
                      const checkStatus = this.state.fromCategory === cat;
                      return (
                        <label htmlFor={cat} key={cat}>
                          <input
                            type="radio"
                            id={cat}
                            name="category"
                            value={cat}
                            checked={checkStatus}
                            onChange={this.onCategorySelect}
                          ></input>
                          <span className="radio">{cat}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>
                <label htmlFor="search">
                  <input
                    type="radio"
                    id="search"
                    name="mode"
                    onChange={this.onModeChange}
                    value="search"
                  ></input>
                  <span className="radio">Search</span>
                </label>
                <input
                  className={
                    this.state.mode === "search" ? "search show" : "search hide"
                  }
                  type="search"
                  placeholder="Free text search..."
                  id="search-field"
                  name="mode"
                  onChange={this.onSearchChange}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      this.getJoke();
                    }
                  }}
                ></input>
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
                  className={this.state.isLoaded ? "hide" : "show"}
                  src="./loader.gif"
                  alt="loading..."
                ></img>
                <p
                  id="errorMessage"
                  className={this.state.error ? "show" : "hide"}
                >
                  {this.state.error ? this.state.error.message : ""}
                </p>
              </fieldset>
            </form>
            <section>
              {" "}
              {this.state.jokes.map((joke) => (
                <Joke
                  key={joke.reactId}
                  addToFavourite={this.addToFavourite}
                  removeFromFavourite={this.removeFromFavourite}
                  isFavourite={this.isJokeFavourite(joke.id)}
                  {...joke}
                ></Joke>
              ))}{" "}
            </section>
          </main>
        </div>
        <aside className="hide">
          <h2>Favourite</h2>

          <section>
            {this.state.favourite.map((joke) => (
              <Joke
                key={joke.reactId}
                addToFavourite={this.addToFavourite}
                removeFromFavourite={this.removeFromFavourite}
                isFavourite={this.isJokeFavourite(joke.id)}
                {...joke}
              ></Joke>
            ))}
          </section>
        </aside>
      </div>
    );
  }
}

export default App;
