const CompanyAddressItem = (props)=>{
    return(
        <>
            <li className="d-flex align-center">
                <lottie-player 
                    src={props.icon}  
                    background="transparent"  
                    speed="1"  
                    loop autoplay>
                </lottie-player>
                <p>
                    <strong>{props.country} </strong><br />
                    {props.address}  
                </p>
            </li>
        </>
    )
}

export default CompanyAddressItem