/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ProductVirtualCard = ({ className }) => {
  return (
    <svg
      className={`product-virtual-card ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.8498 13.35L18.9998 16.2V11.74C18.9998 11.43 18.7498 11.18 18.4398 11.18H5.17977L3.79977 9.81C3.57977 9.59 3.57977 9.24001 3.79977 9.03L10.6598 2.17C10.8798 1.95 11.2298 1.95 11.4398 2.17L21.8398 12.57C22.0698 12.78 22.0698 13.13 21.8498 13.35Z"
        fill="url(#paint0_linear_1_416)"
      />
      <path
        className="path"
        d="M19.0002 11.7401V16.2001L14.9902 20.2101C14.7702 20.4301 14.4202 20.4301 14.2102 20.2101L5.18018 11.1801H18.4402C18.7502 11.1901 19.0002 11.4401 19.0002 11.7401Z"
        fill="url(#paint1_linear_1_416)"
      />
      <path
        className="path"
        d="M19 16.2001V21.4401C19 21.7501 18.75 22.0001 18.44 22.0001H3.56C3.25 22.0001 3 21.7501 3 21.4401V11.7401C3 11.4301 3.25 11.1801 3.56 11.1801H5.19L14.22 20.2101C14.44 20.4301 14.79 20.4301 15 20.2101L19 16.2001Z"
        fill="url(#paint2_linear_1_416)"
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_1_416"
          x1="3.64239"
          x2="22.0164"
          y1="9.10201"
          y2="9.10201"
        >
          <stop className="stop" stopColor="#03FFE5" />
          <stop className="stop" offset="1" stopColor="#14B348" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_1_416"
          x1="5.18379"
          x2="18.9998"
          y1="15.7806"
          y2="15.7806"
        >
          <stop className="stop" stopColor="#E7CFFF" />
          <stop className="stop" offset="1" stopColor="#870FFF" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_1_416"
          x1="2.99963"
          x2="18.9996"
          y1="16.5936"
          y2="16.5936"
        >
          <stop className="stop" stopColor="#FCFF1C" />
          <stop className="stop" offset="1" stopColor="#FF9D0A" />
        </linearGradient>
      </defs>
    </svg>
  );
};
