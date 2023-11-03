// App.jsx

import React, { useEffect } from "react";
import Gallery from "./components/Gallery"; // Import your Gallery component
import "./App.css";
import MyComponent from "./components/useEffectex";
import ParentComponent from "./components/ParentComponenet";
import Profile from "./components/Profile";

export default function App() {
  useEffect(() => {
    console.log("My app is mounting ...");
  }, []);
  return (
    <div className="app">
      {/* <h1>My Art Gallery</h1> */}
      {/* <Gallery />  */}
      {/* <MyComponent /> */}
      {/* <ParentComponent /> */}
      <Profile />
    </div>
  );
}
