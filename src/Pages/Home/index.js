import Header from '../../Components/Header/Header';
import { Link } from "react-router-dom";
import { Modal } from 'antd';
import React from "react";
import { useState,useEffect } from "react";
import './index.css';
// import 'antd/dist/antd.css';
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

  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Modal open={isModalOpen} onCancel={handleCancel} closable={false} footer={null} className="ModalHome">
        <Link to='/about'>Informations</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/repositories'>Projects</Link>
      </Modal>
      <div className="Home">
          <div className="Intro">
            <p>{user.name}</p>
            Junior Software Developer 
            <br></br>
            
            <p className="Intro_txt">{user.bio}</p>
            <div className="btns">
              <Link to='/about'>
                <button className="btn_home">Informations</button>
              </Link>
                
              <Link to='/contact'>
                <button className="btn_home">Contact</button>
              </Link>
            </div>
          </div>          
          <div className="Img">
            <img  className='Content_Img' src={user.avatar_url} />
          </div>
      </div>
    </div>
  );
}

export default Home;
