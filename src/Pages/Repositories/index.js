
import Cards from '../../Components/Card';
import Header from '../../Components/Header/Header';
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

console.log(repositories);

  return (
    <>
    <Header />

    <div className='Repository'>
        <div className='My_infos'>
            <img className="Content_img" src={user.avatar_url} />
            <p>{user.name}</p>
            <p className='login'>{user.login}</p>
            <p className='bio'>{user.bio}</p>
        </div>

        <div className='My_Repositories'>
            {repositories.map(repository => {
                return (
                <>
                    <Cards
                        name = {repository.name}
                        description = {repository.description}
                        link = {repository.html_url}
                        language = {repository.language}
                    />
                </>  
            )})}
            
        </div>
        
    </div>


    </>
  );
}

export default Repositories;
