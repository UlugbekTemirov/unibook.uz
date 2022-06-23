import React, { Fragment } from "react";
import Home from "./pages/Home/Home";

// Navbar link
import Navbar from "./components/Navbar";

// React Router Dom Link
import { Routes, Route } from "react-router-dom";

// Main Pages
import News from "./pages/News";
import Forum from "./pages/Forum";
import Chat from "./pages/Chat";
import SingleQuestion from "./pages/SingleQuestion";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Forum />} path="/forum" />
        <Route element={<Chat />} path="/chat" />
        <Route element={<News />} path="/news" />
        <Route element={<SingleQuestion />} path="/discussion/:id" />
      </Routes>
    </>
  );
}

export default App;
