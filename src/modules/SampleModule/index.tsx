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
import {  AppProvisioner , useAppProvider, AppContext }  from "context/appContext"
import {
   getAllDataSample1,
  getAllDataSample2,
   getAllDataSample3,
   fetchSampleData3,
   fetchSampleData2,
   fetchSampleData1
} from "api/services/SampleApi"
const queryKeys = {
  GET_USER:"get_user",
  GET_WALLET:"get_wallet",
  GET_TRANSACTION:"GET_TRANSACTION"
}
console.log(  getAllDataSample3())

export const Index = () => {
  const provider = useAppProvider()

  const { data: transactionResponse, isLoading: isLoadingReport } = useQuery(
  [queryKeys.GET_TRANSACTION,],
  () =>
    fetchSampleData3()
  );

  const { data: walletResponse, isLoading: isLoadingBalanceEnquiries } = useQuery(
  [queryKeys.GET_WALLET],
  () =>
    fetchSampleData1()
  );

  const { data: identityResponse, isLoading: isLoadingIdentity } = useQuery(
  [queryKeys.GET_USER],
  () =>
    fetchSampleData1()
  );
console.log(transactionResponse, [{
    "amount": 500,
    "metadata": {
        "name": "John Doe",
        "type": "digital_product",
        "email": "johndoe@example.com",
        "quantity": 1,
        "country": "Nigeria",
        "product_name": "Rich Dad Poor Dad"
    },
    "payment_reference": "c3f7123f-186f-4a45-b911-76736e9c5937",
    "status": "successful",
    "type": "deposit",
    "date": "2022-03-03"
}])


console.log(walletResponse, "balancesheet")

console.log(identityResponse, {
    first_name:"solomon",
    last_name:"grandy"
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
