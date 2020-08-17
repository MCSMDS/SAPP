import React,{ useContext } from 'react'
export const useReduxContext = () => useContext(React.createContext(null));