
import { useState, useEffect } from 'react'
import Logo from '../assets/images/logo002.png'
import Burger from '../assets/icons/burger.svg'
import Close from '../assets/icons/close.svg'
import Instagram from '../assets/icons/instagram.svg'
import Facebook from '../assets/icons/facebook.svg'
import Tiktok from '../assets/icons/tiktok.svg'


function Header ({setPage, page}){
    const [menuActive, setMenuActive] = useState(false);

    useEffect(()=>{
        setMenuActive(false)
    },[page])

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    const IndexTrigger = ()=>{
        setPage('index');
        window.scrollTo(0, 0);
    }

    return (
        <header>
            <link rel="icon" href="favicon.ico"  className='icon'/>

            <nav id="menu">
                <a onClick={IndexTrigger} id="logo"><img src={Logo} alt="logo" /></a>
                    <img  id="hamburger"  onClick={toggleMenu} className='icon' src={Burger} alt="burger" style={{ width: '15%' }} />
                
                <ul className={`menu_options `}>
                    <li><a onClick={()=>setPage('services')}>Servicios</a></li>
                    <li><a onClick={()=>setPage('testimonials')}>Testimoniales</a></li>
                    <li><a onClick={()=>setPage('contact')} >Contacto</a></li>
                    <li><a onClick={()=>setPage('aboutme')} >Sobre mí</a></li>
                    <li><a onClick={()=>setPage('appointment-module')} className="products-button">Agenda tu Consulta</a></li>
                </ul>
            </nav>
            
                <div className={`_responsive_menu ${menuActive ? 'm_activate' : ''}`}>
                <img src={Close} alt="close" style={{ width: '14%', margin: '1rem' }}  onClick={toggleMenu} className='icon'/>
            <ul className={`_menu_options `}>
            <li><a onClick={()=>setPage('index')}>Inicio</a></li>
            <li><a onClick={()=>setPage('services')}>Servicios</a></li>
                    <li><a onClick={()=>setPage('testimonials')}>Testimoniales</a></li>
                    <li><a onClick={()=>setPage('contact')} >Contacto</a></li>
                    <li><a onClick={()=>setPage('aboutme')} >Sobre mí</a></li>
                    <li><a onClick={()=>setPage('appointment-module')} className="products-button" style={{backgroundColor:'transparent'}}>Agenda tu Consulta</a></li>
                <ul  style={{ width: '50%', display: 'flex'}}>
                    <li className="f_icon"><a href="https://www.instagram.com/consulta_nutri/" target="_blank">
                    <img src={Instagram} alt="instagram" style={{ width: '60%'}} /></a></li>
                    <li className="f_icon"><a href="https://www.facebook.com/nutriologavaleria.adalid" target="_blank">
                    <img src={Facebook} alt="facebook" style={{ width: '60%'}} /></a></li>
                    <li className="f_icon"><a href="https://www.tiktok.com/@nutrivaleria8" target="_blank"> <img src={Tiktok} alt="tiktok" style={{ width: '60%'}} /></a></li>
                </ul>
            <p><a className="footer-link" onClick={()=>setPage('privacypolicy')} >Políticas de privacidad</a></p>
            </ul>
                </div>
        </header>
    );
}

export default Header;