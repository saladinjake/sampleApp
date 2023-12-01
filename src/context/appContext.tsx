import {
  useContext,
  createContext,
  useReducer
} from "react"

import {   getCachedData ,saveCachedData } from "utils"
const initialState = {

  isAuth: true,
  isLoading: false,
  user: getCachedData()?.user ?? null,
  wallet: getCachedData()?.wallet ?? null,
  transactions:getCachedData()?.transactions ??  [],

};

const AppContext = createContext({
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



});

 function appReducer(state, action) {
     console.log(action, ">>>")
  switch (action.type) {


    case "GET_AUTH_PROFILE":

      return {
        ...state,
        isLoading: true,
        user: getCachedData()?.user ?? null,
        wallet: getCachedData()?.wallet ?? null,
        transactions:getCachedData()?.transactions ??  [],
      };
    case "GET_BALANCE":
      return {
        ...state,

        isAuth: true,
        isLoading: false,
        user: getCachedData()?.user ?? null,
        wallet: getCachedData()?.wallet ?? null,
        transactions:getCachedData()?.transactions ??  [],

      };
    case "GET_TRANSACTIONS":
      return {
        ...state,

        isAuth: false,
        user: getCachedData()?.user ?? null,
        wallet: getCachedData()?.wallet ?? null,
        transactions:getCachedData()?.transactions ??  [],

      };
    default:
      return state;
  }
}

const AppProvisioner =  (props) =>{
  const propsState = {
    ...initialState,
    user: props.user, wallet: props.wallet, transctions: props.transactions
  }
 const [state, dispatch] = useReducer(appReducer, propsState);

  return (
   <>
     <AppContext.Provider
       value={{
         user: state.user,

         isAuth: state.isAuth,
         isLoading: state.isLoading,

         wallet: state.wallet,
         transactions:state.transactions,

       }}
       {...props}
     >
       {props.children}
     </AppContext.Provider>


   </>
 );
}


const useAppProvider = () => useContext(AppContext);

export { AppContext, AppProvisioner, useAppProvider, appReducer };
