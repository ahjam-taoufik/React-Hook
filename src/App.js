import React from "react";
import "./App.css";
import FetchData from "./components/FetchData";
import FetchingDatauseReducer from "./components/FetchingDatauseReducer";




function App() {
  
  return (
    <div className="App">
    <FetchingDatauseReducer/>
      {/* <FetchData/> */}
    </div>
  );
}

export default App;
