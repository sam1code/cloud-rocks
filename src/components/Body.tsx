import { Container } from "@mui/material";
import React from "react";
import Left1stTable from "./Atoms/Left1stTable";
import Left2ndTable from "./Atoms/Left2ndTable";
import RightTable from "./Atoms/RightTable";

const Body = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "4rem",
      }}
    >
      <div
        style={{
          flex: 1.5,
          marginLeft: "2rem",
          marginRight: "2rem",
          maxWidth: "60rem",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "20rem" }}>
          <Left1stTable />
        </div>
        <div style={{ maxWidth: "20rem" }}>
          <Left2ndTable />
        </div>
      </div>
      <Container style={{ flex: 0.5, maxWidth:"20rem" }}>
        <RightTable />
      </Container>
    </div>
  );
};

export default Body;
