import Box from "components/shared/Box-v1"
import { Download1 } from "assets/svgs/Download1";
import { ExpandMore4 } from "assets/svgs/ExpandMore4";
import styled from 'styled-components'
import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";

export const Filters = () => {
return ( <FilterWrapper> <Box className="frame-2" >
      <button className="button-wrapper">
        <button className="button">
          <Box className="frame-3">
            <Box className="text-wrapper-2">Filter</Box>
            <ExpandMore4 className="icon-instance-node" />
          </Box>
        </button>
      </button>
      <Box className="div-wrapper">
        <button className="button">
          <Box className="frame-3">
            <Box className="text-wrapper-2">Export list</Box>
              <Download1 className="icon-instance-node" />
          </Box>
        </button>
      </Box>
    </Box> </FilterWrapper>)

}

const FilterWrapper  = styled.span`
.frame-2 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;

  justify-content:start;
  position: relative;



  ${MediaQuery.between("mobileSmall", "tablets")`
          gap: 7px;

 `};
 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
         gap: 10px;
 `};


}

 .button-wrapper {
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
}

 .button {
  all: unset;
  align-items: center;
  background-color: #eaeaea;
  border-radius: 100px;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;

  justify-content: center;

  position: relative;



  ${MediaQuery.between("mobileSmall", "tablets")`
          gap: 7px;
          padding: 8px 10px 8px 18px;

 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
         gap: 12px;
           padding: 12px 20px 12px 30px;
 `};
}

.frame-3 {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 4px;
  position: relative;
}

 .text-wrapper-2 {

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

 .icon-instance-node {
  height: 20px !important;
  position: relative !important;
  width: 20px !important;
}


`
