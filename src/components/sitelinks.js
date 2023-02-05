import { Grid, ListItem, useMediaQuery } from "@mui/material";
import React from "react";
import { siteLinks } from "../utils/utils";

const SiteLinks = () => {
  const matches = useMediaQuery("@media (max-width:975px)");
  return (
    <>
      <div
        style={{
          backgroundColor: "#f1f1f1",
          borderColor: "#DEE1E3",
          borderTop: "1px solid #DEE1E3",
          padding: "48px 48px 20px 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          <div style={{ width: "80%" }}>
            <Grid
              container
              spacing={{ xs: 3, md: 4 }}
              columns={{ xs: 4, sm: 6, md: 12 }}
            >
              {siteLinks.map((item, index) => (
                <>
                  <Grid item xs={2} sm={3} md={3} key={index}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "Column",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        {" "}
                        <span
                          style={{
                            color: "#252525",
                            fontSize: "16px",
                            fontWeight: "700",
                            lineHeight: 1.5,
                            marginBottom: "5px",
                          }}
                        >
                          {item.title}
                        </span>{" "}
                      </div>
                      {item.links.map((link, ind) => (
                        <>
                          <div>
                            <a
                              className="underline"
                              href={link.url}
                              style={{
                                fontSize: "16px",
                                fontWeight: 400,
                                color: "#252525",
                                lineHeight: "36px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              {link?.icon && (
                                <>
                                  {" "}
                                  <img
                                    src={link?.icon}
                                    alt="chrome extension"
                                    height="16"
                                    width="16"
                                  />
                                  &nbsp;
                                </>
                              )}

                              {link.text}
                            </a>
                          </div>
                        </>
                      ))}
                    </div>
                  </Grid>
                </>
              ))}
            </Grid>
          </div>
          <div style={{ paddingTop: matches ? "35px" : "" }}>
            <div>
              {" "}
              <span
                style={{
                  color: "#252525",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: 1.5,
                  marginBottom: "5px",
                }}
              >
                Get To Know Us
              </span>{" "}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                paddingTop: "20px",
              }}
            >
              <div>
                <a href="#">
                  <img src="	https://assets.quillbot.com/images/theme/commonImages/footer/linkedin.svg" />
                </a>
              </div>

              <div>
                <a href="#">
                  <img
                    src="https://assets.quillbot.com/images/theme/commonImages/footer/facebook.svg"
                    width={32}
                  />
                </a>
              </div>

              <div>
                <a href="#">
                  <img src="	https://assets.quillbot.com/images/theme/commonImages/footer/twitter.svg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src=" https://assets.quillbot.com/images/theme/commonImages/footer/instagram.svg" />
                </a>
              </div>
            </div>
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

export default SiteLinks;
