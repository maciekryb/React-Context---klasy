import { createContext } from "react";

export const defaultObject = {
  isUserLogged: false,
  toggleLoggedState: () => console.log("domyslny provider"),
};
export const AppContext = createContext(defaultObject);
