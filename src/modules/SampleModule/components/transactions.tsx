import { Avatars2 } from "assets/svgs/Avatars2";
import { CallMade1 } from "assets/svgs/CallMade1";
import { CallMade2 } from "assets/svgs/CallMade2";
import { CallReceived2 } from "assets/svgs/CallReceived2";
import { CallReceived3 } from "assets/svgs/CallReceived3";
import { CallReceived4 } from "assets/svgs/CallReceived4";
import { CallReceived5 } from "assets/svgs/CallReceived5";
import { CallReceived6 } from "assets/svgs/CallReceived6";
import { Chat4 } from "assets/svgs/Chat4";

import { Group4 } from "assets/svgs/Group4";
import { Home8 } from "assets/svgs/Home8";

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
import Box from "components/shared/Box-v1"
import styled from 'styled-components'
import MediaQuery, {
  screenDeviceManager,
  MediaScreens,
} from "theme/responsive";
import {   useAppProvider }  from "context/appContext"
import Flex from "components/shared/Flex-v1"


export const TransactionLists = (props) =>{
  const {transactions: data}  =  props  //useAppProvider()
  return (

    <Wrapper>
    <Box className="frame-4">
      {
        data?.map(record =>{


          return (
            <Box className="transaction-list">
              <Box className="call-received-wrapper">
                <CallReceived2 className="icon-instance-node-2" />
              </Box>
              <Box className="frame-5">
                <Box className="psychology-of-money">{record?.metadata?.product_name}</Box>
                <Box className="frame-6">
                  <Box className="dominic-dan">{record?.metadata?.name}</Box>
                </Box>
              </Box>
              <Box className="frame-7">
                <Box className="text-wrapper-3">USD {record?.amount}</Box>
                <Box className="text-wrapper-4">{record?.date}</Box>
              </Box>
            </Box>
          )
        })
      }



    </Box>
    </Wrapper>
  )
}


const Wrapper = styled.span`
.frame-4 {
  position: absolute;
  top: 706px;
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;

  ${MediaQuery.between("mobileSmall", "tablets")`
        gap: 14px;
        left: 10px;
        padding: 0px 0px 4px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`

         gap: 24px;
         left: 190px;
         padding: 0px 0px 164px;


 `};


}

 .transaction-list {

  height: 49px;
  position: relative;
  width: 100%;


  display: flex;
  justifyContent: between;
  flex-direction:row;




}

 .call-received-wrapper {
  background-color: #FFDBDB;
  border-radius: 24px;
  height: 48px;

  margin-right: 40px;
  width: 48px;

  ${MediaQuery.between("mobileSmall", "tablets")`
        margin-right: 58px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
        margin-right: 88px;
 `};


}

 .icon-instance-node-2 {
  height: 20px !important;
  left: 14px !important;
  position: absolute !important;
  top: 14px !important;
  width: 20px !important;
}

 .frame-5 {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 49px;
  justify-content: space-between;


  ${MediaQuery.between("mobileSmall", "tablets")`
        width: 200px;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
         width: 455px;
 `};


}

 .psychology-of-money {

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}



 .frame-7 {
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  gap: 34px;
  justify-content: flex-end;



  ${MediaQuery.between("mobileSmall", "tablets")`
        display: none;
 `};

 ${MediaQuery.between("laptopSmall", "retinaMaxWidth")`
          margin-left: 600px;
 `};

}

 .text-wrapper-3 {

  font-family: "Degular-Bold", Helvetica;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.4px;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

 .text-wrapper-4 {

  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
}

 .call-made-wrapper {
  background-color: var(--trashed-colorsred100);
  border-radius: 24px;
  height: 48px;
  left: 0;
  position: absolute;
  top: 0;
  width: 48px;
}

.text-wrapper-5 {

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

.index .frame-8 {
  align-items: flex-end;
  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  left: 1070px;
  position: absolute;
  top: 2px;
}

.index .successful {

  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
}

`
