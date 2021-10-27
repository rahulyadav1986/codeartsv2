import WhyChooseItem from './WhyChooseItem'
import { whychoosedata } from '../../../data/whychoosedata'
const WhyChooseUsCards = ()=>{
    return(
        <>
            {
               whychoosedata.map((item,i)=>{
                return(
                    <WhyChooseItem key={i}
                        icon={item.icon}
                        title={item.title}
                        des={item.des}
                    />
                )
               }) 
            }
            
           
        </>
    )
}

export default WhyChooseUsCards