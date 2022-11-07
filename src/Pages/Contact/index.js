import Header from '../../Components/Header/Header';
import React from "react";
import './index.css';
function Contact() {

  return (
    <>
        <Header/>

        <div className='Contact'>
            <div className='Contact_Infos'>
              <div className='teste'>
                <h1 className='content_contact'>Get in touch</h1>
                <br></br>
                <h2 className='content_contact'>Email: matheusmedeiros2003@gmail.com</h2>
                <br></br>
                <h2 className='content_contact'>Phone: (47) 996065225</h2>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. 
                Cras pulvinar, nisi at imperdiet pharetra
              </div>
            </div>

            <div className='Social_Medias'>
                <div className='icons'>
                  <h1>My Social Medias</h1>
                  <a href="https://www.linkedin.com/in/matheus-medeiros-3975b6216" class="fa fa-linkedin"></a>
                  <a href="https://www.instagram.com/m_medeiross03/" class="fa fa-instagram"></a>
                  <a href="mailto:matheusmedeiros2003@gmail.com" class="fa fa-google"></a>
                  <a href="https://wa.me/5547996065225" class="fa fa-whatsapp"></a>
                </div>
            </div>
        </div>
    </>
  );
}

export default Contact;
