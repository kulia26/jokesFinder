import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

function Favourite(props) {
  return (
    <aside className="hide">
      <h2>Favourite</h2>

      <section>
        {props.favourite.map((joke) => (
          <Joke
            key={joke.reactId}
            addToFavourite={props.addToFavourite}
            removeFromFavourite={props.removeFromFavourite}
            isFavourite={props.isJokeFavourite(joke.id)}
            {...joke}
          ></Joke>
        ))}
      </section>
    </aside>
  );
}

Favourite.propTypes = {
  favourite: PropTypes.array,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired,
  isJokeFavourite: PropTypes.func.isRequired,
};

export default Favourite;
