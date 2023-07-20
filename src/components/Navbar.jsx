import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "end", padding: "10px" }}>
      <ButtonGroup variant="text" aria-label="text button group">
        <div
          style={{
            display: "flex",
            width: "120px",
            height: "36px",
            paddingTop: "12px",
            paddingBottom: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to={"/"}>
            <Button
              href="/"
              style={{
                borderRadius: "0px",
                color: "#68ECED",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "0.7px",
              }}
            >
              POSTS
            </Button>
          </Link>
        </div>

        <div style={{ borderRight: "1px solid #FFF" }}></div>

        <div
          style={{
            display: "flex",
            width: "120px",
            height: "36px",
            paddingTop: "12px",
            paddingBottom: "12px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
          }}
        >
          <Link to={"/users"}>
            <Button
              href="/users"
              style={{
                color: "#D6D6D6",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "normal",
                letterSpacing: "0.7px",
              }}
            >
              USERS
            </Button>
          </Link>
        </div>
      </ButtonGroup>
    </Box>
  );
};

export default Navbar;
