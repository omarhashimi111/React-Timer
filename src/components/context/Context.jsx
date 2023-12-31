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
    },
    isPlay: false
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
    function pplay(){
        dispatch({
            type: "PLAY"
        })
    }
    function res(){
        dispatch({
            type: "RESET"
        })
    }




    return (
        <ContextState.Provider value={{
            display: state.display,
            session: state.session,
            breaks: state.breaks,
            increase: increase,
            decrease,
            isPlay: state.isPlay,
            pplay,
            res
        }}>
            {children}
        </ContextState.Provider>
    )
}






