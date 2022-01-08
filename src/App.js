import { createContext } from "react";
import "./App.css";
import CompA from "./components/CompA";

export const UserContext = createContext();
export const toggleContext = createContext();

function App() {
  const user = {
    id: 1,
    name: "taoufik",
  };

  return (
    <div className="App">
      <h2 style={{ background: "blue" }}>App</h2>

      <toggleContext.Provider value="false">
        <UserContext.Provider value={user}>
          <CompA />
        </UserContext.Provider>
      </toggleContext.Provider>

      <h2 style={{ background: "blue" }}>App</h2>
    </div>
  );
}

export default App;
