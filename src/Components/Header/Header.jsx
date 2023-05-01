/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import "./Header.css";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";
import {
  MdPermContactCalendar,
  MdOutlineHome,
  MdInfoOutline,
  MdOutlineDragHandle
} from "react-icons/md";

import { ProjectOutlined } from "@ant-design/icons";

function Header(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const iconPage = (page) => {
    switch (page) {
      case "Home":
        return <MdOutlineHome />;
      case "Contact":
        return <MdPermContactCalendar />;
      case "Informations":
        return <MdInfoOutline />;
      default:
        return <ProjectOutlined />;
    }
  };

  return (
    <div className="Header">
      <button className="btnModal" onClick={showModal} id="ativaModal">
        <MdOutlineDragHandle />
      </button>
      <p
        className="contentHeader"
        style={{
          alignItems: "center",
          display: "flex"
        }}
      >
        {iconPage(props.namePage)}
        <span style={{ marginLeft: 6 }}>{props.namePage}</span>
      </p>
      <p className="contentHeader">
        <Link to="/">MMedeiros03</Link>
      </p>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        closable={null}
        footer={null}
        className="ModalHome"
      >
        <Link to="/informations">
          <p className="itensModal">
            <MdInfoOutline />
            <span style={{ marginLeft: 6 }}>Informations</span>
          </p>
        </Link>
        <Link to="/contact">
          <p className="itensModal">
            <MdPermContactCalendar />
            <span style={{ marginLeft: 6 }}>Contact</span>
          </p>
        </Link>
        <Link to="/repositories">
          <p className="itensModal">
            <ProjectOutlined size={10} />
            <span style={{ marginLeft: 6 }}>Projects</span>
          </p>
        </Link>
        <Link to="/">
          <p onClick={handleCancel}>
            <MdOutlineHome />
            <span style={{ marginLeft: 6 }}>Home</span>
          </p>
        </Link>
      </Modal>
    </div>
  );
}

export default Header;
