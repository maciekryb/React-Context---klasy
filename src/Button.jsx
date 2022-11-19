import React, { PureComponent } from "react";
import { AppContext } from "./AppContext";

class Button extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {({ toggleLoggedState }) => {
          return <button onClick={toggleLoggedState}>Przełącz stan zalogowania</button>;
        }}
      </AppContext.Consumer>
    );
  }
}
export default Button;
