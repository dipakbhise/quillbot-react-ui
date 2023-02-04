import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import "./style/tooltip.css";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgb(50,50,50)",
    position: "relative",
    right: "45%",
    padding: "10px",
    color: "white",
    maxWidth: "296",
    // width:'22rem',
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
    arrow: {
      position: "relative",
      left: "100px",
      "&:before": {
        border: "1px solid #E6E8ED",
        right: 10,
        position: "absolute",
        left: "100px",
      },
    },
  },
}));


const TooltipComp = ({ title, desc, titleCcolor, icon, img }) => {

  
const [isHover, setIsHover] = React.useState(false);

const handleMouseEnter = () => {
  setIsHover(true);
};
const handleMouseLeave = () => {
  setIsHover(false);
};

  return (
    <>
      <div style={{ width: "100%" }}>
        <HtmlTooltip
          fullwidth
          arrow
          title={
            <React.Fragment>
              <Typography
                color={titleCcolor}
                style={{ fontWeight: "500", fontSize: "16px" }}
              >
                {title}
              </Typography>
              <Typography
                style={{ fontSize: "13px", padding: "5px 0px 10px 0px" }}
              >
                {desc}
              </Typography>
              {img && (
                <>
                  {" "}
                  <img src={img} style={{ width: "270px" }} />
                </>
              )}
            </React.Fragment>
          }
        >
          <span
            className="btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ color: isHover ? '#F2B518' : "#C2C2C2", padding: "0px 20px" }}
          >
            {icon}
          </span>
        </HtmlTooltip>
      </div>
    </>
  );
};

export default TooltipComp;
