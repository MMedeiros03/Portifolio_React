/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Carousel } from "antd";
import "./index.css";
import Header from "../../Components/Header/Header";

function About() {
  const contentStyle = {
    margin: 0,
    height: "80vh",
    color: "#fff",
    textAlign: "center",
    lineHeight: "160px",
    background: "transparent"
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Header namePage="About" />
      <div className="About">
        <div className="Carousel">
          <div className="teste" />
        </div>
        <div className="Carousel">
          <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle} />
            </div>
            <div>
              <h3 style={contentStyle} />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default About;