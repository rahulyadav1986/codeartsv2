const MarketingListItem = (props)=>{
    return(
        <>
            <li>
                <a href="" className="d-flex align-center">
                    <lord-icon
                        src={props.icon}
                        trigger="loop"
                        delay="2000"
                        colors="primary:#121331,secondary:#f47514" 
                    >
                    </lord-icon>
                    {props.title}
                </a>
            </li>
        </>
    )
}

export default MarketingListItem