/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const ReceiptLong = ({ className }) => {
  return (
    <svg
      className={`receipt-long ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="20"
        id="mask0_1_531"
        maskUnits="userSpaceOnUse"
        style={{maskType: "alpha"}}
        width="20"
        x="0"
        y="0"
      >
        <rect className="rect" fill="#D9D9D9" height="20" width="20" />
      </mask>
      <g className="g" mask="url(#mask0_1_531)">
        <path
          className="path"
          d="M5.00004 17.5C4.52782 17.5 4.13198 17.3403 3.81254 17.0208C3.4931 16.7014 3.33337 16.3055 3.33337 15.8333V14.8333C3.33337 14.6528 3.39949 14.4966 3.53171 14.365C3.66337 14.2328 3.81949 14.1666 4.00004 14.1666H5.83337V3.39581C5.83337 3.24303 5.89587 3.13887 6.02087 3.08331C6.14587 3.02776 6.26393 3.05554 6.37504 3.16665L6.89587 3.68748L7.72921 2.87498C7.81254 2.80554 7.89949 2.77081 7.99004 2.77081C8.08004 2.77081 8.15976 2.80554 8.22921 2.87498L9.06254 3.68748L9.91671 2.87498C9.98615 2.80554 10.0662 2.77081 10.1567 2.77081C10.2467 2.77081 10.3264 2.80554 10.3959 2.87498L11.25 3.68748L12.1042 2.87498C12.1737 2.80554 12.2534 2.77081 12.3434 2.77081C12.4339 2.77081 12.5139 2.80554 12.5834 2.87498L13.4375 3.68748L14.2709 2.87498C14.3403 2.80554 14.4237 2.77081 14.5209 2.77081C14.6181 2.77081 14.7014 2.80554 14.7709 2.87498L15.6042 3.68748L16.125 3.16665C16.2362 3.05554 16.3542 3.02776 16.4792 3.08331C16.6042 3.13887 16.6667 3.24303 16.6667 3.39581V15.8333C16.6667 16.3055 16.507 16.7014 16.1875 17.0208C15.8681 17.3403 15.4723 17.5 15 17.5H5.00004ZM15 16.6666C15.2362 16.6666 15.4339 16.5866 15.5934 16.4266C15.7534 16.2672 15.8334 16.0694 15.8334 15.8333V4.16665H6.66671V14.1666H13.5C13.6806 14.1666 13.837 14.2328 13.9692 14.365C14.1009 14.4966 14.1667 14.6528 14.1667 14.8333V15.8333C14.1667 16.0694 14.2467 16.2672 14.4067 16.4266C14.5662 16.5866 14.7639 16.6666 15 16.6666ZM8.20837 7.08331C8.11115 7.08331 8.02087 7.04165 7.93754 6.95831C7.85421 6.87498 7.81254 6.77776 7.81254 6.66665C7.81254 6.54165 7.85421 6.44081 7.93754 6.36415C8.02087 6.28804 8.1181 6.24998 8.22921 6.24998H11.8542C11.9792 6.24998 12.08 6.29165 12.1567 6.37498C12.2328 6.45831 12.2709 6.55554 12.2709 6.66665C12.2709 6.79165 12.2328 6.89248 12.1567 6.96915C12.08 7.04526 11.9792 7.08331 11.8542 7.08331H8.20837ZM8.20837 9.58331C8.11115 9.58331 8.02087 9.54165 7.93754 9.45831C7.85421 9.37498 7.81254 9.27776 7.81254 9.16665C7.81254 9.04165 7.85421 8.94081 7.93754 8.86415C8.02087 8.78804 8.1181 8.74998 8.22921 8.74998H11.8542C11.9792 8.74998 12.08 8.79165 12.1567 8.87498C12.2328 8.95831 12.2709 9.05554 12.2709 9.16665C12.2709 9.29165 12.2328 9.39248 12.1567 9.46915C12.08 9.54526 11.9792 9.58331 11.8542 9.58331H8.20837ZM14.0625 7.31248C13.8959 7.31248 13.75 7.24637 13.625 7.11415C13.5 6.98248 13.4375 6.83331 13.4375 6.66665C13.4375 6.49998 13.5 6.35054 13.625 6.21831C13.75 6.08665 13.8959 6.02081 14.0625 6.02081C14.2431 6.02081 14.3959 6.08665 14.5209 6.21831C14.6459 6.35054 14.7084 6.49998 14.7084 6.66665C14.7084 6.83331 14.6459 6.98248 14.5209 7.11415C14.3959 7.24637 14.2431 7.31248 14.0625 7.31248ZM14.0625 9.81248C13.8959 9.81248 13.75 9.74637 13.625 9.61415C13.5 9.48248 13.4375 9.33331 13.4375 9.16665C13.4375 8.99998 13.5 8.85053 13.625 8.71831C13.75 8.58665 13.8959 8.52081 14.0625 8.52081C14.2431 8.52081 14.3959 8.58665 14.5209 8.71831C14.6459 8.85053 14.7084 8.99998 14.7084 9.16665C14.7084 9.33331 14.6459 9.48248 14.5209 9.61415C14.3959 9.74637 14.2431 9.81248 14.0625 9.81248ZM5.00004 16.6666H13.3334V15H4.16671V15.8333C4.16671 16.0694 4.24643 16.2672 4.40587 16.4266C4.56587 16.5866 4.76393 16.6666 5.00004 16.6666Z"
          fill="#131316"
        />
      </g>
    </svg>
  )
};
