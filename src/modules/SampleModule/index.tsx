import React from "react";



import Box from "components/shared/Box-v1"
import NavBar from "layout/LayoutOne/NavBar"
import SideBar from "layout/LayoutOne/SideBar"
import { StyledWrapper } from "./index.styles"
import {Filters } from "./components/filter"
import { TransactionLists } from "./components/transactions"
import { BalanceComponent } from "./components/balace"
import { DateValues } from "./components/datevalues"
import { VerticalInfoGrids } from './components/verticalInfoGrids'
import { useQuery } from "@tanstack/react-query";
import {
   getAllDataSample1,
  getAllDataSample2,
   getAllDataSample3,
   fetchSampleData3
} from "api/services/SampleApi"
const queryKeys = {
  get_user:"get_user",
  get_wallet:"get_wallet",
  GET_TRANSACTION:"GET_TRANSACTION"
}
console.log(  getAllDataSample3())

export const Index = () => {

  const { data: transactionResponse, isLoading } = useQuery(
  [queryKeys.GET_TRANSACTION,],
  () =>
    fetchSampleData3()
  );
console.log(transactionResponse, {
    "first_name": "Olivier",
    "last_name": "Jones",
    "email": "olivierjones@gmail.com"
})


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
