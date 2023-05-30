import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App.jsx";
import LoginPage from "./Components/LoginPage";
import PlayButton from "./Components/PlayButton";
import Video from "./Components/Video";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <LoginPage />
    <PlayButton /> */}
    <Video />
    <Video />
    <Video />

    <PlayButton message="hi" onClick={() => console.log("killed")}>
      Play
    </PlayButton>
  </React.StrictMode>
);
