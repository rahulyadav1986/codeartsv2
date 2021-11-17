import CustomHead from "../components/Shared/CustomHead"
import Header from "../components/Shared/HeaderDetails/Header"
import Hero from '../components/Home/Hero'
import WhyChooseUs from '../components/Home/WhyChooseDetails/WhyChooseUs'
import Marketing from '../components/Home/Marketing/Marketing'
import Video from '../components/Home/Video'
import Brands from '../components/Home/Brands/Brands'
import WhatWeDoItem from '../components/Services/WhatWeDoItem'
import BlogListItem from '../components/Blogs/BlogListItem'
import Testimonials from "../components/Testimonials/Testimonials"
import Footer from "../components/Shared/FooterDetails/Footer"

const Home = ({metaData, headerData, heros, whychoose, serviceheadings, services, marketing, videos, blogsDetails, blogList, testimonials, brands, footer})=> {
  return (
    <>        
       <CustomHead metaData={metaData} />  
       <Header headerData={headerData} />
       <Hero heros={heros} />
       <WhyChooseUs whychoose={whychoose} />
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
       <Marketing marketing={marketing} />
       <Video videos={videos} />
       <div className="cs-blogs_section pb">        
            <div className="cs-text_section pt">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-heading d-flex align-end">
                        <h3>{blogsDetails[0].highlightedMassage}</h3>
                        <h2><span dangerouslySetInnerHTML={{__html:blogsDetails[0].mainHeading}} /></h2>
                    </div>
                    <p>{blogsDetails[0].mainContent}</p>
                </div>
            </div>
            <div className="cs-main_blog_section">
                <div className="cs-container">
                    <div className="cs-blog_items owl-carousel" id="blogs-slider">
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
       <Brands brands={brands} />
       <Testimonials testimonials={testimonials} />
       <Footer footer={footer} />
    </>
  )
}

export default Home


export async function getServerSideProps(){

  const resposemeta= await fetch("http://localhost:3000/homePageSeoMeta");
  const metadata = await resposemeta.json();  

  const responseHeader = await fetch("http://localhost:3000/headerData")
  const headerdata = await responseHeader.json()
 
  const resposeHero= await fetch("http://localhost:3000/herodata");
  const herodata = await resposeHero.json();

  const resposeWhychoose= await fetch("http://localhost:3000/whychooseus");
  const whychoosedata = await resposeWhychoose.json();

  const responseServiceHeadings = await fetch("http://localhost:3000/serviceheadings")
  const ServicesHeadingData = await responseServiceHeadings.json()

  const responseServices = await fetch("http://localhost:3000/services")
  const ServicesData = await responseServices.json()

  const responseMarketing = await fetch("http://localhost:3000/marketing")
  const marketingData = await responseMarketing.json()

  const responseVideo = await fetch("http://localhost:3000/videoDetails")
  const VideoData = await responseVideo.json()

  const responseBlogs = await fetch("http://localhost:3000/blogsDetails")
  const BlogsData = await responseBlogs.json()

  const responseBlogList = await fetch("http://localhost:3000/blogList")
  const BlogListData = await responseBlogList.json()

  const responseTestimonial = await fetch("http://localhost:3000/testimonailsDetails")
  const testimonialdata = await responseTestimonial.json()

  const responseBrands = await fetch("http://localhost:3000/brands")
  const branddata = await responseBrands.json()

  const responseFooter = await fetch("http://localhost:3000/footerDetails")
  const footerdata = await responseFooter.json()

  
  return{
      props:{
          metaData: metadata, 
          headerData: headerdata,        
          heros: herodata,
          whychoose: whychoosedata,
          serviceheadings: ServicesHeadingData,
          services: ServicesData,
          marketing: marketingData,
          videos: VideoData,
          blogsDetails: BlogsData,
          blogList: BlogListData,
          testimonials: testimonialdata,
          brands: branddata,
          footer: footerdata,
      }
  }
  
}
