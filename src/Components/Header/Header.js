import './Header.css'
import { Link } from "react-router-dom";
import { Modal } from 'antd';
import { useState } from "react";
function Header(props) {

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
        <p className='contentHeader'>
          {props.namePage}
        </p>
        <p className='contentHeader'>
        <Link to='/'>
          MMedeiros03
        </Link>
        </p>
        <Modal open={isModalOpen} onCancel={handleCancel} closable={null} footer={null} className="ModalHome">
          <Link to='/about'><p>Informations</p></Link>
          <Link to='/contact'><p>Contact</p></Link>
          <Link to='/repositories'><p>Projects</p></Link>
          <Link to='/'><p onClick={handleCancel}>Home</p></Link>
        </Modal>
      </div>
    );
  }
  
  export default Header;
  