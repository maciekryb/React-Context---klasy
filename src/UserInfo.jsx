import React, { PureComponent } from "react";
import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <div>
            <p>Użytkwonik jest {isUserLogged ? "zalogowoany" : "niezalogoowany"}</p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
export default UserInfo;
