import { createContext, useReducer } from "react";

//actual values
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
//---- userReducer ----//
export const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer `);
  }
};
const userLogged = JSON.parse(localStorage.getItem("user"));
console.log(userLogged);
const INITIAL_STATE = { currentUser: userLogged };
//the literal context
export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
