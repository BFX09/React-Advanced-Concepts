import React, { Component } from "react";
import UserContext from "./userContex";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("Context: ", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ currentUser }) => (
          <div>
            Movie list: {currentUser ? currentUser.name : ""} <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
