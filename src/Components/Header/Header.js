import './Header.css'
import { Link } from "react-router-dom";
import { Modal } from 'antd';
import { useState } from "react";
function Header() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


    return (
      <div className="Header">
        <button className='btnModal' onClick={showModal} id='ativaModal'>==</button>
        <h2>
        <Link to='/'>
          MMedeiros03
        </Link>
        </h2>
        <Modal open={isModalOpen} onCancel={handleCancel} closable={null} footer={null} className="ModalHome">
          <Link to='/about'><p>Informations</p></Link>
          <Link to='/contact'><p>Contact</p></Link>
          <Link to='/repositories'><p>Projects</p></Link>
        </Modal>
      </div>
    );
  }
  
  export default Header;
  