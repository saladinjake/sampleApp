/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CallReceived = ({ className }) => {
  return (
    <svg
      className={`call-received ${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="21"
        id="mask0_1_135"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        width="20"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="20" width="20" y="0.5" />
      </mask>
      <g className="g" mask="url(#mask0_1_135)">
        <path
          className="path"
          d="M4.75 15.75V8.25H5.58333V14.3333L15.6667 4.25L16.25 4.83333L6.16667 14.9167H12.25V15.75H4.75Z"
          fill="#075132"
        />
      </g>
    </svg>
  );
};
