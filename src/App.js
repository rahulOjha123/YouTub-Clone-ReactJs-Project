import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Compnent/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import React, { useState } from "react";

function App() {

  const [sidebar,setSidebar]=useState(true)


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSidebar={setSidebar}></Navbar>
        <Routes>
          <Route path="/" element={<Home sidebar={sidebar} />} />
          <Route path="/video/:categoryId/:videoId" element={<Video></Video>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
