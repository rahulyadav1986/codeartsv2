import CustomHead from "../components/Shared/CustomHead"
import InnerHero from "../components/Shared/InnerHero"
import WhyChooseusContent from "../components/Home/WhyChooseDetails/WhyChooseUsContent"
import SeoListDetails from "../components/About/SeoListDetails"
import SkillItem from "../components/Skills/SkillItem"
import TeamItem from "../components/Team/TeamItem"
import TestimonialItem from "../components/Testimonials/TestimonialItem"
import WhatWeDoItem from "../components/Services/WhatWeDoItem"
import WhyChooseItem from "../components/Home/WhyChooseDetails/WhyChooseItem"
import WhyListItem from "../components/Home/WhyChooseDetails/WhyListItem"
const About = ({metaData, titleData,  whychoose, services, skills, teams, testimonials})=>{
    
    return(
        <>
            <CustomHead metaData={metaData} />            
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
                        <img src="../images/about_us.jpg" alt="" />
                        <span className="cs-business_label">
                            <h4>Business label</h4>
                            <lord-icon
                                src="https://cdn.lordicon.com/qlbskwpn.json"
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
                        <img src="../images/about_us.jpg" alt="" />
                        <span className="cs-business_label">
                            <h4>SEO</h4>
                            <lord-icon
                                src="https://cdn.lordicon.com/uqpazftn.json"
                                trigger="loop"
                                delay="2000" 
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                    <div className="cs-content_area">
                        <div className="cs-custom_heading">
                            <h4>WHY CHOOSE US</h4>
                            <h2>Work With A Dedicated SEO Company</h2>
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has the industry’s standard dummy text ever since the when an.</p>
                        <ul className="seo_list_back">
                            <SeoListDetails />
                        </ul>
                    </div>
                    
                </div>
            </div>

            <div className="cs-services_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>WHAT WE DO</h4>
                        <h2>What We Offer</h2>
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
            <div className="cs-team_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>WHAT WE ARE</h4>
                        <h2>Our Specialist Teams</h2>
                    </div>
                    <div className="cs-main_team_section pt_small owl-carousel" id="team-slider">
                        {
                            teams.map((team, i)=>{
                                return(
                                    <TeamItem key={i} team={team} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="maximize_result pt pb">
                <div className="cs-container">
                    <div className="cs-head d-flex align-center justify-between">
                        <div className="cs-custom_heading">
                            <h2>Maximizing Your<br />Potentials With UVO<br />Service</h2>
                            <p>Praesent sollicitudin felis a ornare volutpat. Nullam males uada sem sit amet semper tristique. Donec nec neque lectus. Nunc lis a ornare volutpat. N mattis.</p>
                        </div>
                        <ul className="cs-skills_area">
                            {
                                skills.map((skill, i)=>{
                                    return(
                                        <li key={i}>
                                            <SkillItem skill={skill} />
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cs-testimonial_section pt pb">
                <div className="cs-container d-flex justify-between">
                    <div className="cs-custom_heading">
                        <h4>TESTIMONIALS</h4>
                        <h2>What Our Clients Say</h2>
                        <p>Codearts Solution stays ahead of the curve with digital marketing trends.</p>
                        <lord-icon
                            src="https://cdn.lordicon.com/wgkjwucf.json"
                            trigger="loop"
                            delay="2000"
                            colors="primary:#eff2f4,secondary:#eff2f4">
                        </lord-icon>
                    </div> 
                    <div className="cs-testimonial_main_area owl-carousel" id="testi-slider">
                        {
                            testimonials.map((testimonial,i)=>{
                                return(
                                    <TestimonialItem key={i} testimonial={testimonial} />
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default About

export async function getServerSideProps(){
    const resposemeta= await fetch("http://localhost:3000/aboutPageSeoMeta");
    const metadata = await resposemeta.json();

    const resposetitle= await fetch("http://localhost:3000/aboutPageTitle");
    const titledata = await resposetitle.json();

    const resposeWhychoose= await fetch("http://localhost:3000/whychooseus");
    const whychoosedata = await resposeWhychoose.json();

    const responseServices = await fetch("http://localhost:4000/api/services");
    const ServicesData = await responseServices.json();

    const responseSkill = await fetch("http://localhost:4000/api/skills");
    const skillData = await responseSkill.json();

    const responseTeam = await fetch("http://localhost:4000/api/teams");
    const teamData = await responseTeam.json();

    const responseTestimonial = await fetch("http://localhost:4000/api/testimonials");
    const testimonialData = await responseTestimonial.json();
    return{
        props:{
            metaData: metadata,
            titleData: titledata,
            whychoose: whychoosedata,
            services: ServicesData,
            skills: skillData,
            teams: teamData,
            testimonials: testimonialData.slice(0,3)
        }
    }

    
    
}

