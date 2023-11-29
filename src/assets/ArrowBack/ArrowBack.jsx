/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowBack = ({ className }) => {
  return (
    <svg
      className={`arrow-back ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="20"
        id="mask0_1_10"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        width="20"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="20" width="20" />
      </mask>
      <g className="g" mask="url(#mask0_1_10)">
        <path
          className="path"
          d="M9.99996 16.0208L3.97913 9.99996L9.99996 3.97913L10.6041 4.56246L5.58329 9.58329H16.0208V10.4166H5.58329L10.6041 15.4375L9.99996 16.0208Z"
          fill="#131316"
        />
      </g>
    </svg>
  );
};
