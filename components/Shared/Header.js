import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { menudata } from '../../data/menudata';
import Link from 'next/link';
import Logo from './Logo';
import RightSideBar from './RightSideBar';
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
    return (
      <>
        <div className={click ? 'cs-ovarlay cs-ovarlay_open' : 'cs-ovarlay' } onClick={()=>setclick(false)}></div>
        
        <div className={click ? 'cs-company_info_right_panel cs-company_info_right_panel_open' : 'cs-company_info_right_panel'}>
            <RightSideBar />
        </div>
        
        <header id="header">
            <div className="cs-container d-flex align-center justify-between">
                <Logo src="../images/logo.png" />
                <div className="cs-header_right d-flex align-center">
                    <div className="cs-mobile_hamburger d-flex align-center" onClick={mobilemenuClick}>
                        <span></span>
                    </div>
                    <ul class="cs-menu d-flex align-center">
                        {
                            menudata.map((item,i)=>{
                            return(
                                    <li key={i} className={isActive(item.navurl)}><Link href={item.navurl}><a>{item.navname}</a></Link></li>
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
                <Logo src="../images/logo.png" />
                    <div className="cross" onClick={()=>setMobileClick(false)}><img src="../images/close.png" alt="" /></div>
                </div>
                
                <ul className="cs-menu">
                    {
                        menudata.map((item,i)=>{
                        return(
                                <li key={i}  onClick={mobilemenuClick} className={isActive(item.navurl)}><Link href={item.navurl}><a>{item.navname}</a></Link></li>
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