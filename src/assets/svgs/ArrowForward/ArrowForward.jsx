/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowForward = ({ className }) => {
  return (
    <svg
      className={`arrow-forward ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="20"
        id="mask0_1_7"
        maskUnits="userSpaceOnUse"
          style={{maskType: "alpha"}}
        width="20"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="20" width="20" />
      </mask>
      <g className="g" mask="url(#mask0_1_7)">
        <path
          className="path"
          d="M9.99996 16.0208L9.39579 15.4375L14.4166 10.4166H3.97913V9.58329H14.4166L9.39579 4.56246L9.99996 3.97913L16.0208 9.99996L9.99996 16.0208Z"
          fill="#131316"
        />
      </g>
    </svg>
  )
};
