import Logo from "./Logo";
import CompanyAddress from "./CompanyAddress";
import CompanyInfo from "./CompanyInfo";
const RightSideBar= ()=>{
    
    return(
        <>            
            <Logo src="../images/logo_mobile.png" />
            <p>Codrarts Solution Pvt Ltd is one of the newest and best web design companies in Kolkata, offering a one stop web site design and web development solution for our customers.</p>
            <div className="cs-company_details">
                <h3>Contact Address</h3>
                <CompanyAddress />
            </div>
            <div className="cs-company_details">
                <h3>Contact Info</h3>
                <CompanyInfo />
            </div>
            
        </>
    )
}

export default RightSideBar