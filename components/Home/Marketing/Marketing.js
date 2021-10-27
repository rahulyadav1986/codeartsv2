import Link from "next/link"
import MarketingList from "./MarketingList"
const Marketing = ()=> {
    return(
        <>
            <div className="cs-marketing_section pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-left_section">
                        <p>Praesent sollicitudin felis a ornare volutpat. Nullam males uada sem sit amet semper tristique. Donec nec neque lectus. Nunc mattis, lect us eu lacinia pretium, nisl nisi interdum tortor, id lacinia massa purus feugiat nunc. Pellentesue ligula pellentesque, gravida nisi ac, facilisis sapien Dotas a metus eu, efficitur sodales.<br /><br />

                        interdum tortor, id lacinia massa purus feugiat nunc. Pellique aliquet ssa purus feugiat nunc. Pellentes ue ligula pellent.</p>
                        <ul className="cs-action_button">
                            <MarketingList />
                        </ul>
                    </div>
                    <div className="cs-right_section">
                        <img src="../images/marketing_bg.png" alt="" />
                        <div className="cs-content_area">
                            <div className="cs-custom_heading">
                                <img src="../images/blub.png" alt="" />
                                <h2>Have a project in mind? Let’s get to work.</h2>
                                <p>Find out how it works and ask<br />any questions you may have.</p>
                            </div>
                            <div className="cs-button small">
                                <Link href="/about"><a className="d-flex align-center justify-center">Discover More</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Marketing