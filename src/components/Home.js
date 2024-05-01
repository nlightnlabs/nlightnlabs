import React, {useContext, useEffect} from 'react';
import {Context } from './Context';
import "bootstrap/dist/css/bootstrap.min.css"
import 'animate.css';
import {generalIcons, appIcons} from './apis/icons.js'
import * as nlightnApi from "./apis/nlightn.js"


const Home = (props) => {
    const {
      user,
      setUser,
      userLoggedIn,
      setUserLoggedIn,
      account,
      setAccount,
      currentPage,
      setCurrentPage,
      currentPageName,
      setCurrentPageName,
      appIcons,
      setAppIcons,
      pages,
      setPages,
      pageList,
      setPageList,
      appData,
      setAppData
      } = useContext(Context)
    
      const logoStyle = {
        maxHeight: 200,
        maxWidth: 400
      }
    
    
      const appList =[
        {name: "Business Engagement System", icon: `${generalIcons}/DealFlowIcon.png`, link:"besfreeagent", description: "Manage orders, invoices, payments, develop accurate spend plans, prepare budgets, and develop forecasting models by combining actual spend transactions data with forecasting and planning solutions"},
        {name: "AI Deployment Lab", icon: `${generalIcons}/genAI_icon.png`, link: "ailab", description: "Deploy AI with custom LLMs, AI models, agents, bots and data management"},
        {name: "Secure File Transfer", icon: `${generalIcons}/secure_file_icon.png`, link: "secure_file_transfer", description: "Upload files in a secure portal"},
      ]

    
      const iconStyle={
        height: 75,
        width: 75
      }

      const handleClick=(link)=>{
        const path = "../../../"
        window.location.assign(`path${link}/public/?userLoggedIn="${userLoggedIn}"&user="${user}"`)
      }

  return (
    <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
            <img src={`${generalIcons}/nlightn+labs+logo+-+animated.gif`} alt="nlightn labs log" style={logoStyle}></img>
        </div> 

        <div className="d-flex justify-content-center mt-3 flex-wrap">
           
            {
            appList.map((item,index)=>(
                <div key={index} className="d-flex flex-column" style={{height: "500px"}}>
                  <div className="d-none d-md-flex card shadow m-3 p-3" style={{width: 300, cursor: "pointer"}} onClick={(e)=>window.location.assign(item.link)}>
                      <img src={item.icon} className="card-img-top" style={iconStyle} alt={`${item.name} icon`}></img>
                      <div className="card-body">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-secondary mt-1" style={{height: 150, fontSize: "14px", overflowY: "auto"}}>{item.description}</p>
                      </div>
                  </div>
                </div>
            ))
            }
        </div>
    </div>
  )
}

export default Home