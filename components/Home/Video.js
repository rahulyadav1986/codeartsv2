const Video = ()=>{
    return(
        <>
            <div className="cs-video_section">
                <div className="cs-container">
                    <div className="cs-content_area">
                        <h2>We use our expertise and knowledge to take your business further.</h2>
                        <div className="cs-coun_down d-flex align-center justify-between">
                            <div className="cs-count d-flex align-end">
                                <div><span className="counter">20</span><sup>+</sup></div>
                                employees in a business
                            </div>
                            <div className="cs-count d-flex align-end">
                                <div><span className="counter">150</span><sup>+</sup></div>
                                projects for software
                            </div>                    
                        </div>
                        <a data-fancybox="false" data-src="https://www.youtube.com/watch?v=z2X2HaTvkl8" className="cs-video_button d-flex align-center justify-center">
                            <img src="../images/play-big.png" alt="" />
                            <span className="line-video-animation line-video-1"></span>
                            <span className="line-video-animation line-video-2"></span>
                            <span className="line-video-animation line-video-3"></span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default Video