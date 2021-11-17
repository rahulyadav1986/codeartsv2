import CustomHead from "../components/Shared/CustomHead"
import InnerHero from "../components/Shared/InnerHero"
import WhyChooseusContent from "../components/Home/WhyChooseDetails/WhyChooseUsContent"
import SeoListDetails from "../components/About/SeoListDetails"
import WhatWeDoItem from "../components/Services/WhatWeDoItem"
import WhyChooseItem from "../components/Home/WhyChooseDetails/WhyChooseItem"
import WhyListItem from "../components/Home/WhyChooseDetails/WhyListItem"
import Header from "../components/Shared/HeaderDetails/Header"
import Testimonials from "../components/Testimonials/Testimonials"
import Skills from "../components/Skills/Skills"
import Teams from "../components/Team/Teams"
import Footer from "../components/Shared/FooterDetails/Footer"
const About = ({metaData, headerData, titleData,  whychoose, serviceheadings, services, skills, teams, testimonials, footer})=>{
    
    return(
        <>
            <CustomHead metaData={metaData} />   
            <Header headerData={headerData} />          
            <InnerHero titleData={titleData} />
            <div className="cs-why_choose_us_section inner pb">
                <div className="cs-container d-flex align-center justify-between">
                    <ul className="cs-why_option">
                        {
                            whychoose[0].whychooselistdata.map((whychoose,i)=>{
                                return(
                                    <WhyChooseItem key={i} whychoose={whychoose} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="cs-about_section pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-content_area">
                        <WhyChooseusContent whychoose={whychoose} />
                        <p>{whychoose[0].aboutadditional}</p>
                        <ul className="cs-list d-flex align-center justify-between">
                            {
                                whychoose[0].whylistdata.map((whychoose,i)=>{
                                    return(
                                        <WhyListItem key={i} whychoose={whychoose} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="cs-right_section">
                        <img src={whychoose[0].img1} alt="" />
                        <span className="cs-business_label">
                            <h4>{whychoose[0].icontitle_one}</h4>
                            <lord-icon
                                src={whychoose[0].icon1}
                                trigger="loop"
                                delay="2000" 
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                </div>
            </div>
            <div className="cs-about_section cs-seo_company pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-right_section">
                        <img src={whychoose[0].img2} alt="" />
                        <span className="cs-business_label">
                            <h4>{whychoose[0].icontitle_two}</h4>
                            <lord-icon
                                src={whychoose[0].icon2}
                                trigger="loop"
                                delay="2000" 
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                    <div className="cs-content_area">
                        <div className="cs-custom_heading">
                            <h4>{whychoose[0].aboutextrasubtitle}</h4>
                            <h2>{whychoose[0].aboutextratitle}</h2>
                        </div>
                        <p dangerouslySetInnerHTML={{__html:whychoose[0].aboutextradescription}}></p>
                        <ul className="seo_list_back">
                            <SeoListDetails />
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div className="cs-services_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>{serviceheadings[0].subtitle}</h4>
                        <h2>{serviceheadings[0].maintitle}</h2>
                    </div>  
                    <div className="cs-main_section pt_small">
                    {
                        services.map((service,i)=>{
                        return(
                            <WhatWeDoItem key={i} service={service}  />
                        )
                        })
                    }
                        
                    </div>  
                </div>
            </div>
            <Teams teams={teams} />
            <Skills skills={skills} />
            <Testimonials testimonials={testimonials} />
            <Footer footer={footer} />
        </>
    )
}

export default About

export async function getServerSideProps(){
    const resposemeta= await fetch("http://localhost:3000/aboutPageSeoMeta");
    const metadata = await resposemeta.json();

    const responseHeader = await fetch("http://localhost:3000/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle= await fetch("http://localhost:3000/aboutPageTitle")
    const titledata = await resposetitle.json()

    const resposeWhychoose= await fetch("http://localhost:3000/whychooseus")
    const whychoosedata = await resposeWhychoose.json()

    const responseServiceHeadings = await fetch("http://localhost:3000/serviceheadings")
    const ServicesHeadingData = await responseServiceHeadings.json()

    const responseServices = await fetch("http://localhost:3000/services")
    const ServicesData = await responseServices.json()

    const responseSkill = await fetch("http://localhost:3000/skillsDetails")
    const skillData = await responseSkill.json()

    const responseTeam = await fetch("http://localhost:3000/teamDetails")
    const teamData = await responseTeam.json()

    const responseTestimonial = await fetch("http://localhost:3000/testimonailsDetails")
    const testimonialdata = await responseTestimonial.json()

    const responseFooter = await fetch("http://localhost:3000/footerDetails")
    const footerdata = await responseFooter.json()

    return{
        props:{
            metaData: metadata,
            headerData: headerdata,
            titleData: titledata,
            whychoose: whychoosedata,
            serviceheadings: ServicesHeadingData,
            services: ServicesData,
            skills: skillData,
            teams: teamData,
            testimonials: testimonialdata,
            footer: footerdata,
        }
    }

    
    
}

