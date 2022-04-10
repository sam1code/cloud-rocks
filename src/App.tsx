import { Container } from "@mui/material";
import React from "react";
import { Body, Graph, NavBar } from "./components";

const App = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          overflowX: "hidden",
          marginTop: 100,
          position: "absolute",
          left: 0,
        }}
      >
        <Graph />
        <Body />
      </div>
    </>
  );
};

export default App;
