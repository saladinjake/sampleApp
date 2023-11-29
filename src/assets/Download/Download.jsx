/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Download = ({ className }) => {
  return (
    <svg
      className={`download ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_1_129"
        maskUnits="userSpaceOnUse"
        style="mask-type:alpha"
        width="24"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="24" width="24" />
      </mask>
      <g className="g" mask="url(#mask0_1_129)">
        <path
          className="path"
          d="M12 15.225L8.45 11.7L9.175 10.975L11.5 13.3V4.65H12.5V13.3L14.825 10.975L15.55 11.7L12 15.225ZM6.625 19C6.15833 19 5.771 18.846 5.463 18.538C5.15433 18.2293 5 17.8417 5 17.375V15H6V17.375C6 17.5417 6.06267 17.6873 6.188 17.812C6.31267 17.9373 6.45833 18 6.625 18H17.375C17.5417 18 17.6873 17.9373 17.812 17.812C17.9373 17.6873 18 17.5417 18 17.375V15H19V17.375C19 17.8417 18.846 18.2293 18.538 18.538C18.2293 18.846 17.8417 19 17.375 19H6.625Z"
          fill="#131316"
        />
      </g>
    </svg>
  );
};
