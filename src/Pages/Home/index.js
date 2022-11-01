import Header from '../../Components/Header/Header';
import { Link } from "react-router-dom";
// import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import { useState,useEffect } from "react";
import './index.css';
function Home() {

const [user, setUser] = useState([]);
 useEffect(() => {
  infoUserGitHub();
}, []);

  const infoUserGitHub = async () => {
      const data  = await fetch('https://api.github.com/users/MMedeiros03');
      const json = await data.json();
      setUser(json);
  }
  return (
    <div className="App">
      <Header />
      {/* <SideBar /> */}
      <div className="Home">
          <div className="Intro">
            {user.name}
            <br></br>
            Junior Software Developer 
            <br></br>
            <p className="Intro_txt">{user.bio}</p>
            <div className="btns">
              <Link to='/repositories'>
                <button className="btn_home">Informations</button>
              </Link>
                


                <button className="btn_home">Contact</button>

            </div>
          </div>          
          <div className="Img">
            <div className="Content_img">
              <img src={user.avatar_url} />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;
