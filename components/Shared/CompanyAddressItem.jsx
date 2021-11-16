const CompanyAddressItem = ({address})=>{
    return(
        <>
            <li className="d-flex align-center">
                <lottie-player 
                    src={address.icon}  
                    background="transparent"  
                    speed="1"  
                    loop autoplay>
                </lottie-player>
                <p>
                    <strong>{address.country} </strong><br />
                    {address.address}  
                </p>
            </li>
        </>
    )
}

export default CompanyAddressItem