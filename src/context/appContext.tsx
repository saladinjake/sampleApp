import {
  useContext,
  createContext,
  useReducer
} from "react"


const initialState = {

  isAuth: true,
  isLoading: false,
  user: null,
  wallet: 0,
  transactions:[],


};

const AppContext = createContext({
  user: null,
  wallet: 0,
  transactions:[],
  isAuth: true,
  isLoading: false,



});

function authReducer(state, action) {
  switch (action.type) {
    case "GET_AUTH_PROFILE":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_BALANCE":
      return {
        ...state,
        user: action.user,
        isAuth: true,
        isLoading: false,

      };
    case "GET_TRANSACTIONS":
      return {
        ...state,
        user: null,
        isAuth: false,

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
 const [state, dispatch] = useReducer(authReducer, propsState);

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

export { AppContext, AppProvisioner, useAppProvider };
