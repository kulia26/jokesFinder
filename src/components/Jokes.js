import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

function Jokes(props) {
  return (
    <section>
      {props.jokes.map((joke) => (
        <Joke
          key={joke.reactId}
          addToFavourite={props.addToFavourite}
          removeFromFavourite={props.removeFromFavourite}
          isFavourite={props.isJokeFavourite(joke.id)}
          {...joke}
        ></Joke>
      ))}
    </section>
  );
}

Jokes.propTypes = {
  jokes: PropTypes.array,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired,
  isJokeFavourite: PropTypes.func.isRequired,
};

export default Jokes;
