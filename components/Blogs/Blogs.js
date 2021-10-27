import BlogList from "./BlogsList"
const Blogs = ()=> {
    return(
        <>
            <div className="cs-blogs_section pb">        
                <div className="cs-text_section pt">
                    <div className="cs-container d-flex align-center justify-between">
                        <div className="cs-heading d-flex align-end">
                            <h3>// Trending News</h3>
                            <h2>Our Latest Blogs And<br />Attractive News</h2>
                        </div>
                        <p>Hiring an SEO expert could well prove to be a shot in the arm for your online business, that deserves a robust web presence. Hiring an SEO expert could well prove to be a shot in the arm for your online business, that deserves a robust and web presence.</p>
                    </div>
                </div>
                <div className="cs-main_blog_section">
                    <div className="cs-container">
                        <div className="cs-blog_items owl-carousel" id="blogs-slider">
                            <BlogList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs