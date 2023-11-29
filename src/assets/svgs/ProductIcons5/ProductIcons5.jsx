/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ProductIcons5 = ({
  color = "url(#paint0_linear_4571_553)",
  fill = "url(#paint1_linear_4571_553)",
  color1 = "url(#paint2_linear_4571_553)",
  className,
}) => {
  return (
    <svg
      className={`product-icons-5 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22.0001 6.08014V17.1801C22.0001 18.0801 21.4501 18.8001 20.7701 18.8001H3.24013C2.56013 18.8001 2.01013 18.0701 2.01013 17.1801V6.08014C2.01013 5.18014 2.56013 4.46014 3.24013 4.46014H20.7701C21.4501 4.46014 22.0001 5.18014 22.0001 6.08014Z"
        fill={color}
      />
      <path
        className="path"
        d="M17.79 6.19H6.17002C5.61002 6.19 5.15002 5.73 5.15002 5.17V4.02C5.15002 3.46 5.60002 3 6.17002 3H17.8C18.36 3 18.82 3.46 18.82 4.02V5.17C18.81 5.73 18.36 6.19 17.79 6.19Z"
        fill={fill}
      />
      <path
        className="path"
        d="M15.7199 19.3496L18.5199 21.9096C18.6599 22.0396 18.8799 22.0296 18.9999 21.8896L20.7099 20.0196C20.8399 19.8796 20.8299 19.6596 20.6899 19.5396L17.8899 16.9796C17.7499 16.8496 17.7399 16.6396 17.8699 16.4996L18.7599 15.5296C18.9399 15.3396 18.8399 15.0196 18.5799 14.9596L12.1999 13.5496C11.9399 13.4896 11.7199 13.7396 11.7999 13.9896L13.7699 20.2296C13.8499 20.4796 14.1699 20.5496 14.3499 20.3596L15.2399 19.3896C15.3599 19.2296 15.5799 19.2196 15.7199 19.3496Z"
        fill={color1}
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_4571_1821"
          x1="22.0001"
          x2="2.01622"
          y1="11.6283"
          y2="11.6283"
        >
          <stop className="stop" stopColor="#32C0FF" />
          <stop className="stop" offset="1" stopColor="#0683FF" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_4571_1821"
          x1="5.14579"
          x2="18.8122"
          y1="4.59321"
          y2="4.59321"
        >
          <stop className="stop" stopColor="#32C0FF" />
          <stop className="stop" offset="1" stopColor="#0683FF" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint2_linear_4571_1821"
          x1="18.294"
          x2="13.4253"
          y1="14.6303"
          y2="19.9693"
        >
          <stop className="stop" stopColor="#FCFF1C" />
          <stop className="stop" offset="1" stopColor="#FF9D0A" />
        </linearGradient>
      </defs>
    </svg>
  )
};

ProductIcons5.propTypes = {
  color: PropTypes.string,
  fill: PropTypes.string,
  color1: PropTypes.string,
};
