import { useContext } from "react";
import { counterContextObj } from "../contexts/contextProvider";
import { useCounterStore } from "../store/CounterStore";
import Test from "./Test";

function Home() {
  console.log("Home");
  //call useCounterStore hook to get state of Zustand store
  let {newCounter,incrementCounter,decrementCounter}= useCounterStore();
 
  const {counter,counter1,changeCounter,changeCounter1}= useContext(counterContextObj);
  return (
    <div>
     Home
    </div>

  )
}

export default Home;