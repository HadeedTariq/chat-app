import { createContext, useContext, useReducer } from "react";

const Context=createContext()
export const ContextProvider=({children,reducer,state})=>{
    return (
        <Context.Provider value={useReducer(reducer,state)}>
            {children}
        </Context.Provider>
    )
}

export const useUser=()=>useContext(Context)