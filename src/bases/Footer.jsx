function Footer ({setPage}){
    return (
        <footer id="footer">
            <ul>
                <li><a href="https://www.instagram.com/consulta_nutri/" className="footer-link hide instagram" target="_blank">Instagram</a></li>
                <li><a href="https://www.facebook.com/nutriologavaleria.adalid" className="footer-link hide facebook" target="_blank">Facebook</a></li>
                <li><a href="https://www.tiktok.com/@nutrivaleria8" className="footer-link hide tiktok" target="_blank">Tiktok</a></li>
            </ul>
            <p>
                <a className="footer-link" onClick={()=>setPage('privacypolicy')}>Políticas de privacidad</a>
                <span onClick={window.scrollTo(0, 0)}  style={{cursor: 'pointer'}}> &#64; 2022 NUTRIOLOGADALID.COM</span>
                 | Desarrollado por <a href="https://main--omarbramirez.netlify.app/" className="footer-link" target="_blank">Omar Ramírez</a>
            </p>
        </footer>
    );
}

export default Footer;