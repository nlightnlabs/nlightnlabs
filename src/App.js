import "bootstrap/dist/css/bootstrap.min.css"
import 'animate.css';

import Requests_icon from './components/graphics/Requests_icon.png'
import AR_Inbox_icon from './components/graphics/AR_Inbox_icon.png'
import Spend_Value_icon from './components/graphics/Spend_Value_icon.png'
import Spend_Analysis_icon from './components/graphics/Spend_Analysis_icon.png'
import Tail_Optimizer_icon from './components/graphics/Tail_Optimizer_icon.png'
import SpendFlow_icon from './components/graphics/SpendFlow_icon.png'
import DealFlow_icon from './components/graphics/DealFlow_icon.png'
import SupplyFlow_icon from './components/graphics/SupplyFlow_icon.png'
import PeopleFlow_icon from './components/graphics/PeopleFlow_icon.png'
import Test_App_icon from './components/graphics/Test_App_icon.png'
import nlightn_labs_logo from './components/graphics/nlightn_labs_logo.png'


function App() {

  const logoStyle = {
    maxHeight: 200,
    maxWidth: 400
  }


  const appList =[
    {name: "RequestFlow", icon: Requests_icon, link:"RequestFlow", description: "Intake solution for managing all requests made by employees including requests for purchases, software access, IT equipment, contracts, sourcing, budgets and more"},
     {name: "SpendFlow", icon: SpendFlow_icon, link:"SpendFlow", description: "Manage orders, invoices, payments, develop accurate spend plans, prepare budgets, and develop forecasting models by combining actual spend transactions data with forecasting and planning solutions"},
    {name: "SupplyFlow", icon: SupplyFlow_icon, link:"SupplyFlow", description: "Discover, evaluate and select suppliers through strategic negotiations to achieve optimal prices and terms for goods and services you need. Manage contracts and performance for suppliers"},
    {name: "DealFlow", icon: DealFlow_icon, link:"DealFlow", description: "Manage all sales activities including leads, quotes, territories, quotas, customer engagements, collections and more through email and other intake system integrations with accounting and other systems"},
    {name: "PeopleFlow", icon: PeopleFlow_icon, link:"PeopleFlow", description: "Manage employee information, recruiting activities, hiring, temporary staff, and exists"},
    {name: "ARFlow", icon: AR_Inbox_icon, link:"ARFlow", description: "Email inbox automation and collections management for Accounts Receivable teams"},
    {name: "Spend Evaluator", icon: Spend_Analysis_icon, link:"Spend_Evaluator", description: "Analyze AP spend data for understanding overall spend trends, areas of most spend, supplier consolidation opportunities, payment term compliance and more"},
    {name: "Spend Value", icon: Spend_Value_icon, link:"Spend_Value", description: "Quantify the savings and value impact of spend management including proftiability and cash, efficiency, risk, and more"},
    {name: "Tail Optimizer", icon: Tail_Optimizer_icon, link:"Tail_Optimizer", description: "Optimize and manage your spend with tail suppliers to maximize savings and efficiency"},
    {name: "Test App", icon: Test_App_icon, link:"TestApp", description: "Internal App for testing integrations and APis"},
    {name: "TestHTML", icon: nlightn_labs_logo, link:"./test.html", description: "testhtml"}
  ]

  const pageStyle={
    backgroundSize: "cover",
    backgroundImage: "linear-gradient(0deg, rgb(220, 230, 255), rgb(245, 250, 255), rgb(245, 250, 255), white)",
    height: 1200,
    width: "100vw",
    minWidth: 300,
    overflow: "auto"
  }

  const iconStyle={
    height: 75,
    width: 75
  }

  return (
    
    <div className="flex-container flex-wrap animate__animated animate__fadeIn" style={pageStyle}>
      <div className="row" style={{height:"100vh", overflowY:"auto"}}>
        <div className="col-1"></div>
        <div className="col-md-10 col-12">


          <div className="d-flex d-md-none justify-content-center mt-3">  
            <img src={nlightn_labs_logo} style={{maxHeight: 100, maxWidth: 200}} alt="nlightnlabs logo"></img>
          </div>
          <div className="d-none d-md-flex justify-content-center mt-3">
            <img src={nlightn_labs_logo} style={{maxHeight: 200, maxWidth: 400}} alt="nlightnlabs logo"></img>
          </div>
          <h2 className="text-center mt-3">Solutions</h2>


          <div className="d-flex justify-content-center mt-3 flex-wrap">
            {
              appList.map((item,index)=>(
                <>
                  <div className="d-md-none d-flex text-dark bg-white rounded-0 shadow-sm m-1 p-3" style={{widgth: "100%", height: 150, cursor: "pointer"}} onClick={(e)=>window.location.assign(item.link)}>
                  <img src={item.icon} className="card-img-top me-3" style={{height: 100, width: 100}} alt={`${item.name} icon`}></img>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-secondary mt-1" style={{height: 75, fontSize: "14px", overflowY: "auto"}}>{item.description}</p>
                    </div>
                    
                  </div>
                  
                  <div className="d-none d-md-flex card shadow m-3 p-3" style={{width: 300, cursor: "pointer"}} onClick={(e)=>window.location.assign(item.link)}>
                    <img src={item.icon} className="card-img-top" style={iconStyle} alt={`${item.name} icon`}></img>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-secondary mt-1" style={{height: 150, fontSize: "14px", overflowY: "auto"}}>{item.description}</p>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
        </div>
        <div className="col-1"></div>
      </div>
      
    </div>
  );
}

export default App;
