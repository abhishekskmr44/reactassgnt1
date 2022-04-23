import logo from './logo.svg';
import './App.css';
import React from "react";

import List from "./components/List.jsx"
import Joinus from "./components/Joinus.jsx";
import Settings from "./components/Settings.jsx";
import Contactus from "./components/Contactus.jsx";
import Login from "./components/Login.jsx";
import Help from "./components/Help.jsx";
import Search from "./components/Search.jsx";
import Home from "./components/Home.jsx";
import Download from "./components/Download.jsx";
import Allbtns from "./components/Allbtns.jsx";


function App() {
  return (
    <>
    <div className="App">
    <h1>
      Problem 1
    </h1>
     <List/>
     <h1>Problem 2</h1>
      <div className="P2">
      <Joinus/>
      <Settings/>
      <Login/>
      <Contactus/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
      </div>
      <h2>Problem 2</h2>
      <div className="P3">
      <Allbtns id="B2" name="JOIN US" ></Allbtns>
        <Allbtns id="B1" name="Settings" ></Allbtns>
        <Allbtns  id="B3" name="LOG IN"></Allbtns>
        <Allbtns id="B4" name="CONTACT"></Allbtns>
        <Allbtns id="B5" name="SEARCH"></Allbtns>
        <Allbtns id="B6" name="HELP"></Allbtns>
        <Allbtns id="B7" name="HOME"></Allbtns>
        <Allbtns id="B8" name="DOWNLOAD"></Allbtns>
      </div>
    </div>
    </>
   
  );
}

export default App;




