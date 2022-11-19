import React, { PureComponent } from "react";
import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  static contextType = AppContext;

  render() {
    const { isUserLogged } = this.context;
    const userLoggedInfo = isUserLogged ? "zalogowoany" : "niezalogoowany";
    return (
      <div>
        <p>Użytkwonik jest {userLoggedInfo}</p>
      </div>
    );
  }
}
export default UserInfo;
