import React, { Fragment } from "react";
import Home from "./pages/Home/Home";
// Navbar link
import Navbar from "./components/Navbar/Navbar";
// React Router Dom Link
import { Routes, Route } from "react-router-dom";

// Main Pages
import News from "./pages/News/News";
import Forum from "./pages/Forum/Forum";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Forum />} path="/forum" />
        <Route element={<Chat />} path="/chat" />
        <Route element={<News />} path="/news" />
      </Routes>
    </>
  );
}

export default App;
