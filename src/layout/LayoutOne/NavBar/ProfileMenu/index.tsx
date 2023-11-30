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


const  Profile = () =>{
  return (
    <Box className="frame-15">
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
          <Box className="text-wrapper-12">VJ</Box>
        </Box>
      </Box>



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
    </Box>
  )
}
export default Profile
const StyledProfileWrapper = styled.div`

`
