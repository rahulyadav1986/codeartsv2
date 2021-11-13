import Projects from "../../components/Projects";
import CustomHead from "../../components/Shared/CustomHead";
import InnerHero from "../../components/Shared/InnerHero";
import Link from "next/link";

const LastProjects = ({projects})=>{
    return(
        <>
            <CustomHead
                title="About Us"
                metades="This is About Us Content"
            />
            
            <InnerHero
                pageTitle="About us"
            />
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
                                                    <Link href={`/latest-projects/${item.id}/${list.id}`} >
                                                        <a key={i} className="cs-portfolio_item">
                                                            <picture>
                                                                <img src={list.projeclisttavator} alt="" />
                                                            </picture>
                                                            <h3>{list.projectTitle}</h3>
                                                            <p>{list.projectType}</p>
                                                        </a>
                                                    </Link>
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

export async function getStaticProps(){
    const responseProject = await fetch("http://localhost:3000/projectDetails");
    const ProjectData = await responseProject.json();

    return{
        props:{
            projects: ProjectData
        }
    }
}

