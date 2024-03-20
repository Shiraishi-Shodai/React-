import React, { createContext, useState } from 'react'

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = ({children}) => {
      // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);
//   const sampleObj = {sampleValue : "テスト"};


    return (
        <AdminFlagContext.Provider value={{isAdmin, setIsAdmin}}>
            {children}
        </AdminFlagContext.Provider>
    )
}