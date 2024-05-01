import React, {useContext, useEffect} from 'react';
import {Context } from './components/Context';
import "bootstrap/dist/css/bootstrap.min.css"
import 'animate.css';
import {generalIcons} from './components/apis/icons.js'
import * as nlightnApi from "./components/apis/nlightn.js"

import Home from './components/Home.js';
import Login from './components/Login.js';
import UserInfo from './components/UserInfo.js';
import ForgotPassword from './components/ForgotPassword.js';
import ResetPassword from './components/ResetPassword.js';


function App() {

  const {
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
  } = useContext(Context)

  let pageData=[
    {name: "Home", component: <Home/>, data: "request_summary", request_type: false, description: "Description for this request", icon:`${generalIcons}/home_icon.png`},
    {name: "Log In", component: <Login/>, data: "user_info", request_type: false, description: "Login page", icon:`${generalIcons}/log_in_icon.png`},
    {name: "User Info", component: <UserInfo/>, data: "user_info", request_type: false, description: "User profile", icon:`${generalIcons}/sign_up_icon.png`},
    {name: "Forgot Password", component: <ForgotPassword/>, data: "email", request_type: false, description: "Forgot Password page", icon:`${generalIcons}/sign_up_icon.png`},
    {name: "Reset Password", component: <ResetPassword/>, data: "user_info", request_type: false, description: "Password reset page", icon:`${generalIcons}/sign_up_icon.png`},
  ]

  const getData = async()=>{
    let response = await nlightnApi.getTable("users")
    const users = response.data
    console.log("users",users)

    response = await nlightnApi.getTable("apps")
    const apps = response.data
    console.log("apps",apps)
    
    response = await nlightnApi.getTable("icons")
    const icons = response.data
    console.log("icons",icons)

  }
  

  const getPageData = async(req, res)=>{
    try{
      // const response = await getTable("pages")
      setPages(pageData)
      setPage(pageData.find(x=>x.name===pageName))
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    console.log("test")
    getData()
    getPageData()
  },[])



  const pageStyle={
    backgroundSize: "cover",
    backgroundImage: "linear-gradient(0deg, rgb(220, 230, 255), rgb(245, 250, 255), white)",
    height: "100vh",
    width: "100vw",
    overflow: "hidden"
  }

  
  return (
    <div style={pageStyle}>
        <>{page.component}</>
    </div>
  );
}

export default App;