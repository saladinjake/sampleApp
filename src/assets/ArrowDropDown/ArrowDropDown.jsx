/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ArrowDropDown = ({ className }) => {
  return (
    <svg
      className={`arrow-drop-down ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_1_609"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        width="24"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_1_609)">
        <path className="path" d="M12 14.3L8.2 10.5H15.8L12 14.3Z" fill="#131316" />
      </g>
    </svg>
  );
};
