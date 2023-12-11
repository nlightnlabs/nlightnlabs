import "bootstrap/dist/css/bootstrap.min.css"

import Requests_icon from './components/graphics/Requests_icon.png'
import AR_Inbox_icon from './components/graphics/AR_Inbox_icon.png'
import Spend_Savings_icon from './components/graphics/Spend_Savings_icon.png'
import Spend_Analysis_icon from './components/graphics/Spend_Analysis_icon.png'
import Tail_Spend_icon from './components/graphics/Tail_Spend_icon.png'
import SpendFlow_icon from './components/graphics/SpendFlow_icon.png'
import DealFlow_icon from './components/graphics/DealFlow_icon.png'
import SupplyFlow_icon from './components/graphics/SupplyFlow_icon.png'
import PeopleFlow_icon from './components/graphics/PeopleFlow_icon.png'


function App() {

  const logo = 'https://nlightnlabs01.s3.us-west-1.amazonaws.com/nlightn+labs+logo.png'
  const logoStyle = {
    maxHeight: 200,
  }



  const appList =[
    {name: "Requests", icon: Requests_icon, link:"/intake", description: "Intake solution for managing all requests made by employees including requests for purchases, software access, IT equipment, contracts, sourcing, budgets and more."},
     {name: "SpendFlow", icon: SpendFlow_icon, link:"/SpendFlow", description: "Manage spend areas, develop accurate spend plans, prepare budgets, and develop forecasting models by combining actual spend transactions data with forecasting and planning solutions"},
    {name: "SupplyFlow", icon: SupplyFlow_icon, link:"/SupplyFlow", description: "Discover, evaluate and select suppliers through strategic negotiations to achieve optimal prices and terms for goods and services you need. Manage contracts and performance for suppliers"},
    {name: "DealFlow", icon: DealFlow_icon, link:"/DealFlow", description: "Manage all sales activities including leads, quotes, territories, quotas, customer engagements, collections and more through email and other intake system integrations with accounting and other systems"},
    {name: "PeopleFlow", icon: PeopleFlow_icon, link:"/PeopleFlow", description: "Employee and temp labor management"},
    {name: "ARBoxFlow", icon: AR_Inbox_icon, link:"/ARBoxFlow", description: "Email inbox automation and collections management for Accounts Receivable teams"},
    {name: "Spend Evaluation", icon: Spend_Analysis_icon, link:"/Spend_Evaluation", description: "Analyze AP spend data for understanding overall spend trends, areas of most spend, supplier consolidation opportunities, payment term compliance and more."},
    {name: "Spend Savings", icon: Spend_Savings_icon, link:"/Spend_Savings", description: "Quantify the savings and value impace of spend management including impact to proftiability and cash, efficiency, risk, and more."},
    {name: "Tail Spend", icon: Tail_Spend_icon, link:"/Tail_Spend", description: "Optimize and manage your spend with tail suppliers to maximize savings and efficiency"},
  ]

  const pageStyle={
    backgroundSize: "cover",
    backgroundImage: "linear-gradient(0deg, rgb(220, 230, 255), rgb(245, 250, 255), rgb(245, 250, 255), white)",
    height: 1200,
    width: "100%",
    overflow: "auto"
  }

  const iconStyle={
    height: 75,
    width: 75
  }

  return (
    <div className="flex-container flex-wrap" style={pageStyle}>
      <div className="row" style={{height:"100vh", overflowY:"auto"}}>
        <div className="col-1"></div>
        <div className="col-md-10 col-12">
          <div className="d-flex justify-content-center mt-5">
            <img src={logo} style={logoStyle} alt="nlightnlabs logo"></img>
          </div>
          <h2 className="text-center mt-3">Data-Centric GenAI Business Apps</h2>
          <div className="d-flex justify-content-center mt-3 flex-wrap">
            {
              appList.map((item,index)=>(
                <div key={index}>
                <a href={item.link} style={{textDecoration: "none"}}>
                  <div className="d-md-none d-flex text-dark bg-white rounded-0 shadow-sm m-1 w-100 p-3" style={{height: 150, cursor: "pointer"}}>
                  <img src={item.icon} className="card-img-top me-3" style={{height: 100, width: 100}} alt={`${item.name} icon`}></img>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-secondary mt-1" style={{height: 75, fontSize: "14px", overflowY: "auto"}}>{item.description}</p>
                    </div>
                  </div>

                  <div className="d-none d-md-flex card shadow m-3 p-3" style={{width: 300, cursor: "pointer"}}>
                    <img src={item.icon} className="card-img-top" style={iconStyle} alt={`${item.name} icon`}></img>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{item.name}</h5>
                      <p className="card-text text-secondary mt-1" style={{height: 150, fontSize: "14px", overflowY: "auto"}}>{item.description}</p>
                    </div>
                  </div>
                </a>
                </div>
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
