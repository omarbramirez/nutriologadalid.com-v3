import backgroundVideo from '../assets/Video.mp4'
import Facade from '../components/Facade';
import PaymentMethods from '../components/PaymentMethods.jsx'
import ServicesModule from '../components/ServicesModule.jsx';
import Stats from '../components/Stats.jsx';
import Packs from '../assets/data/packs.json'
import RenewalStats from '../assets/data/renewalstats.json'
import StatImg from '../assets/images/statsimg.png'
import OneService from '../components/OneService.jsx'; 
import OneServiveImg from '../assets/images/valeria_004.png';
import Reviews from "../components/Reviews";
import ReviewsData from '../assets/data/reviews.json'

import User01 from '../assets/images/testimonials/carol.jpg'
import User02 from '../assets/images/testimonials/ricardo.jpg'
import User03 from '../assets/images/testimonials/pao.jpg'

function Renewal({page, setFullscreen, setPage}){
    const Pics = [User01, User02, User03]
    return (
        <>
        <Facade setFullscreen={setFullscreen} page={page} backgroundVideo={backgroundVideo} title={'Renueva tu cuerpo'} headline={'Aquí va una frase atrapante'} text={'Aquí va una descripción resumida pero atractiva.'}/>
        <PaymentMethods setPage={setPage}/>
        <ServicesModule title={'Paquetes'} dataBase={Packs} setPage={setPage} style={'packs'}/>
        <Stats title={'Beneficios'} dataBase={RenewalStats} page={page} Img={StatImg}/>
        <OneService title={'Estás en las mejores manos'} OneServiveImg={OneServiveImg} page={page} button={'Saber más'} headline={'Aquí va una frase enfocada a despetar la confianza de la gente como profesional.'} description={'Aquí va una pequeña descripción de tu experiencia como profesional de la salud de cómo este tratamiento está pensando para mejorar la calidad de vida de las personas.'}/>
        <Reviews dataBase={ReviewsData[1]} imgs={Pics} page={page}/>
        <PaymentMethods setPage={setPage}/>
        </>
    )
}

export default Renewal;