import BlogListItem from "./BlogListItem";
import { bloglistdata } from "../../data/bloglistdata";
const BlogList = ()=> {
    return(
        <>
        {
            bloglistdata.map((item, i)=>{
                return(
                    <BlogListItem key={i}
                        title={item.title}
                        img={item.img}
                        date={item.date}
                        cat={item.cat}
                    />
                )
            })
        }
           
           
        </>
    )
}

export default BlogList