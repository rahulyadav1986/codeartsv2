import Head from "next/head"
const CustomHead = (props)=>{
    return(
        <>
            <Head>
                <title>{props.title}</title> 
                <meta name="description" content={props.metades}></meta>
            </Head>
        </>
    )
}

export default CustomHead