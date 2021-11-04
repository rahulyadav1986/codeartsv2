import BlogListItem from "../../components/Blogs/BlogListItem"
import CustomHead from "../../components/Shared/CustomHead"
import InnerHero from "../../components/Shared/InnerHero"

const Blogs = ({blogsDetails})=>{
    return(
        <>
            <CustomHead
                title="Blogs"
                metades="This is About Us Content"
            />            
            <InnerHero
                pageTitle="Blog Rahul"
            />
            <div className="cs-blogs_section inner pt pb">        
                <div className="cs-container">
                    <div className="cs-custom_heading center">
                        <h4>{blogsDetails[0].highlightedMassage}</h4>
                        <h2><span dangerouslySetInnerHTML={{__html:blogsDetails[0].mainHeading}} /></h2>
                    </div>
                </div>
                <div className="cs-main_blog_section pt_small">
                    <div className="cs-container">
                        <div className="cs-blog_items">
                            {
                               blogsDetails[0].blogs.map((blog, i)=>{
                                   return(
                                        <BlogListItem key={i} blog={blog} />
                                   )
                               }) 
                            }
                        
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs

export async function getStaticProps(){
    const responseBlogs = await fetch("http://localhost:3000/blogsDetails");
    const BlogsData = await responseBlogs.json();

    return{
        props:{
            blogsDetails: BlogsData,
        }
    }
}