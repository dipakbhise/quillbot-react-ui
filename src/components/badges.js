import { Button, ListItem, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "intersection-observer"; // For IE11
import { ThumbUpOutlined } from "@mui/icons-material";
import { features } from "../utils/utils";

const Badges = () => {
  const matches = useMediaQuery("@media (max-width:975px)");
  const badgeRef = useRef(null);
  const observer = useRef(null);

  const [timePercentage, settimePercentage] = useState(0); //For time badge
  const [userPercentage, setuserPercentage] = useState(0); // For percentage badge
  const [studentPercentage, setstudentPercentage] = useState(0); // for student badge
  const [users, setusers] = useState(0); // for usercount badge
  const [isFocused, setIsFocused] = useState(false); // to add animation on badge div focus

  const [isBtnHover, setIsBtnHover] = useState(false);

  const handleMouseEnter = () => {
    setIsBtnHover(true);
  };
  const handleMouseLeave = () => {
    setIsBtnHover(false);
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsFocused(true);
        setTimeout(() => {
          if (timePercentage < 75) {
            settimePercentage(timePercentage + 1);
          }
        }, 50);

        setTimeout(() => {
          if (userPercentage < 100) {
            setuserPercentage(userPercentage + 1);
          }
        }, 50);

        setTimeout(() => {
          if (users < 50) {
            setusers(users + 5);
          }
        }, 550);

        setTimeout(() => {
          if (studentPercentage < 85) {
            setstudentPercentage(studentPercentage + 1);
          }
        }, 50);
      } else {
        setstudentPercentage(0);
        settimePercentage(0);
        setuserPercentage(0);
        setusers(0);
        setIsFocused(false);
      }
    });
  };

  useEffect(() => {
    // To detect focus badges div (intersection of scroll bar and div) and call function
    observer.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    observer.current.observe(badgeRef.current);

    return () => {
      observer.current.unobserve(badgeRef.current);
    };
  }, [userPercentage]);

  return (
    <>
      <div
        style={{
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://assets.quillbot.com/images/theme/light/premiumPage/bottomBg.svg)",
          backgroundSize: "100% auto",
          padding: "26px 0px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          <div
            style={{
              fontWeight: "400",
              fontSize: "26px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            <span> Write better, faster, and clearer instantly</span>
          </div>

          <div style={{ width: "100%", textAlign: "center" }}>
            <p style={{ maxWidth: "470px", margin: "0px auto 58px" }}>
              {" "}
              QuillBot is trusted by students, professional writers, and
              business people who want to write more effectively.
            </p>
          </div>
        </div>

        <div
          ref={badgeRef}
          className={isFocused ? "badges" : null}
          style={{
            display: "flex",
            flexDirection: matches && "column",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          <div className="app">
            <div style={{ width: 150, marginLeft: 70, position: "relative" }}>
              <CircularProgressbar
                value={timePercentage}
                text={`${timePercentage}%`}
                style={{ position: "relative", color: "red", fontSize: "40px" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "62%",
                  left: "21%",
                  textAlign: "center",
                  color: "rgb(73, 149, 87)",
                  fontWeight: "bold",
                }}
              >
                Time Saved
              </span>
            </div>
            <div
              style={{
                width: "20rem",
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              <span style={{ textAlign: "center" }}>
                Average time savings per writing project.
              </span>
            </div>
          </div>

          <div className="app" style={{ margin: matches && "2rem 0px" }}>
            <div style={{ width: 150, marginLeft: 70, position: "relative" }}>
              <CircularProgressbar
                value={userPercentage}
                text={`${users}+`}
                style={{ position: "relative", color: "red" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "62%",
                  left: "35%",
                  textAlign: "center",
                  color: "rgb(73, 149, 87)",
                  fontWeight: "bold",
                }}
              >
                million
              </span>
            </div>
            <div
              style={{
                width: "20rem",
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              <span style={{ textAlign: "center" }}>
                Trusted by millions worldwide.
              </span>
            </div>
          </div>

          <div className="app">
            <div style={{ width: 150, marginLeft: 70, position: "relative" }}>
              <CircularProgressbar
                value={studentPercentage}
                text={`${studentPercentage}%`}
                style={{ position: "relative", color: "red" }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "62%",
                  left: "23%",
                  color: "rgb(73, 149, 87)",
                  fontWeight: "bold",
                }}
              >
                of students
              </span>
            </div>
            <div
              style={{
                width: "20rem",
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              <span style={{ textAlign: "center" }}>
                Who reported their grades improved after using QuillBot.
              </span>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
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
                marginBottom: "35px",
                textTransform: "none",
                fontSize: "17px",
                padding: "8px 40px",
                boxShadow: "none",
                backgroundColor: isBtnHover ? "#308140" : "#499557",
                fontWeight: "700",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Upgrade to Premium
            </Button>
          </a>
        </div>

        {features?.map((feature, index) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#252525",
                padding:'0px 24px 24px 24px'

                // marginTop: "80px",
              }}
            >
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "1.25rem",
                  marginBottom: "10px",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <span> {feature.title}&nbsp;</span>
                </div>{" "}
                {feature.icon}
              </div>

              <div style={{ width: "100%", textAlign: "center" }}>
                <p style={{ marginTop: "2px" }}> {feature.desc}</p>
              </div>
            </div>
          </>
        ))}
      </div>

      <style jsx>{`
        .badges {
          animation: fadeInAnimation ease-in 1s;
          animation-iteration-count: 1;
          animation-fill-mode: forwards;
        }

        @keyframes fadeInAnimation {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Badges;
