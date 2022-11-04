import React from "react";
import Home from "./Pages/Home";
import Repositories from "./Pages/Repositories";
import Contact from "./Pages/Contact";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/repositories" element={<Repositories />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>


    </>
  );
}

export default App;
