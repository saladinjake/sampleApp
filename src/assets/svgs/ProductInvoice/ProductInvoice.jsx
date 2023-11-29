/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ProductInvoice = ({
  color = "url(#paint0_linear_1_401)",
  fill = "url(#paint1_linear_1_401)",
  color1 = "url(#paint2_linear_1_401)",
  className,
}) => {
  return (
    <svg
      className={`product-invoice ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M20.52 6.64998V21.05C20.52 21.63 20.05 22.1 19.47 22.1H9.28999C8.70999 22.1 8.23999 21.63 8.23999 21.05V20.16L17.34 16.72C17.7 16.58 17.94 16.24 17.94 15.85V5.59998H19.47C20.05 5.59998 20.52 6.06998 20.52 6.64998Z"
        fill={color}
      />
      <path
        className="path"
        d="M17.94 5.59998V15.86C17.94 16.25 17.7 16.59 17.34 16.73L8.23999 20.17V6.64998C8.23999 6.06998 8.70999 5.59998 9.28999 5.59998H17.94Z"
        fill={fill}
      />
      <path
        className="path"
        d="M17.94 2.92999V5.59999H9.28998C8.70998 5.59999 8.23998 6.06999 8.23998 6.64999V20.17L4.73998 21.49C4.12998 21.72 3.47998 21.27 3.47998 20.62V2.91999C3.47998 2.40999 3.89998 1.98999 4.40998 1.98999H17.01C17.52 1.99999 17.94 2.41999 17.94 2.92999Z"
        fill={color1}
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_4571_1644"
          x1="8.24196"
          x2="20.518"
          y1="13.8522"
          y2="13.8522"
        >
          <stop className="stop" stopColor="#FCFF1C" />
          <stop className="stop" offset="1" stopColor="#FF9D0A" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_4571_1644"
          x1="8.24196"
          x2="17.937"
          y1="12.8857"
          y2="12.8857"
        >
          <stop className="stop" stopColor="#FFDDCD" />
          <stop className="stop" offset="1" stopColor="#FF5403" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_4571_1644"
          x1="3.48199"
          x2="17.937"
          y1="11.7778"
          y2="11.7778"
        >
          <stop className="stop" stopColor="#E7CFFF" />
          <stop className="stop" offset="1" stopColor="#870FFF" />
        </linearGradient>
      </defs>
    </svg>
  )
};

ProductInvoice.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  color1: PropTypes.string,
};
