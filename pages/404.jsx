import Head from "next/head"
import Link from "next/link";
import Header from "../components/Shared/Header";
const PageNotFound = ({headerData})=>{
    return(
        <>
            <Head>
                <title>404</title> 
                <meta name="description" content="Page Not Found" />                   
                <link rel="canonical" href="http://codeartssolution.com/404/" />
            </Head>
            <Header headerData={headerData} /> 
            <div className="cs-inner_pages_hero_section pt pb">
                <div className="cs-container">
                    <h1>Page Not Found</h1>
                    <ul className="breadcrumb d-flex align-center justify-center">
                        <li><Link href="/"><a>Home</a></Link></li>
                        <li>404</li>
                    </ul>
                </div>
           </div>
        </>
    )
}

export default PageNotFound


export async function getStaticProps(){

    const responseHeader = await fetch("http://localhost:3000/headerData")
    const headerdata = await responseHeader.json()
    
    return{
        props:{          
            headerData: headerdata,      
        }
    }
    
  }

