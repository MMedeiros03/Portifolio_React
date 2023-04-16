import React from "react";
import ptBR from "antd/es/locale/pt_BR";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Repositories from "./Pages/Repositories";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <ConfigProvider
      locale={ptBR}
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: "rgb(27, 27, 27)",
          backgroundColor: "rgb(27, 27, 27)",
          borderRadius: 16
        }
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories" element={<Repositories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;
