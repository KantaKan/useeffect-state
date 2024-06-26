import { useEffect, useState } from "react";

import "./App.css";
import Pokemon from "./Pokemon";
import Store from "./Axios";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Navbar from "./Navbar";
import { Grid } from "@mui/material";
import CustomImageList from "./ImageComponent";
import FormPost from "./Form";
import BasicGrid from "./GridLayout";

function App() {
  // const [count, setCount] = useState(0);
  // const handleCount = () => {
  //   setCount((prev) => prev + 1);
  // };
  // const decreaseCount = () => {
  //   setCount((prev) => prev - 1);
  // };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/pokemon"
          element={
            <div className="flex flex-wrap">
              <Pokemon /> <Pokemon />
              <Pokemon /> <Pokemon />
              <Pokemon /> <Pokemon />
            </div>
          }
        />
        <Route path="/form" element={<FormPost />} />
        <Route path="/grid" element={<BasicGrid />} />
      </Routes>
    </>
  );
}

function Home() {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => prev - 1);

  return (
    <>
      <Store />
      <div className="justify-center flex text-4xl bg-yellow-300 font-extrabold text-indigo-400">count = {count}</div>
      <CardComp decreaseCount={decreaseCount} counthandle={handleCount} />
      <IsToggled className="flex flex-wrap" />
      <Currenttime />
    </>
  );
}

const CardComp = ({ counthandle, decreaseCount }) => {
  return (
    <div className="flex flex-col justify-center h-42 bg-green-300  h-24">
      <h2 className=" self-center">Click The Button to set count in above component</h2>
      <div className="self-center">
        <button className="bg-slate-500 h-7  rounded-md w-12 hover:bg-slate-700" onClick={counthandle} type="button" value="text">
          +1
        </button>
        <button className=" bg-orange-300 h-7 rounded-md w-12 hover:bg-orange-500" onClick={decreaseCount} type="button" value="text">
          -1
        </button>
      </div>
    </div>
  );
};

const IsToggled = () => {
  const [toggled, setToggled] = useState(false);
  const toggledhandler = () => {
    setToggled(!toggled);
  };
  return (
    <div className="bg-pink-200 flex-col  text-center">
      <button className="bg-orange-400 hover:bg-orange-600 font-bold text-white rounded-md" onClick={toggledhandler} type="button">
        {toggled ? "Hide" : "Show"} Message
      </button>
      {toggled && <h2>Hello this is toggled</h2>}
    </div>
  );
};

const Currenttime = () => {
  const [wtime, setCurrenttime] = useState(new Date().toLocaleTimeString());
  const [greetTime, setGreetTime] = useState("");
  const gettime = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreetTime("Good Morning");
    } else if (hour > 12) {
      setGreetTime("Good Afternoon");
    } else {
      setGreetTime("Good Evening");
    }
  };

  useEffect(() => {
    gettime();
    const intervalID = setInterval(() => {
      setCurrenttime(new Date().toLocaleTimeString());
    }, 1000);
    // return () => clearInterval(intervalID)
  }, []);

  return (
    <>
      <div className="font-bold text-4xl flex justify-around  bg-blue-300 text-white">
        {wtime} {greetTime}{" "}
      </div>
    </>
  );
};

export default App;
