import React, { useReducer } from "react";

const Context = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    // case "setSideNavTab":
    //   return { ...state, sideNavTab: action.payload };
    default:
      return state;
  }
}

const initialState = {
//   showLogin: false,
//   showRegister: false,
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export const ContextConsumer = Context.Consumer;

export default Context;