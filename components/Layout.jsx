import Header from "./Shared/Header"
import Footer from "./Shared/Footer"
import Head from "next/head"
import Script from  'next/script'
const Layout = ({children})=> {
    return (
      <>
        <Head>
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <Header />
        <main>
            {children}
        </main>
        <Footer />
        <Script
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
            strategy="beforeInteractive" 
        />
        <Script
            src="../js/typed.min.js"
            strategy="beforeInteractive" 
        />
        <Script
            src="https://cdn.lordicon.com/libs/mssddfmo/lord-icon-2.1.0.js"
            strategy="beforeInteractive" 
        /> 
        <Script
            src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
            strategy="beforeInteractive" 
        />
   
         <Script
            src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"
            strategy="beforeInteractive" 
        />
        <Script
            src="../js/owl.carousel.js"
            strategy="beforeInteractive" 
        />
        <Script
            src="https://kit.fontawesome.com/a992d6b247.js"
            strategy="beforeInteractive" 
        />
       
        <Script
            src="../js/app.js"
            strategy="beforeInteractive" 
        />
      </>
    )
}

export default Layout
  