import Box from "components/shared/Box-v1"
import React from "react";
import { ProductIcons27 } from "assets/svgs/ProductIcons27";
import { ProductIcons28 } from "assets/svgs/ProductIcons28";
import { ProductIcons45 } from "assets/svgs/ProductIcons45";
import { ProductIcons46 } from "assets/svgs/ProductIcons46";
import { ProductIcons3 } from 'assets/svgs/ProductIcons3'
import styled from 'styled-components'

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
  return (
    <StyledFloatingSideBar>
      <Box className={`app-bar-list ${state} ${className}`}>
      {icon}
      </Box>
    </StyledFloatingSideBar>
  )
}




const SideBar = () =>{
  return (
    <Box className="app-bar">
      <Box className="frame-10">
        <AppBarList
          className="app-bar-list-instance"
          icon={<ProductIcons27 className="icon-instance-node-3" />}
          state="default"
        />
        <AppBarList
          className="app-bar-list-instance"
          icon={<ProductIcons45 className="icon-instance-node-3" />}
          state="default"
        />
        <AppBarList
          className="app-bar-list-instance"
           icon={<ProductIcons46 className="icon-instance-node-3" />}
          state="default"
        />
        <AppBarList
          className="app-bar-list-instance"
           icon={<ProductIcons28 className="icon-instance-node-3" />}
          state="default"
        />
      </Box>
    </Box>
  )
}
export default SideBar


const StyledFloatingSideBar = styled.div`
.app-bar {
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 100px;
  box-shadow: var(--app-bar);
  display: inline-flex;
  gap: 4px;
  left: 16px;
  padding: 4px;
  position: fixed;
  top: 310px;
  border:1px solid #fafafa;
    -moz-box-shadow: 0 0 3px  0px 2px 2px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
border: 2px solid #fafafa;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.app-bar-list-instance {
  flex: 0 0 auto !important;
}
  .app-bar-list {
    align-items: flex-start;
    border-radius: 100px;
    display: inline-flex;
    gap: 4px;
    padding: 8px;
    position: relative;
    &:hover{
      padding:7px;
      gap:3px;
    }

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
