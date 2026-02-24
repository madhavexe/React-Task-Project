import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null)
    

  return(
    <AuthContext.Provider>
        {children}
        </AuthContext.Provider>
  )
}

export default AuthProvider