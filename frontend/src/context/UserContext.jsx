import React, { createContext, useState } from 'react'

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {
    
    const [user, setUser] = useState({
        fullname:{
            firstname:'',
            lastname:''
        },
        email:"",
    })

  return (
    <div>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    </div>
  )
}
