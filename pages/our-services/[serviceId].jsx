import Head from "next/head"
import Link from "next/link"
const BlogSinglePage = ({services})=>{
    return(
        <>
            <Head>
                <title>{services.title}</title> 
                <meta name="description" content={services.metaDescriptions} />                   
                <link rel="canonical" href={services.canonicalUrl} />
            </Head>
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>{services.title}</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>{services.title}</li>
                    </ul>
                </div>
           </div>
           <div className="cs-about_section cs-seo_company pt pb">
                <div className="cs-container d-flex align-center justify-between">
                    <div className="cs-right_section">
                        <img src={services.featuredImage} alt="" />
                        <span className="cs-business_label">
                            <h4>{services.title}</h4>
                            <lord-icon
                                src={services.icon}
                                trigger="loop"
                                delay="2000" 
                                colors="primary:#121331,secondary:#f47514">
                            </lord-icon>
                        </span>
                    </div>
                    <div className="cs-content_area">
                        <div className="cs-custom_heading">
                            <h4>OUR VISION</h4>
                            <h2>{services.customHeading}</h2>
                        </div>
                        <p>{services.smalldes}</p>
                        <ul className="cs-list d-flex align-center">
                            {
                                services.list.map((item,i)=>{
                                    return(
                                        <li key={i}>{item.serList}</li> 
                                    )
                                })
                            }
                            
                        </ul>
                        <div className="cs-button small"><a href="" className="d-flex align-center justify-center">GET IN TOUCH</a></div>
                    </div>
                    
                </div>
            </div>

            <div className="cs-service_details_section pt pb">
                <div className="cs-container">
                    <div className="cs-custom_heading">
                        <h4>OUR SERVICES</h4>
                        <h2>How We Can Help?</h2>
                    </div>
                    <div className="cs-service_main pt_small">
                        {
                            services.serviceFocus.map((item,i)=>{
                                return(
                                    <div key={i} className="cs-service_item">
                                        <lord-icon
                                            src={item.focusIcon}
                                            trigger="loop"
                                            delay="2000" 
                                            colors="primary:#121331,secondary:#f47514">
                                        </lord-icon>
                                        <h3>{item.focusHeading}</h3>
                                        <p>{item.forsdes}</p>
                                    </div>
                                )
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}



export default BlogSinglePage

export async function getServerSideProps(context){    
    const {params} = context;
    const response = await fetch(`http://localhost:3000/services/${params.serviceId}`);
    const servicedata = await response.json();
    return{
        props:{
            services: servicedata,
        },
    }
}