import Image from 'next/image'
import Link from 'next/link'
const Hero = ()=> {
    return (
      <>
        <div className="cs-hero_section">
        <div className="cs-container d-flex align-center justify-between">
            <div className="cs-content_area">
                <h1>
                    Influencer  Marketing for Your 
                    <span className="cs-text_slide_items">Business, Ideas, Sell</span>
                    <span className="cs-text_slider"></span>
                </h1>
                <p>Extract real business value from social media. Ensuring the best return on investment for your bespoke SEO campaign requirement.</p>
                <div className="cs-buttons_back d-flex align-center">
                    <div className="cs-button small">
                        <Link href="/contact"><a className="d-flex align-center justify-center white">Contact Today</a></Link>
                    </div>
                    <div className="cs-video_button d-flex align-center">
                        <div className="cs-play d-flex align-center justify-center" data-fancybox="true" data-src="https://www.youtube.com/watch?v=z2X2HaTvkl8">
                            <img src="../images/play.png" alt="" />
                        </div>
                        Our Latest Video
                    </div>
                </div>                
            </div>
            <div className="cs-avator_area move" data-speed="5">
                <span className="cs-connection d-flex align-center justify-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/xhwleznj.json"
                        trigger="loop"
                        delay="2000" 
                        colors="primary:#121331,secondary:#f47514">
                    </lord-icon>
                </span>
                <span className="cs-business d-flex align-center justify-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/qhviklyi.json"
                        trigger="loop"
                        delay="2000" 
                        colors="primary:#121331,secondary:#f47514">
                    </lord-icon>
                </span>
                <span className="cs-idea d-flex align-center justify-center">
                    <lord-icon
                        src="https://cdn.lordicon.com/ssdupzsv.json"
                        trigger="loop"
                        delay="2000" 
                        colors="primary:#121331,secondary:#f47514">
                    </lord-icon>
                </span>
                <img src="../images/hero_avator.png" className="main" alt="" />
            </div>
        </div>
    </div>
      </>
    )
}

export default Hero