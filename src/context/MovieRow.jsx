import React, { useContext } from "react";
import UserContext from "./userContex";
import CartContext from './cartContext';

function MovieRow(props) {
  const { currentUser } = useContext(UserContext);
  const cartContext = useContext(CartContext);

  console.log("Cart Context: ", cartContext);

  return <div>Movie Row: {currentUser ? currentUser.name : ""}</div>;
}

export default MovieRow;
