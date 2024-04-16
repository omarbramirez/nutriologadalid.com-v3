import { useState } from "react";
import Reviews from '../components/Reviews.jsx'
import Banner from '../components/Banner.jsx'
import ReviewsData from '../assets/data/reviews.json'

import User01 from '../assets/images/testimonials/katia.jpg'
import User02 from '../assets/images/testimonials/fer.jpg'
import User03 from '../assets/images/testimonials/rodrigo.jpg'

function Index ({setPage}){
    const [section, setSection] = useState('services');
    const Pics = [User01, User02, User03]
    return (
       <>
              <div className={`section01 ${section}`}>
            <ul className={`slider`}>
                {section === 'services' &&
                <li className="main-slider">
                    <div className="calltoaction-section01">
                        <h2>Servicios</h2>
                        <p>
                            <b>Te ayudo a hacer ese cambio que no te ha sido posible en el pasado.</b>
                            Planes completamente alineados<br />a tus objetivos y necesidades.<br />
                            <i className="far fa-dot-circle"> </i><i>Consulta Presencial</i> y <i>En línea.</i><br />
                            <i className="far fa-dot-circle"> </i>Dieta Cetogénica y Salud Gastrointestinal.<br />
                            <i className="far fa-dot-circle"> </i><i>Tratamientos Reductivos</i> y <i>Reafirmantes.</i>
                            <a className="button btn-calltoaction" onClick={()=>setPage('services')}>Dime más</a>
                        </p>
                    </div>
                </li>
                }
                {section === 'aboutme' && 
                
                <li className="main-slider">
                    <div className="calltoaction-section01">
                        <h2>Sobre mí</h2>
                        <p><b>¡Hola! Yo soy <i>Valeria Adalid.</i></b><br /><br /> Me gusta el mundo de la <i>nutrición</i> y estoy aquí para poder resolverles todas sus dudas al respecto.
                            <a className="button btn-calltoaction" onClick={()=>setPage('aboutme')}>Dime más</a>
                        </p>
                    </div>
                </li>
                }
                {section === 'products' &&

                <li className="main-slider products_align">
                    <div className="calltoaction-section01 ">
                        <h2>Productos</h2>
                        <p><b>Venta de productos personalizados:</b> <br />
                            <i className="far fa-dot-circle"></i>Alimentos altos en proteína.<br />
                            <i className="far fa-dot-circle"></i>Suplementos.<br />
                            <i className="far fa-dot-circle"></i><i>Superfoods.</i><br /><br />
                            Y muchísimo más...<br />
                            <i>Todo lo necesario para mejorar tu nutrición</i> y cuidar de tu salud.
                            <a className="button btn-calltoaction" href="whatsapp://send?text= &phone=+527293318885&abid=+5217225848839"> <b className="fa-brands fa-whatsapp"></b> Dime más</a>
                        </p>
                    </div>
                </li>
                }
            </ul>
            <ul className="dot-container nav-sliders">
                <li className={`dot slider_dot ${section === 'services' && 'active'}`} onClick={()=>{setSection('services')}}></li>
                <li className={`dot slider_dot ${section === 'aboutme' && 'active'}`} onClick={()=>{setSection('aboutme')}}></li>
                <li className={`dot slider_dot ${section === 'products' && 'active'}`} onClick={()=>{setSection('products')}}></li>
            </ul>
        </div>
        <div className="section02">
            <h1 style={{ margin: '5% auto' }}>Una Oportunidad Integral</h1>
            <div className="section02-flex">
                <div className="calltoaction-section02">
                    <div>1</div>
                    <h3>Evaluación Clínica-Nutricional</h3>
                    <p>Durante la consulta se inicia una serie de preguntas para saber sobre tu estilo de vida: enfermedades, hábitos, gustos y disgustos de alimentos. Con la finalidad de crear un plan de alimentación personalizado y adecuado a tus necesidades.<br /><br />
                        En la consulta presencial solo se requiere que acudas con ropa ligera (licra o short y top) para obtener las medidas necesarias. <br /><br />
                        En la consulta online: es necesario contar con una cinta métrica (nueva) y una báscula para realizar tus medidas. Yo te asesoro sobre cómo medirte. 😉 <br /><br />
                        <b>Duración de la consulta primera vez 1:30hrs aprox. 🕒</b>
                    </p>
                </div>
                <div className="calltoaction-section02">
                    <div>2</div>
                    <h3>Seguimiento</h3>
                    <p>En cada consulta de seguimiento se verifica tu composición corporal (peso, % de grasa, músculo y agua corporal). <br /><br />Se analiza tu adaptación al plan de alimentación y se evalúa si es necesario realizar algún cambio. <br /><br /> Todo esto para evaluar tus logros del tratamiento.<br /><br />
                        Las consultas de seguimiento se pueden hacer mensualmente a partir de la 3º consulta. <br /><br /> Las primeras deben ser cada 2 semanas preferentemente. Esto con la finalidad de mejorar el apego al tratamiento y tener mejores resultados.</p>
                    <a className="button" onClick={()=>setPage('services')}>Dime más</a>
                </div>
                <div className="calltoaction-section02">
                    <div>3</div>
                    <h3>Los Complementos Perfectos</h3>
                    <p><b>Alimentos y Suplementos</b><br />
                        A la venta en mi consultorio. Los mejores productos para hacer que tu proceso sea más efectivo.


                        <br /><b>Tratamientos Reductivos y Reafirmantes </b><br />


                        La cavitación, radiofrecuencia, vacumterapia y lipoláser. Tratamientos que nos ayudarán a movilizar la grasa en zonas específicas de tu cuerpo, dar firmeza a tu piel durante y posterior a la pérdida de peso (e inclusive aumentar tu masa muscular).


                        <br /><b>Auriculoterapia</b><br />

                        Estimulando las terminaciones nerviosas a través de la aplicación de balines en el oído ayudaremos a controlar tus niveles de ansiedad y estrés. </p>
                    {/* <a className="button" href="#">Dime más</a> */}
                </div>
            </div>
        </div>
        <Banner txt={'Arriésgate, verás que los resultados valen la pena 😁💯'}/>
        <Reviews dataBase={ReviewsData[0]} startData={0} imgs={Pics}/>
        <Banner txt={'Para mi será un gusto acompañarte en tu proceso de cambio este 2022 🥑 ❤'}/>
        <div className="main_services">
            <h1 style={{ margin: '5% auto' }}>Todo lo que necesitas para empezar tu proceso de cambio</h1>
            <div className="main_services-flex">
                <div className="calltoaction-main_services">
                    <h3>Dietas Especializadas</h3>
                    <div className="service-images first-service"> </div>
                    <p>Cetogénicas, Ayunos Intermitentes, Hipercalóricas e Hipocalóricas.<br/><br/>
                        Adaptadas a ti y a las necesidades de tu cuerpo.<br/>
                        Las mejores combinaciones de todos los alimentos que disfrutas. No te sentirás en una dieta, te lo aseguro.<br/>
                        <b>Ideales para aquellas personas que buscan la pérdida de peso, aumento de masa o mejorar su salud.</b>
                    </p>
                    <a className="button" onClick={()=>setPage('services')}>Dime más</a>
                </div>
                {/* <div className="calltoaction-main_services">
                    <h3></h3>
                    <div className="service-images"> </div>
                    <p></p>
                    <a className="button" href="contact">Dime más</a>
                </div> */}
                <div className="calltoaction-main_services">
                    <h3>Tratamientos Corporales y Faciales</h3>
                    <div className="service-images second-service"> </div>
                    <p>
                        <b>Cavitación</b><br/>
                        Es un tratamiento que se enfoca en la eliminación de la grasa acumulada en zonas concretas y localizadas.<br/><br/>
                        <b>Vacumterapia</b><br/>
                        Técnica de aspiración mecánica ideal para disminuir la celulitis, incentivar la producción de colágeno y elastina, mejorar la circulación, relajar la musculatura,  y reducir la tensión en el cuerpo.<br/><br/>
                        <b>Radiofrecuencia (facial y corporal)</b><br/>
                        Ondas electromagnéticas que el cuerpo asimila en forma de calor, ideales para tratar la flacidez.<br/><br/>
                        <b>Lipoláser</b><br/>
                        Técnica basada en luces led que favorece la eliminación de grasa y  la reducción de celulitis.
                    </p>
                </div>
            </div>
        </div>
        <Banner txt={'Si tienes dudas mándame mensajito y con gusto te respondo 😉'}/>

       </>
    )
}

export default Index;