
import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";
import Box from "components/shared/Box-v1"
import styled from "styled-components"

import { Info1 } from "assets/svgs/Info1";
import { Info2 } from "assets/svgs/Info2";
import { Info3 } from "assets/svgs/Info3";
import { Info4 } from "assets/svgs/Info4";

export const VerticalInfoGrids = (props) =>{
  const balance = props.wallet
  return (
    <VerticalGridWrapper>
    <Box className="frame-11">
      <Box className="frame-12">
        <Box className="frame-13">
          <Box className="text-wrapper-9">Ledger Balance</Box>
            <Info1 className="icon-instance-node" />
        </Box>
        <Box className="text-wrapper-10">USD {balance?.ledger_balance}</Box>
      </Box>
      <Box className="frame-12">
        <Box className="frame-13">
          <Box className="text-wrapper-9">Total Payout</Box>
            <Info2 className="icon-instance-node" />
        </Box>
        <Box className="text-wrapper-10">USD {balance?.total_payout}</Box>
      </Box>
      <Box className="frame-12">
        <Box className="frame-13">
          <Box className="text-wrapper-9">Total Revenue</Box>
            <Info3 className="icon-instance-node" />
        </Box>
        <Box className="text-wrapper-10">USD  {balance?.total_revenue}</Box>
      </Box>
      <Box className="frame-12">
        <Box className="frame-13">
          <Box className="text-wrapper-9">Pending Payout</Box>
            <Info4 className="icon-instance-node" />
        </Box>
        <Box className="text-wrapper-10">USD {balance?.total_payout}</Box>
      </Box>
    </Box>
    </VerticalGridWrapper>
  )
}



const VerticalGridWrapper = styled.span`
.frame-11 {
  ${MediaQuery.between("mobileSmall", "tablets")`
         display: none;
 `};


 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
       align-items: flex-start;
       display: inline-flex;
       flex-direction: column;
       gap: 32px;
       right: 329px;
       position: absolute;
       top: 145px;

 `};

}

 .frame-12 {
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 271px;
  &:hover{
    padding:5px;
    gap:6px;
  }
}

 .frame-13 {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;

}

 .text-wrapper-9 {
  color: var(--colors-gray-gray-400);
  flex: 1;

  position: relative;
}

 .text-wrapper-10 {
  align-self: stretch;
  position: relative;
}






 .frame-15 {
  align-items: center;
  background-color: #eff1f6;
  border-radius: 100px;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 8px;
  padding: 4px 12px 4px 5px;
  position: relative;

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

}`
