import CustomHead from "../components/Shared/CustomHead"
import Header from "../components/Shared/Header"
import InnerHero from "../components/Shared/InnerHero"
import SkillItem from "../components/Skills/SkillItem"
import TeamItem from "../components/Team/TeamItem"
import ReviewItem from "../components/Testimonials/ReviewItem"

const Reviews = ({headerData, metaData, titleData, testimonials, skills, teams})=>{
    return(
        <>
            <CustomHead metaData={metaData} />
            <Header headerData={headerData} />        
            <InnerHero titleData={titleData} />
            <div class="cs-reviews_section pt pb">
                <div class="cs-container">
                    <div class="cs-custom_heading center">
                        <h4>REVIEWS</h4>
                        <h2>Our Great Reviews</h2>
                    </div>
                    <div class="cs-main_reviews pt_small">
                        {
                            testimonials.map((review,i)=>{
                                return(
                                    <ReviewItem key={i} review={review} />
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

export default Reviews


export async function getServerSideProps(){
    const resposemeta= await fetch("http://localhost:3000/ourReviewsPageSeoMeta");
    const metadata = await resposemeta.json();

    const responseHeader = await fetch("http://localhost:3000/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle= await fetch("http://localhost:3000/ourReviewsPageTitle");
    const titledata = await resposetitle.json();    

    const responseSkill = await fetch("http://localhost:4000/api/skills");
    const skillData = await responseSkill.json();

    const responseTeam = await fetch("http://localhost:4000/api/teams");
    const teamData = await responseTeam.json();

    const responseTestimonial = await fetch("http://localhost:4000/api/testimonials");
    const testimonialData = await responseTestimonial.json();
    return{
        props:{
            metaData: metadata,
            headerData: headerdata,
            titleData: titledata,     
            skills: skillData,
            teams: teamData,
            testimonials: testimonialData,
        }
    }

    
    
}