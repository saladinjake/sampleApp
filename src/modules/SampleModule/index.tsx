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
import { VerticalInfoGrids } from './components/verticalInfoGrids'
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
    <VerticalInfoGrids />

      {/*side bar*/}
      <SideBar />

      {/*nav*/}
      <NavBar />
    </Box>
    </StyledWrapper>
  )
};
export default Index
