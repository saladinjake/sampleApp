
import { Avatars2 } from "assets/svgs/Avatars2";
import { CallMade1 } from "assets/svgs/CallMade1";
import { CallMade2 } from "assets/svgs/CallMade2";
import { CallReceived2 } from "assets/svgs/CallReceived2";
import { CallReceived3 } from "assets/svgs/CallReceived3";
import { CallReceived4 } from "assets/svgs/CallReceived4";
import { CallReceived5 } from "assets/svgs/CallReceived5";
import { CallReceived6 } from "assets/svgs/CallReceived6";
import { Chat4 } from "assets/svgs/Chat4";
import { Download1 } from "assets/svgs/Download1";
import { ExpandMore4 } from "assets/svgs/ExpandMore4";
import { Group4 } from "assets/svgs/Group4";
import { Home8 } from "assets/svgs/Home8";
import { Info1 } from "assets/svgs/Info1";
import { Info2 } from "assets/svgs/Info2";
import { Info3 } from "assets/svgs/Info3";
import { Info4 } from "assets/svgs/Info4";
import { InsertChart4 } from "assets/svgs/InsertChart4";
import { MainstackLogo } from "assets/svgs/MainstackLogo";
import { Menu4 } from "assets/svgs/Menu4";
import { Notifications4 } from "assets/svgs/Notifications4";
import { Payments5 } from "assets/svgs/Payments5";
import { ProductIcons27 } from "assets/svgs/ProductIcons27";
import { ProductIcons28 } from "assets/svgs/ProductIcons28";
import { ProductIcons45 } from "assets/svgs/ProductIcons45";
import { ProductIcons46 } from "assets/svgs/ProductIcons46";
import { Widgets6 } from "assets/svgs/Widgets6";
import styled from "styled-components"
import Box from "components/shared/Box-v1"
import Button from "components/shared/Button"
import ProfileAvatar from "./ProfileMenu"
import { StyledNavWrapper } from "./Nav.styles"
const NavBar =  () =>{
  return (
    <StyledNavWrapper>
  <Box className="top-bar">
    <Box className="navigation">
      <Box className="menu-2">
        <Box className="menu-item">
            <Home8 className="icon-instance-node" />
          <Box className="text-wrapper-11">Home</Box>
        </Box>
        <Box className="menu-item">
            <InsertChart4 className="icon-instance-node" />
          <Box className="text-wrapper-11">Analytics</Box>
        </Box>
        <Box className="menu-item-2">
            <Payments5 className="icon-instance-node" />
             <Box className="home-2">Revenue</Box>
        </Box>
        <Box className="menu-item">
            <Group4 className="icon-instance-node" />
          <Box className="text-wrapper-11">CRM</Box>
        </Box>
        <Box className="menu-item">
            <Widgets6 className="icon-instance-node" />
          <Box className="text-wrapper-11">Apps</Box>
        </Box>
      </Box>
      <MainstackLogo className="mainstack-logo" />
      <Box className="frame-14">
        <Box className="small-tertiary">
          <Box className="icon">
              <Notifications4 className="icon-instance-node-4" />
          </Box>
        </Box>
        <Box className="small-tertiary-wrapper">
          <Box className="small-tertiary">
            <Box className="icon">
                <Chat4 className="icon-instance-node-4" />
            </Box>
          </Box>
        </Box>
        {/*profile icon*/}
        <ProfileAvatar />
      </Box>
    </Box>
        </Box>
  </StyledNavWrapper>
)
}
export default NavBar
