// App.jsx

import React, { useEffect } from "react";
import Gallery from "./components/Gallery"; // Import your Gallery component
import "./App.css";
import MyComponent from "./components/useEffectex";
import ParentComponent from "./components/ParentComponenet";
import Profile from "./components/Profile";
import Greeting from "./components/Greeting";
import Alert from "./components/Alert";
import ProductList from "./components/ProductList";
import Counter from "./components/Counter";
import Renders from "./components/renders";
import Avatar from "./components/Avatar";

export default function App() {
  useEffect(() => {
    console.log("My app is mounting ...");
  }, []);
  const arr = [
    { id: "1", name: "pen", price: 40 },
    { id: "2", name: "pencil", price: 50 },
    { id: "3", name: "book", price: 100 },
  ];
  return (
    <div className="app">
      {/* <h1>My Art Gallery</h1> */}
      {/* <Gallery />  */}
      {/* <MyComponent /> */}
      {/* <ParentComponent /> */}
      {/* <Profile /> */}
      {/* <Greeting name="Mahesh" />
      <Alert show="true" />
      <ProductList products={arr} /> */}
      <Counter val={1} />
      <Renders />
      <Avatar />
    </div>
  );
}
