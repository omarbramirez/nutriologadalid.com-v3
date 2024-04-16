import Logo from '../assets/images/logo003.png'
import Whatsapp from '../assets/icons/whatsapp.svg'

function Banner ({txt}){
    return(
        <>
                <div className="banner">
            <img src={Logo} alt="logo" className="logo" />
            <div className="calltoaction">
                <h4>{txt}</h4>
                <a className="button btn-calltoaction" href="whatsapp://send?text= &phone=+527293318885&abid=+5217225848839">
                <img src={Whatsapp} alt="whatsapp" style={{width: '20%', marginRight: '0.4rem'}}/>  Dime más
                </a>
            </div>
        </div>
        </>
    )
}

export default Banner;