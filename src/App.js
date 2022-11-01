import React from "react";
import Home from "./Pages/Home";
import Repositories from "./Pages/Repositories";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/repositories" element={<Repositories />}/>
      </Routes>
    </Router>


    </>
  );
}

export default App;
