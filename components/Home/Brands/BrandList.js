import BrandListItem from "./BrandListItem";
import { branditemdata } from "../../../data/branditemdata";
const BrandList = ()=>{
    return(
        <>
        {
            branditemdata.map((item, i)=>{
                return(
                    <BrandListItem key={i}
                        title={item.title}
                        img1={item.img1}
                        img2={item.img2}
                    />
                )
            })
        }            
        </>
    )
}

export default BrandList