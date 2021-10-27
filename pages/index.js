import dynamic from 'next/dynamic'
import CustomHead from '../components/Shared/CustomHead';
import Hero from '../components/Home/Hero';
import WhyChooseUs from '../components/Home/WhyChooseDetails/WhyChooseUs';
import Marketing from '../components/Home/Marketing/Marketing';
import Video from '../components/Home/Video';
import Blogs from '../components/Blogs/Blogs';
import Brands from '../components/Home/Brands/Brands';
import TestimonialItem from '../components/Testimonials/TestimonialItem';



const WhatWeDoItem = dynamic(
  () => import('../components/Services/WhatWeDoItem'),
  { loading: () => <p>Loading...</p> }
)

const Home = ({services, testimonials})=> {
  return (
    <>
       <CustomHead
          title="Codearts Solution Pvt Ltd | Web Marketing | Web Design | App Development"
          metades="Codearts Solution Pvt Ltd is a digital marketing agency in Kolkata and Pune. We offer full web marketing solutions in Hyderabad &amp; Banglore. Contact us today."
       />
       <Hero />
       <WhyChooseUs />
       <div className="cs-services_section pt pb">
            <div className="cs-container">
                <div className="cs-custom_heading center">
                    <h4>WHAT WE DO</h4>
                    <h2>What We Offer</h2>
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
       <Marketing />
       <Video />
       <Blogs />
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


export async function getServerSideProps(){
  const responseTestimonial = await fetch("http://localhost:3000/api/testimonials");
  const testimonialData = await responseTestimonial.json();

  const responseServices = await fetch("http://localhost:3000/api/services");
  const ServicesData = await responseServices.json();
  return{
      props:{
          testimonials: testimonialData,
          services: ServicesData
      }
  }
  
}
