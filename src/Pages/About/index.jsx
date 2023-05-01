/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { Carousel, Image, Tooltip } from "antd";
import "./index.css";
import { MdGTranslate } from "react-icons/md";
import {
  mdiLanguageJava,
  mdiLanguagePython,
  mdiLanguageJavascript,
  mdiLanguageCsharp,
  mdiLanguagePhp,
  mdiReact
} from "@mdi/js";
import Icon from "@mdi/react";

import Header from "../../Components/Header/Header";

import certificationIFSC from "../../Images/Diploma.png";
import certificationEntra21 from "../../Images/DiplomaEntra21.png";

function About() {
  const [translate, setTranslate] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const contentStyle = {
    margin: 0,
    height: "80vh",
    color: "#fff",
    textAlign: "center",
    lineHeight: "160px",
    background: "transparent"
  };

  const images = [certificationIFSC, certificationEntra21];

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <>
      <Header namePage="Informations" />
      <div className="About">
        <div
          className="Carousel"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 90
          }}
        >
          <div style={{ marginBottom: 20 }}>
            <span>
              <Tooltip title={translate ? "Translate" : "Traduzir"}>
                <MdGTranslate
                  size={30}
                  style={{ color: "white" }}
                  onClick={() => {
                    setTranslate(!translate);
                  }}
                />
              </Tooltip>
            </span>
          </div>
          <div
            className="ContentAbout"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            {translate ? (
              <span style={{ color: "white", fontSize: 25 }}>
                Como desenvolvedor fullstack júnior, possuo um conhecimento
                sólido de linguagens de programação como PHP, JavaScript, React
                JS e C#, bem como tecnologias de banco de dados como SQL Server
                e MySQL.
              </span>
            ) : (
              <span style={{ color: "white", fontSize: 25 }}>
                As a junior fullstack developer, I possess a solid understanding
                of programming languages like PHP, JavaScript, React JS, and C#,
                as well as database technologies like SQL Server and MySQL.
              </span>
            )}

            <br />
            <br />
            <br />

            {translate ? (
              <span style={{ color: "white", fontSize: 25 }}>
                Estou altamente motivado e entusiasmado em expandir meus base de
                conhecimento e conjunto de habilidades, e eu me esforço
                continuamente para desenvolver e fornecer soluções eficazes para
                todos os projetos em que trabalho.
              </span>
            ) : (
              <span style={{ color: "white", fontSize: 25 }}>
                I am highly motivated and enthusiastic about expanding my
                knowledge base and skill set, and I continuously strive to
                develop and provide effective solutions for every project I work
                on.
              </span>
            )}

            <br />
            <br />
            <br />

            {translate ? (
              <span style={{ color: "white", fontSize: 25 }}>
                Sou formado em informática pelo Instituto Federal de Santa
                Catarina, e ter concluído um curso profissionalizante de Python
                através do programa Entra21 na BluSoft, que teve a duração de
                seis meses.
              </span>
            ) : (
              <span style={{ color: "white", fontSize: 25 }}>
                I hold a degree in computer technology from the Federal
                Institute of Santa Catarina, and have completed a professional
                Python course through the Entra21 program at BluSoft, which
                lasted six months.
              </span>
            )}
          </div>
        </div>
        <div className="Carousel">
          <Carousel>
            <div style={contentStyle}>
              <span className="TitleAbout" style={{ color: "white" }}>
                {translate ? "Tecnlogias" : "Stacks"}
              </span>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Icon color="white" path={mdiLanguageJava} size={4} />
                {translate ? (
                  <span style={{ color: "white" }}>
                    Primeira linguagem de programação. Comecei meus estudos com
                    ela. Sinceramente, não gosto :).
                  </span>
                ) : (
                  <span style={{ color: "white" }}>
                    First programming language. I started my studies with her.
                    Honestly, I don´ like it :).
                  </span>
                )}

                <span style={{ color: "white", marginRight: 5 }}>Java</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Icon color="white" path={mdiLanguagePython} size={4} />
                {translate ? (
                  <span style={{ color: "white" }}>
                    Com ele aprofundei meus conhecimentos em programação e
                    entendi o que era programar de verdade.
                  </span>
                ) : (
                  <span style={{ color: "white" }}>
                    With him I deepened my knowledge in programming and
                    understood what it was like to program for real.
                  </span>
                )}

                <span style={{ color: "white", marginRight: 5 }}>Python</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Icon color="white" path={mdiLanguageJavascript} size={4} />
                {translate ? (
                  <span style={{ color: "white" }}>
                    Quando direcionei meus estudos para desenvolvimento web e
                    pelo amplo uso no mercado
                  </span>
                ) : (
                  <span style={{ color: "white" }}>
                    When I directed my studies towards web development and at
                    wide use in the market
                  </span>
                )}

                <span style={{ color: "white", marginRight: 5 }}>
                  JavaScript
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Icon color="white" path={mdiLanguagePhp} size={4} />
                {translate ? (
                  <span style={{ color: "white" }}>
                    Linguagem mais usada no momento. Eu uso muito para integrar
                    ERP´s e CRM´s
                  </span>
                ) : (
                  <span style={{ color: "white" }}>
                    Language most used at the moment. I use it a lot to
                    integrate ERP´s and CRM´s
                  </span>
                )}

                <span style={{ color: "white", marginRight: 5 }}>PHP</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Icon color="white" path={mdiLanguageCsharp} size={4} />
                {translate ? (
                  <span style={{ color: "white" }}>
                    Linguagem atual que estou estudando e usando no trabalho. É
                    a linguagem que mais quero dominar e trabalhar.
                  </span>
                ) : (
                  <span style={{ color: "white" }}>
                    Current language I´m studying and using at work. It´s the
                    language I most want to master and work with.
                  </span>
                )}
                <span style={{ color: "white", marginRight: 5 }}>Csharp</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Icon color="white" path={mdiReact} size={4} />
                {translate ? (
                  <span style={{ color: "white" }}>
                    Framework que utilizo no desenvolvimento frontend. Eu não
                    sou um excelente dev frontend, mas desenvolvo tranquilamente
                  </span>
                ) : (
                  <span style={{ color: "white" }}>
                    Framework that I use in frontend development. I´m not an
                    excellent frontend dev, but I can develop without problems.
                  </span>
                )}

                <span style={{ color: "white", marginRight: 5 }}>React</span>
              </div>
            </div>
            <div>
              <div style={contentStyle}>
                <span className="TitleAbout" style={{ color: "white" }}>
                  {translate ? "Certificações" : "Certifications"}
                </span>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none"
                      }}
                      onClick={prevImage}
                    >
                      {"<<"}
                    </button>
                    <Image
                      width={673}
                      height={433}
                      src={images[currentImage]}
                      alt="Imagem"
                    />
                    <button
                      style={{
                        backgroundColor: "transparent",
                        color: "white",
                        border: "none"
                      }}
                      onClick={nextImage}
                    >
                      {">>"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default About;
