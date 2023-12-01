import React from "react";



import Box from "components/shared/Box-v1"
import NavBar from "layout/LayoutOne/NavBar"
import SideBar from "layout/LayoutOne/SideBar"
import { StyledWrapper } from "./index.styles"
import {  useReducer } from "react"
import {Filters } from "./components/filter"
import { TransactionLists } from "./components/transactions"
import { BalanceComponent } from "./components/balace"
import { DateValues } from "./components/datevalues"
import { VerticalInfoGrids } from './components/verticalInfoGrids'
import { useQuery } from "@tanstack/react-query";
import {  AppProvisioner , useAppProvider, AppContext,  appReducer }  from "context/appContext"
import {   getCachedData ,saveCachedData } from "utils"
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

const initialState ={
  user: {
      first_name:"solomon",
      last_name:"grandy"
  },
  wallet: 0,
  transactions:[{
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
  }],
  isAuth: true,
  isLoading: false,
}
export const Index = () => {
  const provider = useAppProvider();

   const [state, dispatch] = useReducer(appReducer, initialState);


  const { data: transactionResponse, isLoading: isLoadingReport } = useQuery(
  [queryKeys.GET_TRANSACTION],
  () =>
    fetchSampleData3()
    ,{
       onSuccess : (data) =>{
         dispatch({
           type: "GET_TRANSACTIONS",

             transactions: transactionResponse

         })
         saveCachedData("transactions", transactionResponse)
       }
    });

  const { data: walletResponse, isLoading: isLoadingBalanceEnquiries } = useQuery(
  [queryKeys.GET_WALLET],
  () =>
    fetchSampleData2()
    ,{
       onSuccess : () =>{
         dispatch(
           {
             type: "GET_BALANCE",
              wallet: walletResponse

           }
         )
          saveCachedData("wallet", walletResponse)

       }
    });

  const { data: identityResponse, isLoading: isLoadingIdentity } = useQuery(
  [queryKeys.GET_USER],
  () =>
    fetchSampleData1()
  ,{
     onSuccess : () =>{
       dispatch({
            type: "GET_AUTH_PROFILE",
              user: identityResponse,
          })
          saveCachedData("user", identityResponse)
     }
  });
console.log(walletResponse)




const defaultUser = {
    first_name:"solomon",
    last_name:"grandy"
}

  return (
  	  <StyledWrapper>
      {/* <AppProvisioner user={identityResponse ?? defaultUser}  wallet={walletResponse} transactions={transactionResponse}>*/}
        <Box className="index">
            <Box className="frame">
              <Box className="table-title">
                <Box className="text-wrapper">{transactionResponse?.length} Transactions</Box>
                <p className="p">Your transactions for the last 7 days</p>
              </Box>
              <Filters />
           </Box>
           <TransactionLists  transactions={transactionResponse}/>
          <BalanceComponent  availableBalance={walletResponse?.balance}/>
          <DateValues />
          <VerticalInfoGrids wallet={walletResponse} />

            {/*side bar*/}
            <SideBar />

            {/*nav*/}
            <NavBar user={identityResponse}/>
        </Box>
      {/* </AppProvisioner>*/}
    </StyledWrapper>
  )
};
export default Index
