import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const Button = () => {
  const { toggleLoggedState } = useContext(AppContext);
  return <button onClick={toggleLoggedState}>Przełącz stan zalogowania</button>;
};
export default Button;
