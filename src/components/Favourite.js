import React from "react";
import PropTypes from "prop-types";
import Joke from "./Joke";

class Favourite extends React.Component {
  render() {
    return (
      <aside className="hide">
          <h2>Favourite</h2>

          <section>
            {this.props.favourite.map((joke) => (
              <Joke
                key={joke.reactId}
                addToFavourite={this.props.addToFavourite}
                removeFromFavourite={this.props.removeFromFavourite}
                isFavourite={this.props.isJokeFavourite(joke.id)}
                {...joke}
              ></Joke>
            ))}
          </section>
        </aside>
    );
  }
}

Favourite.propTypes = {
  favourite: PropTypes.array,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired,
  isJokeFavourite: PropTypes.func.isRequired,
};

export default Favourite;
