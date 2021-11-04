import dynamic from 'next/dynamic';
import CustomHead from '../components/Shared/CustomHead';
import Hero from '../components/Home/Hero';
import WhyChooseUs from '../components/Home/WhyChooseDetails/WhyChooseUs';
import Marketing from '../components/Home/Marketing/Marketing';
import Video from '../components/Home/Video';
import Brands from '../components/Home/Brands/Brands';
import TestimonialItem from '../components/Testimonials/TestimonialItem';
import WhatWeDoItem from '../components/Services/WhatWeDoItem';
import BlogListItem from '../components/Blogs/BlogListItem';

const Home = ({heros, whychoose, serviceheadings, services, marketing, videos, blogsDetails, blogList, testimonials})=> {
  return (
    <>
       <CustomHead
          title="Codearts Solution Pvt Ltd | Web Marketing | Web Design | App Development"
          metades="Codearts Solution Pvt Ltd is a digital marketing agency in Kolkata and Pune. We offer full web marketing solutions in Hyderabad &amp; Banglore. Contact us today."
       />
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
       <Brands />
       <div className="cs-testimonial_section pt pb">
          <div className="cs-container d-flex justify-between">
              <div className="cs-custom_heading">
                  <h4>TESTIMONIALS</h4>
                  <h2>What Our Clients Say</h2>
                  <p>Codearts Solution stays ahead of the curve with digital marketing trends.</p>
                  <lord-icon
                      src="https://cdn.lordicon.com/wgkjwucf.json"
                      trigger="loop"
                      delay="2000"
                      colors="primary:#eff2f4,secondary:#eff2f4">
                  </lord-icon>
              </div> 
              <div className="cs-testimonial_main_area owl-carousel" id="testi-slider">
                  {
                      testimonials.map((testimonial,i)=>{
                          return(
                              <TestimonialItem key={i} testimonial={testimonial} />
                          )
                      })
                  }
              </div>
              
          </div>
      </div>
    </>
  )
}

export default Home


export async function getStaticProps(){
 
  const resposeHero= await fetch("http://localhost:3000/herodata");
  const herodata = await resposeHero.json();

  const resposeWhychoose= await fetch("http://localhost:3000/whychooseus");
  const whychoosedata = await resposeWhychoose.json();

  const responseServiceHeadings = await fetch("http://localhost:3000/serviceheadings");
  const ServicesHeadingData = await responseServiceHeadings.json();

  const responseServices = await fetch("http://localhost:3000/services");
  const ServicesData = await responseServices.json();

  const responseMarketing = await fetch("http://localhost:3000/marketing");
  const marketingData = await responseMarketing.json();

  const responseVideo = await fetch("http://localhost:3000/videoDetails");
  const VideoData = await responseVideo.json();

  const responseBlogs = await fetch("http://localhost:3000/blogsDetails");
  const BlogsData = await responseBlogs.json();

  const responseBlogList = await fetch("http://localhost:3000/blogList");
  const BlogListData = await responseBlogList.json();

  const responseTestimonial = await fetch("http://localhost:4000/api/testimonials");
  const testimonialData = await responseTestimonial.json();

  
  return{
      props:{
          heros: herodata,
          whychoose: whychoosedata,
          serviceheadings: ServicesHeadingData,
          services: ServicesData,
          marketing: marketingData,
          videos: VideoData,
          blogsDetails: BlogsData,
          blogList: BlogListData,
          testimonials: testimonialData.slice(0,3),
      }
  }
  
}
