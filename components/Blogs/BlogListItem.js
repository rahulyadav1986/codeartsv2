const BlogListItem = (props)=>{
    return(
        <>
            <div className="cs-blog_item">
                <div className="cs-blog_pic_back">
                    <img src={props.img} alt="" />
                    <a href="" className="cs-circle d-flex align-center justify-center">
                        <img src="../images/ani_arrow.gif" />
                    </a>
                </div>
                <div className="cs-content_area">
                    <div className="cs-widget_section d-flex align-center">
                        <div className="cs-date d-flex align-center">
                            <img src="../images/cal.png" />
                            {props.date}
                        </div>
                        <div className="cs-category">{props.cat}</div>
                    </div>
                    <h2><a href="">{props.title}</a></h2>
                </div>
            </div>
        </>
    )
}

export default BlogListItem