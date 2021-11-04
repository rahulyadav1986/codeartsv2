const CompanyInfoItem = (props)=>{
    return(
        <>
            <li className="d-flex align-center">
                <lottie-player 
                    src={props.icon} 
                    background="transparent"  
                    speed="1"  
                    loop autoplay>
                </lottie-player>
                <p>{props.ph1}<br />{props.ph2}{props.email1}<br />{props.email2}</p>
            </li>
        </>
    )
}

export default CompanyInfoItem