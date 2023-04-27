/* eslint-disable react/prop-types */
import React from "react";
import "./index.css";
import { Col, Row } from "antd";
import Icon from "@mdi/react";
import {
  mdiLanguagePython,
  mdiLanguageJavascript,
  mdiLanguageHtml5,
  mdiLanguageCsharp,
  mdiLanguageJava,
  mdiLanguagePhp,
  mdiLanguageCss3,
  mdiLanguageMarkdownOutline
} from "@mdi/js";

function Cards({ listRepositoryes }) {
  const decideStack = (language) => {
    switch (language) {
      case "Python":
        return mdiLanguagePython;
      case "JavaScript":
        return mdiLanguageJavascript;
      case "HTML":
        return mdiLanguageHtml5;
      case "C#":
        return mdiLanguageCsharp;
      case "Java":
        return mdiLanguageJava;
      case "CSS":
        return mdiLanguageCss3;
      case "PHP":
        return mdiLanguagePhp;
      default:
        return mdiLanguageMarkdownOutline;
    }
  };

  return (
    <Row
      gutter={[12]}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {listRepositoryes?.map((repository) => (
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={4}
          xl={4}
          className="Card"
          style={{
            height: 300,
            marginTop: 15,
            marginRight: 10,
            backgroundColor: "rgba(0, 0, 0, 0.123)",
            color: "white",
            width: 250,
            maxHeight: "100%",
            fontSize: 12
          }}
        >
          <div
            style={{
              height: "15%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h1 style={{ margin: 0 }}>{repository.name}</h1>
          </div>
          <div
            style={{
              height: "42.5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Icon path={decideStack(repository?.language)} size={4} />
          </div>
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              height: "42.5%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h2 style={{ margin: 0, width: "min-content" }}>
              {repository.description}
            </h2>
          </div>
        </Col>
      ))}
    </Row>
  );
}
export default Cards;
