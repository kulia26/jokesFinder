import React from "react";
import { ReactComponent as Message } from "../assets/message.svg";
import { ReactComponent as LinkIcon } from "../assets/link.svg";
import { ReactComponent as Unliked } from "../assets/unliked.svg";
import { ReactComponent as Liked } from "../assets/liked.svg";
import PropTypes from "prop-types";

class Joke extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: "hide",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ className: "show" });
    }, 0);
  }

  calculateHours = (date) => {
    return Math.floor((new Date() - new Date(date)) / 1000 / 60 / 60);
  };

  hasCategory = () => {
    return this.props.categories && this.props.categories.length;
  };

  render() {
    const className =
      (this.props.className ? this.props.className : "") +
      " " +
      this.state.className;
    return (
      <article className={className}>
        <span className="message">
          <Message />
        </span>
        <button
          type="button"
          className={this.props.isFavourite ? "like hide" : "like show"}
          onClick={() => {
            this.props.addToFavourite(this.props.id);
          }}
        >
          <Unliked />
        </button>
        <button
          type="button"
          className={this.props.isFavourite ? "like show" : "like hide"}
          onClick={() => {
            this.props.removeFromFavourite(this.props.id);
          }}
        >
          <Liked />
        </button>
        <address>
          ID:
          <a href={this.props.url}>
            <span>{this.props.id}</span>
            <LinkIcon />
          </a>
        </address>
        <h2>{this.props.value}</h2>

        <p>
          Last update:{" "}
          <time dateTime={this.props.updated_at}>
            {this.calculateHours(this.props.updated_at)} hours ago
          </time>
        </p>

        <mark className={this.hasCategory() ? "show" : "hide"}>
          {this.props.categories[0]}
        </mark>
      </article>
    );
  }
}

Joke.propTypes = {
  categories: PropTypes.array,
  updated_at: PropTypes.string.isRequired,
  className: PropTypes.string,
  isFavourite: PropTypes.bool.isRequired,
  removeFromFavourite: PropTypes.func,
  addToFavourite: PropTypes.func,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Joke;
