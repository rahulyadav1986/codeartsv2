const Footer = ()=> {
    return(
        <>
            <footer>
                <div className="cs-top pt pb">
                    <div className="cs-container d-flex align-center justify-between">
                        <h2>Have A New Project In Mind? Contact Us Today To Discuss.</h2>
                        <ul className="cs-contact_details d-flex align-center">
                            <li className="d-flex align-center">
                                <lord-icon
                                    src="https://cdn.lordicon.com/ltxkhbfa.json"
                                    trigger="loop"
                                    delay="2000"
                                    colors="primary:#ffffff,secondary:#f47514">
                                </lord-icon>
                                <div>
                                    <span>Phone Number</span><br />
                                    +1(888)123-4567
                                </div>
                            </li>
                            <li className="d-flex align-center">
                                <lord-icon
                                    src="https://cdn.lordicon.com/xkggbfwx.json"
                                    trigger="loop"
                                    delay="2000"
                                    colors="primary:#ffffff,secondary:#f47514">
                                </lord-icon>
                                <div>
                                    <span>Email Address</span><br />
                                    info@example.com
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cs-bottom pt pb">
                    <div className="cs-container">
                        <div className="cs-footer_items">
                            <div className="cs-footer_item">
                                <h3>Get In Touch</h3>
                                <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                                <h3>Follow Us</h3>
                                <ul className="cs-social d-flex align-center">
                                    <li><a href="" className="d-flex align-center justify-center"><img src="../images/ss1.png" alt="" /></a></li>
                                    <li><a href="" className="d-flex align-center justify-center"><img src="../images/ss2.png" alt="" /></a></li>
                                    <li><a href="" className="d-flex align-center justify-center"><img src="../images/ss3.png" alt="" /></a></li>
                                    <li><a href="" className="d-flex align-center justify-center"><img src="../images/ss4.png" alt="" /></a></li>
                                    <li><a href="" className="d-flex align-center justify-center"><img src="../images/ss5.png" alt="" /></a></li>
                                </ul>
                            </div>
                            <div className="cs-footer_item">
                                <h3>Important Links</h3>
                                <ul className="cs-ft_menu">
                                    <li><a href="">About Us</a></li>
                                    <li><a href="">Our Reviews</a></li>
                                    <li><a href="">Blogs</a></li>
                                    <li><a href="">Contacts</a></li>
                                    <li><a href="">Terms & Conditions</a></li>
                                    <li><a href="">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div className="cs-footer_item">
                                <h3>Our Services</h3>
                                <ul className="cs-ft_menu">
                                    <li><a href="">Plugin customization</a></li>
                                    <li><a href="">Web Development</a></li>
                                    <li><a href="">App Development</a></li>
                                    <li><a href="">Web Design</a></li>
                                    <li><a href="">App Design</a></li>
                                    <li><a href="">UI/UX Design</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cs-copyright">
                    Copyright © 2021 Codearts Solutions Pvt Ltd, All rights reserved.
                </div>
            </footer>

        </>
    )
}

export default Footer