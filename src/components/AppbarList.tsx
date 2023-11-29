

import PropTypes from "prop-types";
import React from "react";
import { ProductIcons3 } from "assets/svgs/ProductIcons3";
import styled from "styled-components"

export const AppBarList = ({
  state,
  className,
  icon = (
    <ProductIcons3
      className="product-icons"
      color="url(#paint0_linear_1_255)"
      fill="url(#paint2_linear_1_255)"
      stroke="url(#paint1_linear_1_255)"
    />
  ),
}) => {
  return <StyledFloatingSideBar> <div className={`app-bar-list ${state} ${className}`}>{icon}</div></StyledFloatingSideBar>;
};


const StyledFloatingSideBar = styled.div`
.app-bar-list {
  align-items: flex-start;
  border-radius: 100px;
  display: inline-flex;
  gap: 4px;
  padding: 8px;
  position: relative;
}

.app-bar-list .product-icons {
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
}

.app-bar-list.active {
  background-color: var(--colors-gray-gray-50);
  box-shadow: var(--lightmode-300);
}

.app-bar-list.on-hover {
  background-color: var(--colors-gray-gray-50);
  border: 1px solid;
  border-color: var(--colors-gray-gray-50);
  box-shadow: var(--lightmode-300);
}

.app-bar-list.default {
  mix-blend-mode: luminosity;
}

`
