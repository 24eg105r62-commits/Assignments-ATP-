import { useState, createContext } from "react";

//create context provider object
export const counterContextObj = createContext();

function ContextProvider({ children }) {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  const increment = (id) => {
    setCounters((prev) => prev.map((val, i) => (i === id ? val + 1 : val)));
  };
  const decrement = (id) => {
    setCounters((prev) => prev.map((val, i) => (i === id ? val - 1 : val)));
  };
  return (
    <counterContextObj.Provider value={{ counters, increment, decrement }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider;
