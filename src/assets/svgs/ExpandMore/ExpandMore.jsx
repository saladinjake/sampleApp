/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ExpandMore = ({ className }) => {
  return (
    <svg
      className={`expand-more ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="20"
        id="mask0_4571_1711"
        maskUnits="userSpaceOnUse"
        style={{maskType: "alpha"}}
        width="20"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#C4C4C4" height="20" width="20" />
      </mask>
      <g className="g" mask="url(#mask0_4571_1711)">
        <path
          className="path"
          d="M9.99954 13.0211C9.87902 13.0211 9.76685 13.0019 9.66301 12.9634C9.55916 12.925 9.46045 12.8589 9.36686 12.7653L4.87264 8.27112C4.73417 8.13267 4.66334 7.95864 4.66014 7.74902C4.65692 7.53941 4.72776 7.36217 4.87264 7.2173C5.01751 7.07243 5.19314 7 5.39954 7C5.60594 7 5.78157 7.07243 5.92644 7.2173L9.99954 11.2904L14.0726 7.2173C14.2111 7.07885 14.3851 7.00802 14.5947 7.0048C14.8043 7.0016 14.9816 7.07243 15.1264 7.2173C15.2713 7.36217 15.3438 7.53781 15.3438 7.74422C15.3438 7.95062 15.2713 8.12626 15.1264 8.27112L10.6322 12.7653C10.5386 12.8589 10.4399 12.925 10.3361 12.9634C10.2322 13.0019 10.1201 13.0211 9.99954 13.0211Z"
          fill="white"
        />
      </g>
    </svg>
  )
};
