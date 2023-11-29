/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ProductIcons3 = ({
  color = "url(#paint0_linear_4571_526)",
  stroke = "url(#paint1_linear_4571_526)",
  fill = "url(#paint2_linear_4571_526)",
  className,
}) => {
  return (
    <svg
      className={`product-icons-3 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.5074 12.9H8.50745C6.15745 12.9 4.25745 11 4.25745 8.65V8.25C4.25745 5.9 6.15745 4 8.50745 4H12.5074C14.8574 4 16.7574 5.9 16.7574 8.25V8.65C16.7574 10.99 14.8474 12.9 12.5074 12.9Z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2.7"
      />
      <path
        className="path"
        d="M16.7772 16.9H12.7772C10.4272 16.9 8.52722 15 8.52722 12.65V12.25C8.52722 9.9 10.4272 8 12.7772 8H16.7772C19.1272 8 21.0272 9.9 21.0272 12.25V12.65C21.0272 15 19.1272 16.9 16.7772 16.9Z"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeWidth="2.7"
      />
      <path
        className="path"
        d="M5.45738 18.6L5.20738 18.99C5.14738 19.09 5.02738 19.12 4.93738 19.06L3.65738 18.3C3.55738 18.24 3.52738 18.12 3.58738 18.03L3.83738 17.64C3.89738 17.54 3.86738 17.42 3.76738 17.37L3.09738 16.98C2.96738 16.9 2.96738 16.71 3.09738 16.63L6.43738 14.75C6.57738 14.67 6.73738 14.77 6.73738 14.93L6.69738 18.77C6.69738 18.92 6.52738 19.02 6.39738 18.94L5.72738 18.55C5.64738 18.47 5.51738 18.51 5.45738 18.6Z"
        fill={fill}
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_259"
          x1="2.89831"
          x2="18.1056"
          y1="8.44539"
          y2="8.44539"
        >
          <stop className="stop" stopColor="#870FFF" />
          <stop className="stop" offset="1" stopColor="#E7CFFF" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_259"
          x1="7.16903"
          x2="22.3764"
          y1="12.4546"
          y2="12.4546"
        >
          <stop className="stop" stopColor="#FFDDCD" />
          <stop className="stop" offset="1" stopColor="#FF5403" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_1_259"
          x1="3.66382"
          x2="7.30936"
          y1="15.6385"
          y2="17.8092"
        >
          <stop className="stop" stopColor="#FCFF1C" />
          <stop className="stop" offset="1" stopColor="#FF9D0A" />
        </linearGradient>
      </defs>
    </svg>
  )
};

ProductIcons3.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};
