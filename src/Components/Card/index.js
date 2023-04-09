
import { Carousel } from 'antd';
import React from 'react';
import './index.css';

const Cards = ({listRepositoryes}) => {

    const decideStack = (language) => {
      switch (language){
        case "Python": 
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg";
        case "JavaScript":
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
        case "HTML":
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg";
        case "C#":
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg";
        case "Java":
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
        case "CSS":
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg";
        default:
          return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg";
      }
    }
    

    const contentStyle = {
      width: "100%",
      height: '500px',
      color: '#fff',
      lineHeight: '500px',
      textAlign: 'center',
      background: 'black',
    };


  return (
    <Carousel >
      {listRepositoryes.map((repository) => (
        <div style={{width:"80%", height:"80%"}}>
          <div style={contentStyle}>
            <img 
              style={{width:250, height: 100}}
              src={decideStack(repository.language)}
              />
            <h1>
              {repository?.name}
            </h1>
            <h2 style={{color: "#fff"}}> 
            {repository?.description}
            </h2>
          </div>
        </div>
      ))}
    
  </Carousel>
  );
};
export default Cards;