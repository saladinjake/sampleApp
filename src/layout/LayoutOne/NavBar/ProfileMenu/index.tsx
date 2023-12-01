import Box from "components/shared/Box-v1"
import { Menu4 } from "assets/svgs/Menu4";
import { Avatars2 } from "assets/svgs/Avatars2";
import styled from "styled-components"
import Flex from "components/shared/Flex-v1"
import Menu, {MenuItems,
  MenuButton }  from "components/shared/Menu"
import Text from "components/shared/Text-v1"
import {
  generateUUID
} from "utils"

import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";

import {   useAppProvider }  from "context/appContext"

const Container = styled(Flex)`

`;

const StyledBox = styled(Box)`
  background: #ffffff;
  border: 1px solid rgba(219, 220, 224, 0.5);
  box-shadow: 15px 30px 40px rgba(64, 25, 109, 0.07);
  border-radius: 5px;

  ${MediaQuery.between("mobileSmall", "tablets")`
       margin-left: -20px;
 `};
`;

const CaretDown = () => {
  return (
    <Menu4 className="icon-instance-node-3" />
  );
};

const SelectButton = (props) => {
  const { onClick, value } = props;

  return (
    <Container
      cursor="pointer"
      alignItems="center"
      justifyContent="between"
      px="3"
      onClick={onClick}
      gap="0 18px"
    >


      <CaretDown />
    </Container>
  );
};


const  Profile = (props ) =>{
  const { user } = props  //useAppProvider();
  const initials =  user?.first_name?.substring(0,1) + "" + user?.last_name?.substring(0,1)
  return (
    <StyledProfileWrapper>
    <Box className="frame-15a">
      <Box className="avi">
        <Box className="overlap-group">
          <Box className="avatar">
            <img
              className="profile"
              alt="Profile"
              src="https://cdn.animaapp.com/projects/6564181e4f52a58b4f13c26e/releases/656446818adc4ddd302b052f/img/profile@2x.png"
            />
          </Box>
          <Avatars2 className="avatars" />
          <Box className="ellipse" />
          <Box className="text-wrapper-12">{initials}</Box>
        </Box>
      </Box>


       <div className="resetPos">
          <Menu>
            <MenuButton>
              {(setShowMenu) => (
                <SelectButton
                  value={"open"}
                  onClick={() => setShowMenu((state) => !state)}
                />
              )}
            </MenuButton>

            <MenuItems top="52px" width="auto">
              <StyledBox px="4">
                {[
                  { name: "Home", value: "" },
                  { name: "Analytics", value: "" },
                  { name: "CRM", value: "" },
                  { name: "Revenues", value: "" },
                  { name: "App", value: "" },

                ].map((item, index) => (
                  <Box
                  key={(generateUUID())}
                    py="3"
                    borderBottomStyle="solid"
                    borderBottomColor="#F4F4F4"
                    borderWidth="1px"
                    cursor="pointer"
                    onClick={() =>{}}
                  >
                    <Text fontSize="13px" fontWeight="600">
                      {item.name}
                    </Text>
                  </Box>
                ))}
              </StyledBox>
            </MenuItems>
          </Menu>
          </div>

    </Box>
    </StyledProfileWrapper>
  )
}
export default Profile
const StyledProfileWrapper = styled.div`
.frame-15a {
 align-items: center;
 background-color: #eff1f6;
 border-radius: 100px;
 display: inline-flex;
 flex: 0 0 auto;
 gap: 8px;
 padding: 4px 12px 4px 5px;
 position: relative;
 


}
 .avatar {
  background-color: var(--trashed-colorsgray100);
  border-radius: 16px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}

 .profile {
  height: 13px;
  left: 11px;
  position: absolute;
  top: 9px;
  width: 10px;
}

.avatars {
  height: 32px !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 32px !important;

}

.text-wrapper-12 {
 -webkit-background-clip: text !important;
 -webkit-text-fill-color: transparent;
 background: linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(242.35, 243.02, 244.8) 100%);
 background-clip: text;
 color: transparent;

 height: 16px;
 left: 9px;

 position: absolute;
 text-align: center;
 text-fill-color: transparent;
 top: 7px;
 white-space: nowrap;

}

 .ellipse {
  background: linear-gradient(180deg, rgb(92.13, 102, 111.87) 0%, rgb(19, 19, 22) 100%);
  border-radius: 16px;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}

 .avi {
  height: 32px;
  position: relative;
  width: 32px;



}

.overlap-group {
  height: 32px;
  position: relative;
  &:hover{
    padding:3px 11px 4px 4px;
    gap: 3px;
  }
}
`
