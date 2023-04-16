/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Header from "../../Components/Header/Header";
import "./index.css";

function Contact() {
  return (
    <>
      <Header namePage="Contact" />

      <div className="Contact">
        <div className="Contact_Infos">
          <div className="teste">
            <h1 className="content_contact">Get in touch</h1>
            <br />
            <h2 className="content_contact">
              Email: matheusmedeiros2003@gmail.com
            </h2>
            <br />
            <h2 className="content_contact">Phone: (47) 996065225</h2>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet
            pharetra
            <div className="Icons">
              <h1>My Social Medias</h1>
              <a
                href="https://www.linkedin.com/in/matheus-medeiros-3975b6216"
                className="fa fa-linkedin"
              />
              <a
                href="https://www.instagram.com/m_medeiross03/"
                className="fa fa-instagram"
              />
              <a
                href="mailto:matheusmedeiros2003@gmail.com"
                className="fa fa-google"
              />
              <a
                href="https://wa.me/5547996065225"
                className="fa fa-whatsapp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
