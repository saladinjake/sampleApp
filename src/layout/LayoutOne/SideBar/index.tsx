import {
  StyledFloatingSideBar
} from "./Sidebar.styles"
import Box from "components/shared/Box-v1"
import React from "react";
import { ProductIcons27 } from "assets/svgs/ProductIcons27";
import { ProductIcons28 } from "assets/svgs/ProductIcons28";
import { ProductIcons45 } from "assets/svgs/ProductIcons45";
import { ProductIcons46 } from "assets/svgs/ProductIcons46";
import { ProductIcons3 } from 'assets/svgs/ProductIcons3'


export const FloatingIconItem = ({
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

      <Box className={`app-bar-list ${state} ${className}`}>
      {icon}
      </Box>

  )
}




const SideBar = () =>{
  return (
      <StyledFloatingSideBar>
    <Box className="app-bar">
      <Box className="frame-10">
        <FloatingIconItem
          className="app-bar-list-instance"
          icon={<ProductIcons27 className="icon-instance-node" />}
          state="default"
        />
        <FloatingIconItem
          className="app-bar-list-instance"
          icon={<ProductIcons45 className="icon-instance-node" />}
          state="default"
        />
        <FloatingIconItem
          className="app-bar-list-instance"
           icon={<ProductIcons46 className="icon-instance-node" />}
          state="default"
        />
        <FloatingIconItem
          className="app-bar-list-instance"
           icon={<ProductIcons28 className="icon-instance-node" />}
          state="default"
        />
      </Box>
    </Box>
      </StyledFloatingSideBar>
  )
}
export default SideBar
