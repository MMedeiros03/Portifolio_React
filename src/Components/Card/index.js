
import { Card } from 'antd';
import React from 'react';
import './index.css';
const { Meta } = Card;
const Cards = ({name, description, link, language}) => {
  var url_img = '';

    switch (language){
      case "Python": 
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
        break
      case "JavaScript":
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
        break;
      case "HTML":
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
        break
      case "C#":
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
        break
      case "Java":
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
        break
      case "CSS":
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
        break
      default:
        url_img = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg";
        break
    }


  return (
    <div className='Cards'>
      <Card
        style={{
          marginTop: 16,
          backgroundColor: "transparent"
        }}
      >
        <a className='links' href={link}>
            <Meta
              style={{backgroundColor: "transparent"}}
              title={name}
              description={description}
            />
        </a>
        <img className='img_language' src={url_img}/>
      </Card>

      <Card
        style={{
          marginTop: 16,
          backgroundColor: "transparent"
        }}
        >
        </Card>
    </div>
  );
};
export default Cards;