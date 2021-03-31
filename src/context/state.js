import React, { useReducer } from 'react';
import { Context } from './context';
import Reducer from './reducer';

import { IS_LOGGED, LOG_OUT } from "./types";

const State = ({children}) => {
    const initialState = {
        userName: "",
        isLogged: false
    }

    const [state, dispatch] = useReducer(Reducer, initialState);

    const setIsLogged = (userName) => dispatch({ type: IS_LOGGED, payload: { userName } })
    const logOut = () => dispatch({ type: LOG_OUT })

    return <Context.Provider
        value={{
            isLogged: state.isLogged,
            userName: state.userName,
            setIsLogged,
            logOut,
        }}>

        {children}

    </Context.Provider>
}

export default State;
