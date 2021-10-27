import CompanyAddress from "../components/Shared/CompanyAddress";
import CompanyInfo from "../components/Shared/CompanyInfo";
import CustomHead from "../components/Shared/CustomHead";
import InnerHero from "../components/Shared/InnerHero";
const Contact = ()=>{
    return(
        <>
            <CustomHead
                    title="Contact Us"
                    metades="This is About Us Content"
            />                
            <InnerHero
                pageTitle="Contact us"
            />
            <div className="cs-contact_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading top center">
                        <h4>BUSINESS</h4>
                        <h2>Find the Perfect Solution for<br />Your Business</h2>
                        <p className="top_dres">Lorem Ipsum ogravida nibh vel velit auctor alinean sollicitudi orem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh porttitor aliquam ex est</p>
                    </div>
                    <div className="cs-contact_main_section pt_small">
                        <div className="cs-left_content_area">
                            <div className="cs-custom_heading">
                                <h4>GET IN TOUCH</h4>
                                <h2>Contact Us</h2>
                            </div>
                            <p>I have worls-className, flexible support via live chat, email and hone. I guarantee that you’ll be able to have any issue resolved within 24 hours.</p>
                            <div className="cs-company_details">
                                <h3>Contact Address</h3>
                                <ul className="cs_contact_details">
                                    <CompanyAddress />
                                </ul>
                            </div>
                            <div className="cs-company_details">
                                <h3>Contact Info</h3>
                                <ul className="cs_contact_details">
                                    <CompanyInfo />
                                </ul>
                            </div>
                        </div>
                        <div className="cs-contact_form_section">
                            <div className="cs-custom_heading">
                                <h4>GET QUOTE</h4>
                                <h2>Drop Us a Line</h2>
                            </div>
                            <p>Programs provi patient peace mind when option.</p>
                            <div className="main_form_back">
                                <input type="text" className="input" placeholder="Your Name" name="" id="" />
                                <input type="email" className="input" placeholder="Your Email" name="" id="" />
                                <input type="text" className="input" placeholder="Your Phone" name="" id="" />
                                <input type="text" className="input" placeholder="Subject" name="" id="" />
                                <textarea name="" className="input" placeholder="Message" id="" cols="30" rows="10"></textarea>
                                <input type="submit" value="Submit" className="submit" />
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="cs-google_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.107365674464!2d88.34627871449842!3d22.575087385181536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bb45a3e979%3A0xb91c60cd69434867!2sStandard%20Chartered%20Bank%2019%20NS%20Road%20Kolkata!5e0!3m2!1sen!2sin!4v1580119221614!5m2!1sen!2sin" allowfullscreen=""></iframe>
            </div>
        </>
    )
}

export default Contact