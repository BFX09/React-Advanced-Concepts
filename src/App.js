import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContex";
import CartContext from "./context/cartContext";
import Login from "./context/Login";
import Carousel from "./hooks/Carousel";

class App extends Component {
  handleLoggedIn = (username) => {
    console.log("Getting the user: " + username);
    const user = { name: "Bardia" };
    this.setState({ currentUser: user });
  };

  state = { currentUser: null };

  render() {
    return (
      <React.Fragment>
        <CartContext.Provider value={{ carts: [] }}>
          <UserContext.Provider
            value={{
              currentUser: this.state.currentUser,
              onLoggedIn: this.handleLoggedIn,
            }}
          >
            <div>
              <MoviePage />
              <Login />
            </div>
          </UserContext.Provider>
        </CartContext.Provider>
        <Carousel />
      </React.Fragment>
    );
  }
}

export default App;
