import dynamic from 'next/dynamic'
import CustomHead from '../../components/Shared/CustomHead'
import InnerHero from "../../components/Shared/InnerHero"
import SkillItem from "../../components/Skills/SkillItem"
const WhatWeDoItem = dynamic(
    () => import('../../components/Services/WhatWeDoItem'),
    { loading: () => <p>Loading...</p> }
  )
import TeamItem from "../../components/Team/TeamItem";

const Services = ({metaData, titleData, serviceheadings, services, skills, teams})=>{
    return (
        <>
            <CustomHead metaData={metaData} />
            <InnerHero titleData={titleData} />
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
            <div className="maximize_result pt pb">
                <div className="cs-container">
                    <div className="cs-head d-flex align-center justify-between">
                        <div className="cs-custom_heading">
                            <h2>Maximizing Your<br />Potentials With UVO<br />Service</h2>
                            <p>Praesent sollicitudin felis a ornare volutpat. Nullam males uada sem sit amet semper tristique. Donec nec neque lectus. Nunc lis a ornare volutpat. N mattis.</p>
                        </div>
                        <ul className="cs-skills_area">
                            {
                                skills.map((skill)=>{
                                    return(
                                        <li key={skill.name}>
                                            <SkillItem skill={skill} />
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
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
        </>
    )
}

export default Services

export async function getServerSideProps(){
    const resposemeta= await fetch("http://localhost:3000/servicesPageSeoMeta");
    const metadata = await resposemeta.json();

    const resposetitle= await fetch("http://localhost:3000/servicesPageTitle");
    const titledata = await resposetitle.json();

    const responseServiceHeadings = await fetch("http://localhost:3000/serviceheadings");
    const ServicesHeadingData = await responseServiceHeadings.json();
    
    const responseServices = await fetch("http://localhost:3000/services");
    const ServicesData = await responseServices.json();

    const responseSkill = await fetch("http://localhost:4000/api/skills");
    const skillData = await responseSkill.json();    

    const responseTeam = await fetch("http://localhost:4000/api/teams");
    const teamData = await responseTeam.json();

    return{
        props:{
            metaData: metadata,
            titleData: titledata,
            serviceheadings: ServicesHeadingData,
            services: ServicesData,
            skills: skillData,            
            teams: teamData,
        }
    }
}


