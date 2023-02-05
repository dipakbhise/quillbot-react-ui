import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React, { useState } from "react";

const Subheader = () => {
  const [isBtnHover, setIsBtnHover] = useState(false);

  const handleMouseEnter = () => {
    setIsBtnHover(true);
  };
  const handleMouseLeave = () => {
    setIsBtnHover(false);
  };

  return (
    <div>
      <h1
        style={{
          fontSize: "30px",
          margin: "30px 15px 15px",
          lineHeight: "41px",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        Save time and write with confidence
      </h1>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <a
          href={"https://quillbot.com/upgrade"}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="contained"
            style={{
              // backgroundColor: "#499557",
              borderRadius: "20px",
              marginBottom: "70px",
              textTransform: "none",
              fontSize: "17px",
              padding: "6px 60px",
              boxShadow: "none",
              backgroundColor: isBtnHover ? "#308140" : "#499557",
              fontWeight:'700',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Upgrade to QuillBot Premium
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Subheader;
