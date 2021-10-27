import MarketingListItem from "./MarketingListItem";
import { marketinglistdata } from "../../../data/marketinglistdata";
const MarketingList = ()=>{
    return(
        <>
        {
            marketinglistdata.map((item, i)=>{
                return(
                    <MarketingListItem key={i}
                        icon={item.icon}
                        title={item.title}
                    />
                )
            })
        }
            
           
        </>
    )
}

export default MarketingList