import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const UserInfo = () => {
  const { isUserLogged } = useContext(AppContext);
  const userLoggedInfo = isUserLogged ? "zalogowoany" : "niezalogoowany";
  return (
    <div>
      <p>Użytkwonik jest {userLoggedInfo}</p>
    </div>
  );
};
export default UserInfo;
