import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

class Jokes extends React.Component {
  render() {
    return (
      <section>
        {this.props.jokes.map((joke) => (
          <Joke
            key={joke.reactId}
            addToFavourite={this.props.addToFavourite}
            removeFromFavourite={this.props.removeFromFavourite}
            isFavourite={this.props.isJokeFavourite(joke.id)}
            {...joke}
          ></Joke>
        ))}
      </section>
    );
  }
}

Jokes.propTypes = {
  jokes: PropTypes.array,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired,
  isJokeFavourite: PropTypes.func.isRequired,
};

export default Jokes;
