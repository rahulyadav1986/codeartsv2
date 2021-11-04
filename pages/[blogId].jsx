import CustomHead from "../components/Shared/CustomHead";
import InnerHero from "../components/Shared/InnerHero";
import Link from "next/link";
const BlogDetails = ({blogsDetails, blogList})=>{
    return(
        <>
            <CustomHead
                title="Blogs"
                metades="This is About Us Content"
            />
            <InnerHero
                pageTitle="Blogs"
            />
            <div className="cs-blog_details_section pt pb">
                <div className="cs-container d-flex">
                    <div className="cs-left_content_area">
                    <h1>{blogsDetails.blogTitle}</h1>
                        <ul className="widget d-flex align-center">
                            <li>{blogsDetails.blogDate}</li>
                            <li>{blogsDetails.BlogAuthor}</li>
                            <li><a href="">{blogsDetails.blogCat}</a></li>
                        </ul>                        
                        <img src={blogsDetails.blogAvator} alt="" />
                        <div dangerouslySetInnerHTML={{__html:blogsDetails.blogContent}}></div>
                    </div>
                    <div className="cs-right_details">
                        <div className="cs-categories">
                            <h3>Categories</h3>
                            <ul className="cs-cat_nav">
                                {
                                    blogList.map((item,i)=>{
                                        return(
                                            <li key={i}><a href="">{item.blogCat}</a></li>
                                        )
                                    })
                                }
                                
                                
                            </ul>
                        </div>
                        <div className="cs-categories">
                            <h3>Recent Post</h3>
                            <ul className="cs-recent_post">
                                {
                                    blogList.slice(0,5).map((item,i)=>{
                                        return(
                                            <li>
                                                <Link href={`/${item.id}`} >
                                                <a className="d-flex align-center">
                                                    <img src={item.blogAvator} alt="" />
                                                    <div>
                                                        <div className="date">{item.blogDate}</div>
                                                        <h4>{item.blogTitle}</h4>
                                                    </div>
                                                </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                                
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails



export async function getStaticPaths(){
    const response = await fetch("http://localhost:3000/blogList");
    const BlogsData = await response.json();
    const paths = BlogsData.map((post)=>{
        return{
            params:{
                blogId: `${post.id}`
            }
        }
    })
    return{
        paths,
        fallback: false,
       
    }
}

export async function getStaticProps(context){    
    const responseBlogList = await fetch("http://localhost:3000/blogList");
    const BlogListData = await responseBlogList.json();
    const {params} = context;
    const response = await fetch(`http://localhost:3000/blogList/${params.blogId}`);
    const BlogsData = await response.json();
    return{
        props:{
            blogsDetails: BlogsData,
            blogList: BlogListData
        }
    }
}

