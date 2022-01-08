import React, {useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";


export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
       <p>{count}</p>
      <CountContext.Provider value={{count:count,dispatch:dispatch}}>
          <ComponentA />
          <ComponentB />
        
      </CountContext.Provider>
    </div>
  );
}

export default App;
