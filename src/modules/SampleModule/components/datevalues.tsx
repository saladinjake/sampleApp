
import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";
import Box from "components/shared/Box-v1"
import styled from "styled-components"
export const DateValues = () => {
  return (
    <StyledWrapper>
    <Box className="group-2">
      <img
        className="img"
        alt="Line"
        src=""
      />
      <hr className="line-draw"/>
      <Box className="apr">Apr 1 ,&nbsp;&nbsp;2022</Box>
      <Box className="apr-2">Apr 30 ,&nbsp;&nbsp;2022</Box>
    </Box>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.span`
.line-draw{
  ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
        color:#eaeaea;
        width: 769px;
        margin-left: 80px;
        margin-top:-5px;
  `};
}
.group-2 {

  ${MediaQuery.between("mobileSmall", "tablets")`
        height: 35px;
        left: -25px;
        position: absolute;
        top: 384px;
        width: 79px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
       height: 35px;
       left: 140px;
       position: absolute;
       top: 484px;
       width: 769px;
 `};
}
.apr {





    ${MediaQuery.between("mobileSmall", "tablets")`
        height: 16px;
        left: 35px;

        position: absolute;
        top: 15px;
        white-space: nowrap;
   `};

   ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
           height: 16px;
           left: 85px;

           position: absolute;
           top: 15px;
           white-space: nowrap;
   `};
}

 .apr-2 {

  height: 24px;

  position: absolute;
  text-align: right;

  white-space: nowrap;

  ${MediaQuery.between("mobileSmall", "tablets")`
        left: 174px;
          top: 15px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
  left: 654px;
    top: 11px;
 `};
}
`
