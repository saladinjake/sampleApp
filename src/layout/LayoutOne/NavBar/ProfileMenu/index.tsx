import Box from "components/shared/Box-v1"
import { Menu4 } from "assets/svgs/Menu4";
import { Avatars2 } from "assets/svgs/Avatars2";
import styled from "styled-components"
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
          <Box className="text-wrapper-12">OJ</Box>
        </Box>
      </Box>
        <Menu4 className="icon-instance-node-3" />
    </Box>
  )
}
export default Profile
const StyledProfileWrapper = styled.div`

`
