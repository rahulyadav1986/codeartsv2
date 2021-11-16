
import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RightSideBar from './RightSideBar';
const fetcher = async()=>{
    const res = await fetch("http://localhost:3000/menudata");
    const data = await res.json();
    return data
}





const Header = ()=> {
    const [click,setclick]= useState(false);
    const menuclick = ()=> setclick(!click);

    const [MobileClick, setMobileClick]= useState(false);
    const mobilemenuClick = ()=> setMobileClick(!MobileClick);

   

    const router = useRouter();
    function isActive(route){
        if(route==router.pathname){
            return "active"
        }else{
            ""
        }
    }
    
    const {data, error} = useSWR('menudata', fetcher);
    
    if(error) return "Error Occoured";
    if(!data) return "Loading...";
    

    return (
      <>
        <div className={click ? 'cs-ovarlay cs-ovarlay_open' : 'cs-ovarlay' } onClick={()=>setclick(false)}></div>
        
        <div className={click ? 'cs-company_info_right_panel cs-company_info_right_panel_open' : 'cs-company_info_right_panel'}>
            <RightSideBar />
        </div>
        
        <header id="header">
            <div className="cs-container d-flex align-center justify-between">
               <Link href="/"><a className="cs-brand_logo"><img src="../images/logo.png" alt="Codearts Solutions Pvt Ltd"  /></a></Link>
                <div className="cs-header_right d-flex align-center">
                    <div className="cs-mobile_hamburger d-flex align-center" onClick={mobilemenuClick}>
                        <span></span>
                    </div>
                    <ul className="cs-menu d-flex align-center">
                        {
                            data.map((item,i)=>{
                            return(
                                    <li key={i} className={isActive(item.navurl)}>
                                        <Link href={item.navurl}>
                                            <a>{item.navname} <i class={`fas ${item.icon}`}></i></a>                                            
                                        </Link>
                                        <ul className="cs-sub_menu">
                                            {
                                                item.submenu.map((subitem,i)=>{
                                                    return(
                                                        <li key={i}>
                                                            <Link href={subitem.subnavurl}>
                                                                <a>{subitem.subnavname}</a>                                            
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                       
                                    </li>
                                )
                            })  
                        }
                    </ul>               
                    <div className="cs-icon_back d-flex align-center">
                        <div className="cs-search d-flex align-center"><img src="../images/search.png" alt="" /></div>
                        <div className="cs-hamburger_menu d-flex align-center" onClick={menuclick}>
                            <span></span>
                        </div>
                    </div>                
                    <div className="cs-button">
                        <a href="" className="d-flex align-center justify-center white">Start project</a>
                    </div>
                </div>
            </div>
            
            <div className={MobileClick ? 'cs-mobile_menu cs-mobile_menu_open' : 'cs-mobile_menu'}>
                <div className="header d-flex align-center justify-between">
                   <Link href="/"><a className="cs-brand_logo"><img src="../images/logo.png" alt="Codearts Solutions Pvt Ltd"  /></a></Link>
                    <div className="cross" onClick={()=>setMobileClick(false)}><img src="../images/close.png" alt="" /></div>
                </div>
                
                <ul className="cs-menu">
                    {
                        data.map((item,i)=>{
                        return(
                                <li key={i}  
                                onClick={mobilemenuClick} className={isActive(item.navurl)}>
                                    <Link href={item.navurl}>
                                        <a>{item.navname}</a>
                                    </Link>                                    
                                </li>
                            )
                        })  
                    }
                </ul>
            </div>
        </header>
      </>
    )
}

export default Header

