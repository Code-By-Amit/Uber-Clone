import React, { createContext, useState } from 'react'

export const CaptainDataContext = createContext();

export const CaptainContext = ({children}) => {
    const [captain,setCaptain] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)

    const value ={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError
    }

  return (
    <CaptainDataContext.Provider value={value}>
        {children}
    </CaptainDataContext.Provider>
  )
}
