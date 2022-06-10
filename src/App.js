import React, { Fragment } from "react";

// Navbar link
import Navbar from "./components/Navbar/Navbar";

// React Router Dom Link
import {Routes, Route} from "react-router-dom";

// Main Pages
import News from "./pages/News/News";
import Forum from "./pages/Forum/Forum";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Fragment>
        <Routes>
          <Route element={<Forum/>} path="/forum" />
          <Route element={<Chat />} path="/chat" />
          <Route element={<News />} path="/news" />
        </Routes>
    </Fragment>
  );
}

export default App;
