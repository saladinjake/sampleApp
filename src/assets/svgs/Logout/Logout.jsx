
import React from "react";

export const Logout = ({ className }) => {
  return (
    <svg
      className={`logout ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="20"
        id="mask0_1_551"
        maskUnits="userSpaceOnUse"
        style={{maskType: "alpha"}}
        width="20"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g className="g" mask="url(#mask0_1_551)">
        <path
          className="path"
          d="M4.83333 17.5C4.45833 17.5 4.14222 17.3717 3.885 17.115C3.62833 16.8578 3.5 16.5348 3.5 16.1459V4.68754C3.5 4.29865 3.62833 3.97587 3.885 3.71921C4.14222 3.46198 4.45833 3.33337 4.83333 3.33337H10.1875V4.16671H4.83333C4.70833 4.16671 4.59389 4.21893 4.49 4.32337C4.38556 4.42726 4.33333 4.54865 4.33333 4.68754V16.1459C4.33333 16.2848 4.38556 16.4062 4.49 16.51C4.59389 16.6145 4.70833 16.6667 4.83333 16.6667H10.1875V17.5H4.83333ZM13.5625 13.375L12.9792 12.7709L14.8958 10.8334H7.6875V10H14.8958L12.9792 8.06254L13.5625 7.45837L16.5 10.4167L13.5625 13.375Z"
          fill="#131316"
        />
      </g>
    </svg>
  )
};
