const CompanyInfoItem = ({info})=>{
    return(
        <>
            <li className="d-flex align-center">
                <lottie-player 
                    src={info.icon} 
                    background="transparent"  
                    speed="1"  
                    loop autoplay>
                </lottie-player>
                <p dangerouslySetInnerHTML={{__html:info.info}}></p>
            </li>
        </>
    )
}

export default CompanyInfoItem