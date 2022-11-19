import React, { PureComponent } from "react";
import Button from "./Button";
import UserInfo from "./UserInfo";
import { AppContext, defaultObject } from "./AppContext";

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}>
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
}

export default App;
