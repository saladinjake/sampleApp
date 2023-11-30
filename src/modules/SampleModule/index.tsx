import React from "react";


import { Info1 } from "assets/svgs/Info1";
import { Info2 } from "assets/svgs/Info2";
import { Info3 } from "assets/svgs/Info3";
import { Info4 } from "assets/svgs/Info4";

import Box from "components/shared/Box-v1"
import NavBar from "layout/LayoutOne/NavBar"
import SideBar from "layout/LayoutOne/SideBar"
import { StyledWrapper } from "./index.styles"
import {Filters } from "./components/filter"
import { TransactionLists } from "./components/transactions"
import { BalanceComponent } from "./components/balace"
import { DateValues } from "./components/datevalues"
export const Index = () => {
  return (
  	  <StyledWrapper>
    <Box className="index">
      <Box className="frame">
        <Box className="table-title">
          <Box className="text-wrapper">24 Transactions</Box>
          <p className="p">Your transactions for the last 7 days</p>
        </Box>
        <Filters />
     </Box>
     <TransactionLists />
    <BalanceComponent />


    <DateValues />
      <Box className="frame-11">
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Ledger Balance</Box>
              <Info1 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 0.00</Box>
        </Box>
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Total Payout</Box>
              <Info2 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 55,080.00</Box>
        </Box>
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Total Revenue</Box>
              <Info3 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 175,580.00</Box>
        </Box>
        <Box className="frame-12">
          <Box className="frame-13">
            <Box className="text-wrapper-9">Pending Payout</Box>
              <Info4 className="icon-instance-node" />
          </Box>
          <Box className="text-wrapper-10">USD 0.00</Box>
        </Box>
      </Box>
      {/*side bar*/}
      <SideBar />

      {/*nav*/}
      <NavBar />
    </Box>
    </StyledWrapper>
  )
};
export default Index
