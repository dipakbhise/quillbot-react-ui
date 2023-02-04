// import { pricingPlans } from "@/utils/utils";
import { InfoOutlined } from "@mui/icons-material";
import { Button, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pricingPlans } from "../utils/utils";
import TooltipComp from "./tooltip";

const Plans = () => {
  const matches = useMediaQuery("@media (max-width:975px)");
  const [isFreeBtnHover, setIsFreeBtnHover] = useState(false); // to detect hover and mouse leave of free plan button
  const [isPremiumBtnHover, setIsPremiumBtnHover] = useState(false); // to detect hover and mouse leave of premium plan button

  // to detect hover of free and premium plan button
  const handleMouseEnter = (id) => {
    if (id === 1) {
      setIsFreeBtnHover(true);
    } else if (id === 2) {
      setIsPremiumBtnHover(true);
    }
  };

  // to detect mouse leave of free and premium plan button
  const handleMouseLeave = (id) => {
    if (id === 1) {
      setIsFreeBtnHover(false);
    } else if (id === 2) {
      setIsPremiumBtnHover(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "46px 7px",
        }}
      >
        <span
          style={{
            fontWeight: "normal",
            fontSize: "30px",
            letterSpacing: "-0.03em",
            textAlign: "center",
          }}
        >
          Experience the full power of QuillBot
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
          marginBottom: "10px",
          flexDirection: matches && "column-reverse",
        }}
      >
        {pricingPlans.map((item, index) => (
          <>
            <div
              style={{
                border: "1px solid #DEE1E3",
                marginRight: matches ? "0px" : "40px",
                width: matches ? "100%" : "29rem",
                boxShadow: "0px 4px 22px 0px #00000033",
                borderRadius: "10px",
                marginBottom:
                  matches && pricingPlans.length != index ? "40px" : "5px",
              }}
            >
              <div
                style={{
                  backgroundColor: item.background,
                  //   padding: "10px",
                  borderRadius: "10px 10px 0px 0px",
                  display: "flex",
                  alignItems: "center",
                  padding: "13px 14px",
                }}
              >
                {item.icon}
                <span
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    lineHeight: "25px",
                    letterSpacing: "1.5px",
                  }}
                >
                  {item.name}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  style={{ textDecoration: "none", width: "90%" }}
                >
                  <Button
                    variant="contained"
                    onMouseEnter={() => {
                      handleMouseEnter(item.id);
                    }}
                    onMouseLeave={() => {
                      handleMouseLeave(item.id);
                    }}
                    style={{
                      backgroundColor:
                        item.id === 1 && isFreeBtnHover
                          ? item.hoverBg
                          : item.id === 2 && isPremiumBtnHover
                          ? item.hoverBg
                          : item.background,
                      borderRadius: "20px",
                      marginBottom: "20px",
                      textTransform: "none",
                      fontSize: "17px",
                      padding: "10px, 16px",
                      boxShadow: "none",
                      width: "100%",
                    }}
                  >
                    {item.btnText}
                  </Button>
                </a>
              </div>

              {item.desc.map((desc, id) => (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid #DEE1E3",
                    }}
                  >
                    <div
                      style={{
                        padding:
                          index === 1 && id === 1
                            ? "1px 0px 1px 20px"
                            : "10px 0px 10px 20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {desc.icon}
                      <span style={{ marginLeft: "10px" }}>{desc.title}</span>
                    </div>
                    {desc?.tooltip && (
                      <div>
                        {" "}
                        <TooltipComp
                          title={desc?.tooltip?.title}
                          icon={<InfoOutlined />}
                          desc={desc?.tooltip?.desc}
                          titleCcolor={"rgb(242,181,24)"}
                          img={desc?.tooltip?.img}
                        />
                      </div>
                    )}
                  </div>
                </>
              ))}

              <div
                style={{
                  backgroundColor: "#EEEEEE",
                  //   padding: "10px",
                  borderRadius: "0px 0px 10px 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13px 14px",
                }}
              >
                <span
                  style={{
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    lineHeight: "25px",
                    letterSpacing: "1.5px",
                  }}
                >
                  {item.details}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <span style={{ fontSize: "14px" }}>*Scan up to 20 pages a month</span>
      </div>
    </>
  );
};

export default Plans;
