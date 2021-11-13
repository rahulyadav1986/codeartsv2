
import Link from "next/link";
import CustomHead from "../../components/Shared/CustomHead";
import InnerHero from "../../components/Shared/InnerHero";
const ProjectDetails = ({projectDetails})=>{
    return(
        <>
            <CustomHead
                title="Projects"
                metades="This is About Us Content"
            />
            <InnerHero
                pageTitle="Projects"
            />
             <div className="cs-portfolio_details_section pt pb">
                <div className="cs-container d-flex align-center justify-between">            
                    <div className="cs-portfolio_content_area">
                        <div className="cs-cat">Identity Mockup  {projectDetails.catName}</div>
                        <h3>{projectDetails.projectDetailsTitle}</h3>                
                        <div className="cs-pro_details">
                            <h4>About</h4>
                            <p>{projectDetails.projectDescription}</p>
                            <div className="cs-option d-flex">
                                <div className="port">
                                    <h4>Technology Used</h4>
                                    <ul className="cs-list">
                                        <li>HTML5</li>
                                        <li>CSS</li>
                                        <li>Bootstrap 5</li>
                                        <li>SASS</li>
                                        <li>JavaScript</li>
                                        <li>Jquery</li>
                                        <li>Wordpress</li>
                                    </ul>
                                </div>
                                <div className="port">
                                    <h4>Our Role</h4>
                                    <ul className="cs-list">
                                        <li>Websites</li>
                                        <li>Mobile/Tablet Responsive Design</li>
                                        <li>Graphics</li>
                                        <li>Multi User Dashboard</li>
                                        <li>Backend Management System</li>
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
                                <p>Design is a way of life, a point of view. It involves the whole complex of visual commun ications: talen.t, creative ability manual skill.</p>
                                <div className="cs-profile_area d-flex align-center">
                                    <img src="../images/pro.jpg" alt="" />
                                    <div className="cs-pro_del">
                                        <div className="name">Denis Robinson</div>
                                        <div className="deg">Customer</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cs-button small">
                                <a href="" className="d-flex align-center justify-center">OPEN PROJECT</a>
                            </div>
                        </div>
                    </div>
                    <div className="cs-portfolio_view_area">
                        <img src="../images/elarahomes.jpg" alt="" />
                    </div>
                </div>
        </div>
        </>
    )
}

export default ProjectDetails


export async function getStaticPaths(){
    const response = await fetch("http://localhost:3000/projectDetails");
    const projectsData = await response.json();
    const paths = projectsData.map((post)=>{
        return{
            params:{
                projectsId: `${post.id}`
            }
        }
    })
    return{
        paths,
        fallback: false,
       
    }
}

export async function getStaticProps(context){  
    const {params} = context;
    const response = await fetch(`http://localhost:3000/projectDetails/${params.projectsId}`);
    const projectsData = await response.json();
    return{
        props:{
            projectDetails: projectsData,
        }
    }
}