import CompanyInfoItem from "./CompanyInfoItem";
import { companyinfodata } from "../../data/companyinfodata";
const CompanyInfo = ()=>{
    return(
        <>
            <ul className="cs_contact_details">
                {
                    companyinfodata.map((item, i)=>{
                        return(
                            <CompanyInfoItem key={i}
                                icon={item.icon}
                                ph1={item.ph1}
                                ph2={item.ph2}
                                email1={item.email1}
                                email2={item.email2}
                            />
                        )
                    })
                }
                
                
            </ul>
        </>
    )
}

export default CompanyInfo