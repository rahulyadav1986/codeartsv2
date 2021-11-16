import CustomHead from "../../components/Shared/CustomHead";
import Projects from "../../components/Projects"
import InnerHero from "../../components/Shared/InnerHero"
import { useState } from 'react'


const LastProjects = ({metaData, titleData, projects})=>{
    const [ProjectDetailsClick, setProjectDetailsClick]= useState(false);
    const ProjectdelClick = ()=> setProjectDetailsClick(!ProjectDetailsClick);
    return(
        <>
            <CustomHead metaData={metaData} />
            
            <InnerHero titleData={titleData} />
            <div className="cs-portfolio_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>QUICK GETTING STARTED</h4>
                        <h2>Our World className Portfolio</h2>
                    </div>
                    <Projects>
                        {
                            projects.map((item,i)=>{
                                return(
                                    <div key={i} label={item.catName}>
                                        {
                                            item.catList.map((list,i)=>{
                                                return(
                                                    
                                                    <div key={i} className={ProjectDetailsClick ? 'cs-portfolio_item close' : 'cs-portfolio_item'} >
                                                        <picture>
                                                            <img src={list.projeclisttavator} alt="" />
                                                        </picture>
                                                        <h3>{list.projectTitle}</h3>
                                                        <p>{list.projectType}</p>
                                                        <div className="cs-portfolioDetailsArea">
                        
                                                            <div className="cs-main_area">
                                                                <div className="cs-close_pop d-flex align-center justify-center" onClick={ProjectdelClick}>x</div>
                                                                <div className="cs-main_details d-flex justify-between">
                                                                    <div className="cs-portfolio_content_area">
                                                                    <div className="cs-cat">Identity Mockup  {list.projectDate}</div>
                                                                    <h3>{list.projectTitle}</h3>                
                                                                    <div className="cs-pro_details">
                                                                        <h4>About</h4>
                                                                        <p>{list.projectDescription}</p>
                                                                        <div className="cs-option d-flex">
                                                                            <div className="port">
                                                                                <h4>Technology Used</h4>
                                                                                <ul className="cs-list">
                                                                                    {
                                                                                        list.techUsed.map((item,i)=>{
                                                                                            return(
                                                                                                <li key={i}>{item.techname}</li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                    
                                                                                </ul>
                                                                            </div>
                                                                            <div className="port">
                                                                                <h4>Our Role</h4>
                                                                                <ul className="cs-list">
                                                                                    {
                                                                                        list.projectRoll.map((item,i)=>{
                                                                                            return(
                                                                                                <li key={i}>{item.role}</li>
                                                                                            )
                                                                                        })
                                                                                    }
                                                                                </ul>
                                                                            </div>
                                                                            
                                                                        </div>
                                                                        <div className="cs-review_item">
                                                                            <lord-icon
                                                                                src="https://cdn.lordicon.com/bwordpbq.json"
                                                                                trigger="loop"
                                                                                delay="2000"
                                                                                colors="primary:#f47514,secondary:#08a88a">
                                                                            </lord-icon>
                                                                            <p>{list.clientreviews}</p>
                                                                            <div className="cs-profile_area d-flex align-center">
                                                                                <img src={list.clientavator} alt="" />
                                                                                <div className="cs-pro_del">
                                                                                    <div className="name">{list.clientName}</div>
                                                                                    <div className="deg">{list.clientPosi}</div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="cs-button small">
                                                                            <a href={list.projectLink} target="_blank" className="d-flex align-center justify-center">OPEN PROJECT</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="cs-portfolio_view_area">
                                                                    <img src="images/elarahomes.jpg" alt="" />
                                                                </div>
                                                                </div> 
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                   
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        
                       
                    </Projects>
                </div>
            </div>
            
        </>
    )
}

export default LastProjects

export async function getServerSideProps(){
    const resposemeta= await fetch("http://localhost:3000/latestProjectsPageSeoMeta");
    const metadata = await resposemeta.json();

    const resposetitle= await fetch("http://localhost:3000/projectPageTitle");
    const titledata = await resposetitle.json();

    const responseProject = await fetch("http://localhost:3000/projectDetails");
    const ProjectData = await responseProject.json();

    return{
        props:{
            metaData: metadata,
            titleData: titledata,
            projects: ProjectData
        }
    }
}

