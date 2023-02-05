import React from "react";
import { legal } from "../utils/utils";

const Footer = () => {
  return (
    <>

      <div
        style={{
          backgroundColor: "#E0E0E0",
          padding: "12px 30px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            color: "#252525",
            // alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{ paddingRight: "80px", paddingTop: "8px", width: "100%" }}
            >
              <span>© QuillBot (Course Hero), LLC. 2023</span>
            </div>
            <div
              style={{
                display: "flex",
                // gap: "9px",
                alignItems: "center",
                paddingTop: "15px",
                fontSize: "14px",
                width: "100%",
              }}
            >
            {legal.map((item) => (
              <>
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "#252525",
                      borderRadius: "50%",
                      margin:'0px 9px'
                    }}
                  ></span>{" "}
                  <a
                    href={item.url}
                    style={{
                      color: "#252525",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                    className="underline"
                  >
                    {item.text}
                  </a>
              </>
            ))}
            </div>
          </div>

          <div style={{ paddingTop: "12px", paddingBottom: "18px" }}>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "#252525",
              }}
            >
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms of Service apply.
            </span>
          </div>
        </div>

        <div style={{ paddingTop: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#252525",
              fontSize: "14px",
              paddingBottom: "10px",
            }}
          >
            {" "}
            Made with &nbsp;{" "}
            <img src="https://assets.quillbot.com/emojis/solid_corn.svg" />{" "}
            &nbsp; at &nbsp;{" "}
            <a href="" style={{ textDecoration: "underline" }}>
              {" "}
              UIUC
            </a>{" "}
          </div>
        </div>
      </div>

      <style jsx>{`
        .underline:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Footer;
