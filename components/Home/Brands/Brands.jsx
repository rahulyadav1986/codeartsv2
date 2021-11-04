import BrandList from "./BrandList"
const Brands = ()=>{
    return(
        <>
            <div className="cs-brands pt pb">
                <div className="cs-container">
                    <div className="cs-brand_items owl-carousel" id="brand-slider">
                        <BrandList />
                    </div>
                </div>
                <div className="highlight_text">
                    <span>10,000+</span>Trusted Clients All Over The World
                </div>
            </div>
        </>
    )
}

export default Brands