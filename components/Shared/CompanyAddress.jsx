import CompanyAddressItem from "./CompanyAddressItem";
import { companyaddressdata } from "../../data/companyaddressdata";
const CompanyAddress = ()=>{
    return(
        <>
        <ul className="cs_contact_details">
            {
                companyaddressdata.map((item,i)=>{
                    return(
                        <CompanyAddressItem key={i}
                            icon={item.icon}
                            country={item.country}
                            address={item.address}
                        />
                    )
                })
            }
         </ul> 
        </>
    )
}
export default CompanyAddress