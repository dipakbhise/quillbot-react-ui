import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";

const data = [
  {
    text: "Increase your productivity",
    desc: "Paraphrase more text at once to finish writing faster.",
    id: 1,
    url: "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
  },
  {
    text: "Access all modes",
    desc: "Get maximum control over how you paraphrase.",
    id: 2,
    url: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
  },
  {
    text: "Scan for plagiarism",
    desc: "Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.",
    id: 3,
    url: "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
  },
  {
    text: "Compare all mode outputs at once",
    desc: "Paraphrase in and compare outputs from all seven modes.",
    id: 4,
    url: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
  },
];

const Banner = () => {
  const matches = useMediaQuery("@media (max-width:1300px)");
  const [index, setIndex] = useState(1);

  useEffect(() => {

    // To call continously function of app features
    let interval = setInterval(() => {
      if (index > data.length) {
        setIndex(0);
      } else {
        console.log("index", index);
        if (index + 1 <= data.length) {
          setIndex(index + 1);
        } else {
          setIndex(1);
        }
      }
    }, 4950);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div>
      <div
        style={{
          background:
            "url(https://assets.quillbot.com/images/theme/light/premiumPage/topBg.svg)",
          backgroundSize: "auto 99%",
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: matches && '27rem'
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <div style={{ marginBottom: "70px", marginTop: "-10px" }}>
            <img
              src={data[index - 1]?.url}
              alt="available Words"
              style={{ width: matches ? '21rem' : "35rem", height: matches ? '13rem' : "23rem" }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "70px",
            }}
          >
            {matches ? (
              <>
                <div style={{ marginBottom: "20px", width: matches ? '80%':"50%" }}>
                  <div>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color:  "black" 
                      }}
                    >
                      {" "}
                      {data[index - 1]?.text}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "1rem",
                      margin: "5px 0px 10px",
                      lineHeight: "22px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1rem",
                        color: "#505050",
                      }}
                    >
                      {" "}
                      {data[index-1]?.desc}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "auto",
                      position: "relative",
                      height: "3px",
                      backgroundColor: "rgb(222, 225, 227)",
                    }}
                  >
                    <div
                      id={"line_l"}
                      duration="4.95s"
                      style={{
                        display: "block",
                        height: "3px",
                        position: "absolute",
                        top: "0px",
                        backgroundColor: "#499557",
                        animationDuration: "4.95s",
                        width: "auto",
                      }}
                    ></div>
                  </div>
                </div>
              </>) : (
              data?.map((item, id) => (
                <>
                  {" "}
                  <div style={{ marginBottom: "20px", width: "50%" }}>
                    <div>
                      <span
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: index - 1 === id ? "black" : "#499557",
                        }}
                      >
                        {" "}
                        {item.text}
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "1rem",
                        margin: "5px 0px 10px",
                        lineHeight: "22px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "1rem",
                          color: "#505050",
                        }}
                      >
                        {" "}
                        {item.desc}
                      </span>
                    </div>
                    <div
                      style={{
                        width: "auto",
                        position: "relative",
                        height: "3px",
                        backgroundColor: "rgb(222, 225, 227)",
                      }}
                    >
                      <div
                        id={index - 1 === id ? "line_l" : null}
                        duration="4.95s"
                        style={{
                          display: "block",
                          height: "3px",
                          position: "absolute",
                          top: "0px",
                          backgroundColor: "#499557",
                          animationDuration: "4.95s",
                          width: "auto",
                        }}
                      ></div>
                    </div>
                  </div>
                </>
              ))
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        #line_l {
          -webkit-animation: line_l_animation 4.95s infinite;
          animation: line_l_animation 4.95s infinite;
        }

        @-webkit-keyframes line_l_animation {
          0% {
            width: 0px;
          }
          100% {
            width: 100%;
          }
        }

       @keyframes line_l_animation {
          0% {
            width: 0px;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
