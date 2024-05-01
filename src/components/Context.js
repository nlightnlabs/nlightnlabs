import React, { useState, createContext } from 'react'

export const Context = createContext(null);

export const ContextProvider = ({children}) =>{

    const [user, setUser] = useState({})
    const [userLoggedIn, setUserLoggedIn] = useState(true);
    const [page, setPage] = useState({});
    const [pageName, setPageName] = useState("Home");
    const [account, setAccount] = useState({});
    const [pages, setPages] = useState([])
    const [appData, setAppData] = useState({});
    const [appIcons, setAppIcons] = useState([])
   
    const [pageList, setPageList] = useState([])

    const globalStates = {
        user,
        setUser,
        userLoggedIn,
        setUserLoggedIn,
        account,
        setAccount,
        page,
        setPage,
        pageName,
        setPageName,
        appIcons,
        setAppIcons,
        pages,
        setPages,
        pageList,
        setPageList,
        appData,
        setAppData
    }

    return(
        <Context.Provider value={globalStates}>{children}</Context.Provider>
    )
}