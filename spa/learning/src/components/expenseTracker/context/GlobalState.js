import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}

//Create Conext from initial State
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    //use reducer to provider a dispatcher which acts on state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    //define provider with a value and passing it to childrens
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}