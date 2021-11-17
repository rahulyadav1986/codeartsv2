import CustomHead from "../components/Shared/CustomHead"
import Header from "../components/Shared/HeaderDetails/Header"
import InnerHero from "../components/Shared/InnerHero"
import RightAddressInfo from "../components/Shared/HeaderDetails/RightAddressInfo"
import Footer from "../components/Shared/FooterDetails/Footer"
const Contact = ({metaData, headerData, titleData, contactData, footer})=>{
    return(
        <>
            <CustomHead metaData={metaData} />   
            <Header headerData={headerData} />           
            <InnerHero titleData={titleData} />
            <div className="cs-contact_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading top center">
                        <h4>{contactData[0].subtitle}</h4>
                        <h2 dangerouslySetInnerHTML={{__html:contactData[0].title}}></h2>
                        <p className="top_dres" dangerouslySetInnerHTML={{__html:contactData[0].descriptions}}></p>
                    </div>
                    <div className="cs-contact_main_section pt_small">
                        <div className="cs-left_content_area">
                            <div className="cs-custom_heading">
                                <h4>{contactData[0].contactLeftHeadingDetails[0].subtitle}</h4>
                                <h2>{contactData[0].contactLeftHeadingDetails[0].title}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{__html:contactData[0].contactLeftHeadingDetails[0].dscriptions}}></p>
                            <RightAddressInfo headerData={headerData} />   
                        </div>
                        <div className="cs-contact_form_section">
                        <div className="cs-custom_heading">
                                <h4>{contactData[0].contactRightHeadingDetails[0].subtitle}</h4>
                                <h2>{contactData[0].contactRightHeadingDetails[0].title}</h2>
                            </div>
                            <p dangerouslySetInnerHTML={{__html:contactData[0].contactRightHeadingDetails[0].dscriptions}}></p>
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
            <div className="cs-google_map" dangerouslySetInnerHTML={{__html:contactData[0].contactMapUrl}}></div>
            <Footer footer={footer} />
        </>
    )
}

export default Contact

export async function getServerSideProps(){

    const resposemeta= await fetch("http://localhost:3000/contactPageSeoMeta")
    const metadata = await resposemeta.json()

    const responseHeader = await fetch("http://localhost:3000/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle= await fetch("http://localhost:3000/contactPageTitle");
    const titledata = await resposetitle.json()

    const responseContactsDetails = await fetch("http://localhost:3000/contactPageInfo")
    const contactdata = await responseContactsDetails.json()

    const responseFooter = await fetch("http://localhost:3000/footerDetails")
    const footerdata = await responseFooter.json()
    
    return{
        props:{
            metaData: metadata, 
            headerData: headerdata,
            titleData: titledata, 
            contactData: contactdata, 
            footer: footerdata,         
        }
    }
    
  }