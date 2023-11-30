
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

const StyledNavWrapper = styled.div`
.top-bar {

 height: 60px;
 left: 120px;
 position: fixed;
 top: 0;
 width: 1440px;


}

.navigation {
 background-color: #ffffff;
 border: 2px solid #fff;

 border-radius: 100px;

 height: 68px;
 left: 14px;
 position: relative;
 top: 14px;
 width: 100%;
 border:1px solid #fafafa;
   -moz-box-shadow: 0 0 3px  0px 2px 2px rgba(0, 0, 0, 0.1);
-webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.1);
border: 2px solid #fafafa;
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

 .menu-2 {
 align-items: center;
 display: inline-flex;
 gap: 20px;
 justify-content: center;
 left: 413px;
 position: absolute;
 top: 12px;
}

 .menu-item {
 align-items: center;
 border-radius: 100px;
 display: inline-flex;
 flex: 0 0 auto;
 gap: 4px;
 justify-content: center;
 padding: 8px 18px 8px 14px;
 position: relative;

 &:hover{
   padding:5px 16px 5px 12px;
   gap: 3px;
 }
}

 .text-wrapper-11 {
 color: var(--colors-gray-gray-400);
 font-family: var(--degular-subtitle-6x-small-font-family);
 font-size: var(--degular-subtitle-6x-small-font-size);
 font-style: var(--degular-subtitle-6x-small-font-style);
 font-weight: var(--degular-subtitle-6x-small-font-weight);
 letter-spacing: var(--degular-subtitle-6x-small-letter-spacing);
 line-height: var(--degular-subtitle-6x-small-line-height);
 margin-top: -1px;
 position: relative;
 text-align: center;
 white-space: nowrap;
 width: fit-content;
}

 .menu-item-2 {
 align-items: center;
 background-color: var(--colors-black-black-300);
 border-radius: 100px;
 display: inline-flex;
 flex: 0 0 auto;
 gap: 4px;
 justify-content: center;
 padding: 8px 18px 8px 14px;
 position: relative;
}

.home-2 {
 color: #fff;

 line-height: 30px;
 margin-top: -1px;
 position: relative;
 text-align: center;
 white-space: nowrap;
 width: fit-content;
 background: #000;
 padding: 5px;
 width:100px;
 border-radius:40px;
}

 .mainstack-logo {
 height: 36px !important;
 left: 24px !important;
 position: absolute !important;
 top: 14px !important;
 width: 36px !important;
}

 .frame-14 {
 align-items: center;
 display: inline-flex;
 gap: 8px;
 justify-content: flex-end;
 left: 1219px;
 position: absolute;
 top: 12px;
}

 .small-tertiary {
 align-items: center;
 display: flex;
 flex-direction: column;
 gap: 10px;
 justify-content: center;
 position: relative;
 width: 40px;
}

 .icon {
 align-items: center;
 align-self: stretch;
 background-color: var(--colors-white-white-100);
 border-radius: 100px;
 display: flex;
 flex: 0 0 auto;
 gap: 8px;
 justify-content: center;
 padding: 10px 24px;
 position: relative;
 width: 100%;
}

 .icon-instance-node-4 {
 height: 20px !important;
 margin-left: -14px !important;
 margin-right: -14px !important;
 position: relative !important;
 width: 20px !important;
}

 .small-tertiary-wrapper {
 align-items: center;
 display: inline-flex;
 flex: 0 0 auto;
 justify-content: center;
 position: relative;
}
`
