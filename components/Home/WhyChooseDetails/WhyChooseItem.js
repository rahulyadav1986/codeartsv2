const WhyChooseItem = (props)=>{
    return(
        <>
            <li>
                <lord-icon 
                src={props.icon}
                trigger="loop" 
                delay="2000" 
                colors="primary:#121331,secondary:#f47514">
                </lord-icon>
                <h3><a href="">{props.title}</a></h3>
                <p>{props.des}</p>
            </li>
        </>
    )
}

export default WhyChooseItem