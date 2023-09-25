import { Children, createContext, useReducer } from 'react'
import Action from "./Action"


const initialState = {
    session: {
        min: 5,
        hr: 0
    },
    breaks: {
        min: 3,
        hr: 0
    }
}
export const ContextState = createContext(initialState)


export const ContextProvider = ({ children }) => {
    const [state , dispatch] = useReducer(Action,initialState)

    // Actions

    function increase(id){
        dispatch({
            type: "INCREASE",
            payload: id
        })
    }

    function decrease(id){
        dispatch({
            type: "DECREASE",
            payload: id
        })
    }



    return (
        <ContextState.Provider value={{
            display: state.display,
            session: state.session,
            breaks: state.breaks,
            increase: increase,
            decrease
        }}>
            {children}
        </ContextState.Provider>
    )
}






