import Header from '../../Components/Header/Header';
// import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import { useState,useEffect } from "react";
import './index.css';
function Repositories() {

useEffect(() => {
    infoRepositoriesGitHub();
    infoUserGitHub();
}, []);


const [repositories, setRepositories] = useState([]);
const [user, setUser] = useState([]);

const infoUserGitHub = async () => {
    const data  = await fetch('https://api.github.com/users/MMedeiros03');
    const json = await data.json();
    setUser(json);
}

const infoRepositoriesGitHub = async () => {
    const data  = await fetch('https://api.github.com/users/MMedeiros03/repos');
    const json = await data.json();
    setRepositories(json);
}

  return (
    <>
      <Header />

        <div className='My_infos'>
            <div>
                <img className="Content_img" src={user.avatar_url} />
            </div>
        </div>

        {/* <div className='My_Repositories'>
            <div className='Card'>...</div>
        </div> */}
        {/* {repositories.map(e => (e.name))} */}

    </>
  );
}

export default Repositories;
