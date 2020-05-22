import React from "react";
import Form from "./Form";
import Jokes from "./Jokes";
import Favourite from "./Favourite";

class App extends React.Component {
  constructor(props) {
    super(props);

    const favouriteJSON = localStorage.getItem("favourite");

    const favourite = favouriteJSON ? JSON.parse(favouriteJSON) : [];

    this.state = {
      error: null,
      isLoaded: true,
      jokes: [],
      counterForUniqueId: 0,
      favourite,
    };
  }

  componentDidUpdate() {
    if (this.state.error && this.state.error.show === undefined) {
      this.setState({
        error: {
          show: true,
          message: this.state.error.message,
        },
      });
      setTimeout(() => {
        this.setState({
          error: {
            show: false,
            message: this.state.error.message,
          },
        });
        setTimeout(() => {
          if (this.state.error) {
            this.setState({
              error: null,
            });
          }
        }, 300);
      }, 3000);
    }
  }

  getUniqueCounterValue = () => {
    const value = this.state.counterForUniqueId + 1;
    this.setState({ counterForUniqueId: value });
    return value;
  };

  isJokeFavourite = (id) => {
    const find = this.state.favourite.find((j) => j.id === id);
    return find !== undefined;
  };

  addToFavourite = (jokeId) => {
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

    const favourite = [joke, ...this.state.favourite];

    this.setState({ favourite, jokes });
    localStorage.setItem("favourite", JSON.stringify(favourite));
  };

  removeFromFavourite = (jokeId) => {
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
  };

  getRandomJoke = () => {
    this.setState({ isLoaded: false });
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then(
        (result) => {
          result.reactId = result.id + this.getUniqueCounterValue();
          const jokes = [result, ...this.state.jokes];
          this.setState({ isLoaded: true, jokes });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  };

  getJokeFromCategory = (category) => {
    this.setState({ isLoaded: false });
    fetch(
      "https://api.chucknorris.io/jokes/random?category=" + encodeURI(category)
    )
      .then((res) => res.json())
      .then(
        (result) => {
          result.reactId = result.id + this.getUniqueCounterValue();
          const jokes = [result, ...this.state.jokes];
          this.setState({ isLoaded: true, jokes });
        },
        (error) => {
          this.setState({ isLoaded: true, error });
        }
      );
  };

  getJokeFromQuery = (query) => {
    if (query.length < 3 || query.length > 120) {
      this.setState({
        error: {
          message: "Query must be from 3 to 120 characters",
        },
        isLoaded: true,
      });
    } else {
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
  };

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
            <Form
              error={this.state.error}
              getJokeFromCategory={this.getJokeFromCategory}
              getJokeFromQuery={this.getJokeFromQuery}
              getRandomJoke={this.getRandomJoke}
              isLoaded={this.state.isLoaded}
            />
            <Jokes
              jokes={this.state.jokes}
              addToFavourite={this.addToFavourite}
              removeFromFavourite={this.removeFromFavourite}
              isJokeFavourite={this.isJokeFavourite}
            />
          </main>
        </div>
        <Favourite
          favourite={this.state.favourite}
          addToFavourite={this.addToFavourite}
          removeFromFavourite={this.removeFromFavourite}
          isJokeFavourite={this.isJokeFavourite}
        />
        
      </div>
    );
  }
}

export default App;
