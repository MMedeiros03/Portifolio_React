/* eslint-disable react/button-has-type */
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./index.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Header from "../../Components/Header/Header";
import myphoto from "../../Images/myphoto.jpeg";

function Home() {
  const [user, setUser] = useState([]);

  const infoUserGitHub = async () => {
    const data = await fetch("https://api.github.com/users/MMedeiros03");
    const json = await data.json();
    setUser(json);
  };

  useEffect(() => {
    infoUserGitHub();
  }, []);

  return (
    <div className="App">
      <Header namePage="Home" />
      <div className="Home">
        <div className="Intro">
          <div>
            <p>{user.name}</p>
            Junior Software Developer
            <br />
            <p className="Intro_txt">{user.bio}</p>
            <div className="btns">
              <Link to="/informations">
                <button className="btn_home">Informations</button>
              </Link>

              <Link to="/contact">
                <button className="btn_home">Contact</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="Img">
          <LazyLoadImage
            className="my_img"
            alt="my_img"
            src={myphoto} // use normal <img> attributes as props
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
