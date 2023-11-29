/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CallMade = ({ className }) => {
  return (
    <svg
      className={`call-made ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_1_148"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        width="24"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_1_148)">
        <path className="path" d="M5.4 19.3L4.7 18.6L16.8 6.5H9.5V5.5H18.5V14.5H17.5V7.2L5.4 19.3Z" fill="#000004" />
      </g>
    </svg>
  );
};
