import Link from "next/link";
const InnerHero = (props)=> {
    return(
        <>
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>{props.pageTitle}</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>{props.pageTitle}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InnerHero