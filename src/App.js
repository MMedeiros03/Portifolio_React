import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import { useEffect } from "react";
import './App.css';
function App() {


  useEffect(() => {
    fetch('https://api.github.com/users/MMedeiros03')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <SideBar /> */}
      <div className="Home">
          <div className="Intro">
            I'am Matheus Medeiros
            <br></br>
            Junior Software Developer 
            <br></br>
            <p className="Intro_txt">text</p>
            <div className="btns">
              <button className="btn_home">Informations</button>
              <button className="btn_home">Contact</button>
            </div>
          </div>          
          <div className="Img">
            <div className="Content_img">
              
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
