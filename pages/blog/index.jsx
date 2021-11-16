import CustomHead from "../../components/Shared/CustomHead"
import InnerHero from "../../components/Shared/InnerHero"
import BlogListItem from "../../components/Blogs/BlogListItem"
import Header from "../../components/Shared/Header"

const Blogs = ({metaData, headerData, titleData, blogsDetails, blogList})=>{
    return(
        <>
            <CustomHead metaData={metaData} />
            <Header headerData={headerData} /> 
            <InnerHero titleData={titleData} />             
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
                                blogList.map((blog, i)=>{
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

export async function getServerSideProps(){
    const resposemeta= await fetch("http://localhost:3000/blogsPageSeoMeta");
    const metadata = await resposemeta.json();

    const responseHeader = await fetch("http://localhost:3000/headerData")
    const headerdata = await responseHeader.json()

    const resposetitle= await fetch("http://localhost:3000/blogPageTitle");
    const titledata = await resposetitle.json();

    const responseBlogs = await fetch("http://localhost:3000/blogsDetails");
    const BlogsData = await responseBlogs.json();

    const responseBlogList = await fetch("http://localhost:3000/blogList");
    const BlogListData = await responseBlogList.json();

    return{
        props:{
            metaData: metadata,
            headerData: headerdata,
            titleData: titledata,
            blogsDetails: BlogsData,
            blogList: BlogListData
        }
    }
}