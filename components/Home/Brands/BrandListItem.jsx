const BrandListItem = (props)=>{
    return(
        <>
            <div className="cs-brand_item">
                <div className="cs-brands_pic_back">
                    <img src={props.img1} className="one" alt="" />
                    <img src={props.img2} className="two" alt="" />
                </div>
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default BrandListItem