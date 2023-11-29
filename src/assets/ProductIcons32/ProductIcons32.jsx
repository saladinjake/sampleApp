/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ProductIcons32 = ({
  color = "url(#paint0_linear_4571_535)",
  fill = "url(#paint1_linear_4571_535)",
  color1 = "url(#paint2_linear_4571_535)",
  className,
}) => {
  return (
    <svg
      className={`product-icons-32 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.84 4.92499V11.025C15.84 11.415 15.53 11.725 15.14 11.725H9.98003C9.59003 11.725 9.28003 11.415 9.28003 11.025V10.055H4.98003C4.59003 10.055 4.28003 9.74499 4.28003 9.35499V3.25499C4.28003 2.86499 4.59003 2.55499 4.98003 2.55499H10.14C10.53 2.55499 10.84 2.86499 10.84 3.25499V4.22499H15.14C15.52 4.22499 15.84 4.54499 15.84 4.92499Z"
        fill={color}
      />
      <path
        className="path"
        d="M11.59 14.1849H2.7C2.31 14.1849 2 13.8749 2 13.4849V6.55492C2 6.16492 2.31 5.85492 2.7 5.85492H11.59C11.98 5.85492 12.29 6.16492 12.29 6.55492V13.4849C12.29 13.8749 11.98 14.1849 11.59 14.1849Z"
        fill={fill}
      />
      <path
        className="path"
        d="M21.3 21.445H2.7C2.31 21.445 2 21.135 2 20.745V8.47496C2 8.08496 2.31 7.77496 2.7 7.77496H21.3C21.69 7.77496 22 8.08496 22 8.47496V20.745C22 21.135 21.69 21.445 21.3 21.445Z"
        fill={color1}
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_4571_1634"
          x1="4.27524"
          x2="15.8362"
          y1="7.14244"
          y2="7.14244"
        >
          <stop className="stop" stopColor="#FCFF1C" />
          <stop className="stop" offset="1" stopColor="#FF9D0A" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_4571_1634"
          x1="2"
          x2="12.293"
          y1="10.0223"
          y2="10.0223"
        >
          <stop className="stop" stopColor="#E7CFFF" />
          <stop className="stop" offset="1" stopColor="#870FFF" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_4571_1634"
          x1="2"
          x2="22"
          y1="14.6143"
          y2="14.6143"
        >
          <stop className="stop" stopColor="#03FFE5" />
          <stop className="stop" offset="1" stopColor="#14B348" />
        </linearGradient>
      </defs>
    </svg>
  );
};

ProductIcons32.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  color1: PropTypes.string,
};
