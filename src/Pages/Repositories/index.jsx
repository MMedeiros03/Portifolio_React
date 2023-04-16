/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Cards from "../../Components/Card";
import Header from "../../Components/Header/Header";
import "./index.css";

function Repositories() {
  useEffect(() => {
    infoRepositoriesGitHub();
    infoUserGitHub();
  }, []);

  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState([]);

  const infoUserGitHub = async () => {
    const data = await fetch("https://api.github.com/users/MMedeiros03");
    const json = await data.json();
    setUser(json);
  };

  const infoRepositoriesGitHub = async () => {
    const data = await fetch(
      "https://api.github.com/users/MMedeiros03/starred"
    );
    const json = await data.json();
    setRepositories(json);
  };

  return (
    <div>
      <Header namePage="Projects" />
      <div className="Repository" style={{ maxHeight: "100%" }}>
        <div className="My_infos">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img className="Content_img" src={user.avatar_url} />
            <div style={{ flexDirection: "column", display: "flex" }}>
              <img
                height="180em"
                src="https://github-readme-stats.vercel.app/api?username=MMedeiros03&show_icons=true&theme=dark&include_all_commits=true&count_private=true"
              />
              <img
                height="180em"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=MMedeiros03&layout=compact&langs_count=7&theme=dark"
              />
            </div>
          </div>
        </div>

        <div className="My_Repositories">
          <Cards listRepositoryes={repositories} />
        </div>
      </div>
    </div>
  );
}

export default Repositories;
