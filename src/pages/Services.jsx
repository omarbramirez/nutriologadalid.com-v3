import Reviews from "../components/Reviews";
import Banner from '../components/Banner.jsx'
import ReviewsData from '../assets/data/reviews.json'


import User01 from '../assets/images/testimonials/carol.jpg'
import User02 from '../assets/images/testimonials/ricardo.jpg'
import User03 from '../assets/images/testimonials/pao.jpg'

function Services ({setPage}){
  const Pics = [User01, User02, User03]
    return(
        <>
        <div className="header-services services">
      <div className="calltoaction-header-services">
        <h2>Servicios</h2>
        <p>
          <b>¿Te interesa que te acompañe de una manera más personalizada en tu proceso?</b>
          Te ofrezco mi plan<br /> <i>Cambiando desde la raíz</i><br />
          en donde te acompaño de una manera más personalizada. <br /><br />
          Desde hacer el súper juntos, hasta ir a tu cocina a enseñarte a elegir de manera más consciente tus alimentos.<br />
          <i>¡Sin dietas específicas! </i>
        </p>
      </div>
    </div>
    <div className="storytelling">
      <section>
        <h3>Tipos de dietas</h3>
        <p>
          <b>Dieta cetogénica:</b><br /> Con un enfoque en la pérdida de peso, se mejoran defensas y es parte del tratamiento en multiples enfermedades (síndrome de ovario poliquístico, síndrome metabólico, obesidad y dislipidemias).<br /><br />
          <b>Dieta hipocalórica:</b><br /> Con enfoque en pérdida de peso, un proceso más lento y menos restrictivo. Parte importante en el tratamiento de enfermedades metabólicas.<br /><br />
          <b>Dieta de eliminación:</b><br /> Con un enfoque para enfermedades y malestares gastrointestinales, además de pérdida de peso. Es parte del tratamiento de enfermedades como: colitis, gastritis, SII, disbiosis, síndrome de intestino permeable.<br /><br />
          <b>Dieta Hipercalórica:</b><br /> Con enfoque en aumento de masa muscular.<br /><br />
          <b>Dieta de mantenimiento:</b><br /> Plan de alimentación para mantener tu peso y adquirir hábitos de alimentación saludables.<br /><br />
        </p>
      </section>
      <a id="floating_icon" className="fa-brands fa-whatsapp" href="whatsapp://send?text= &phone=+527293318885&abid=+5217225848839"></a>
    </div>
    <div className="main_services">
      <h1 style={{ margin: '5% auto' }}>Consulta Presencial y En línea</h1>
      <br />
      <h3>Para primeras consultas, te sugiero tener tiempo y estar sin distracciones.</h3>
      <div className="main_services-flex">
        <div className="calltoaction-main_services">
          <h3>Dietas Especializadas</h3>
          <div className="service-images first-service"></div>
          <p>Cetogénicas, Ayunos Intermitentes, Hipercalóricas e Hipocalóricas.<br /><br />
            Adaptadas a ti y a las necesidades de tu cuerpo.<br />
            Las mejores combinaciones de todos los alimentos que disfrutas. No te sentirás en una dieta, te lo aseguro.<br />
            <b>Ideales para aquellas personas que buscan la pérdida de peso, aumento de masa o mejorar su salud.</b><br />
          </p>
          <a className="button" onClick={()=>setPage('contact')}>Dime más</a>
        </div>
        {/* <div className="calltoaction-main_services">
          <h3></h3>
          <div className="service-images"> </div>
          <p></p>
          <a className="button" href="contact">Dime más</a>
        </div> */}
        <div className="calltoaction-main_services">
          <h3>Tratamientos Corporales y Faciales</h3>
          <div className="service-images second-service"></div>
          <p><b>Cavitación</b><br />
            Es un tratamiento que se enfoca en la eliminación de la grasa acumulada en zonas concretas y localizadas.<br />
            <b>Vacumterapia</b><br />
            Técnica de aspiración mecánica ideal para disminuir la celulitis, incentivar la producción de colágeno y elastina, mejorar la circulación, relajar la musculatura,  y reducir la tensión en el cuerpo.<br />
            <b>Radiofrecuencia (facial y corporal)</b><br />
            Ondas electromagnéticas que el cuerpo asimila en forma de calor, ideales para tratar la flacidez.<br />
            <b>Lipoláser</b><br />
            Técnica basada en luces led que favorece la eliminación de grasa y  la reducción de celulitis.<br /><br />
            <b style={{ color: 'var(--graduation-3)', marginBottom: 0 }}>Agenda tu valoración sin costo</b>
          </p>
          <a className="button" href="whatsapp://send?text= &phone=+527293318885&abid=+5217225848839">Agenda Hoy</a>
        </div>
      </div>
    </div>
    <form className="faq-section">
      <h1 style={{ margin: '5% auto', color: 'black' }}>FAQ</h1>
      <label htmlFor="faq-identifier-1" className="faq-label">
        <span className="faq-title">¿CUÁNTAS CONSULTAS NECESITO PARA VER EL CAMBIO?<div className="arrow"></div> </span>
        <input id="faq-identifier-1" type="radio" name="faq" className="faq-identifier" />
        <span className="faq-span">
          Esto depende de tus objetivos en cuanto a peso y salud, recomiendo como mínimo 6 meses de tratamiento.
        </span>
      </label>
      <label htmlFor="faq-identifier-2" className="faq-label">
        <span className="faq-title">¿CÓMO AGENDO UNA CONSULTA?<div className="arrow"></div>  </span>
        <input id="faq-identifier-2" type="radio" name="faq" className="faq-identifier" />
        <span className="faq-span">
          Mándame un mensaje vía WhatsApp para acordar la disponibilidad y agendar tu primera consulta, una vez agendada debes hacer el pago del servicio y enviar el comprobante. A continuación llenarás un formulario con datos que me ayuden a realizar tu expediente.
        </span>
      </label>
      <label htmlFor="faq-identifier-3" className="faq-label">
        <span className="faq-title">¿QUÉ NECESITO PARA LA CONSULTA ONLINE?<div className="arrow"></div></span>
        <input id="faq-identifier-3" type="radio" name="faq" className="faq-identifier" />
        <span className="faq-span">
          Una báscula, cinta métrica y una cuenta en Google Meet.
        </span>
      </label>
      <label htmlFor="faq-identifier-4" className="faq-label">
        <span className="faq-title">¿QUÉ NECESITO PARA UNA CONSULTA PRESENCIAL?<div className="arrow"></div> </span>
        <input id="faq-identifier-4" type="radio" name="faq" className="faq-identifier" />
        <span className="faq-span">
          Llevar ropa cómoda: licra y top en el caso de las mujeres, Shorts y playera cómoda en el caso de hombres. Haber ingerido alimentos por lo menos 1.5 hrs antes de tu consulta.
        </span>
      </label>
      <label htmlFor="faq-identifier-5" className="faq-label">
        <span className="faq-title">¿MI TRATAMIENTO PUEDE SER EXITOSO?<div className="arrow"></div> </span>
        <input id="faq-identifier-5" type="radio" name="faq" className="faq-identifier" />
        <span className="faq-span">
          La respuesta es sí, yo te ayudaré a personalizar tu plan de alimentación para que logres tener éxito. Con ayuda de los alimentos ricos y saludables que pongo en cada plan ni sentirás que estás en restricción y te será más fácil seguir hasta conseguir tus objetivos.
        </span>
      </label>
      {/* <label htmlFor="faq-identifier-6" className="faq-label">
        <span className="faq-title">Lorem ipsum dolor sit amet?  <div className="arrow"></div> </span>
        <input id="faq-identifier-6" type="radio" name="faq" className="faq-identifier" />
        <span className="faq-span">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus libero lectus, bibendum feugiat nibh cursus at. Suspendisse potenti. Sed sed semper lectus. Morbi consequat id nisi sed convallis. Curabitur non semper leo. Nunc vestibulum, felis id blandit pulvinar, dui ligula efficitur dolor, eu lacinia eros justo eu augue. Morbi nulla sapien, finibus tincidunt ultricies sit amet, eleifend et massa. Morbi libero mauris, pellentesque ac finibus at, feugiat quis urna.
        </span>
      </label> */}
    </form>
    <Reviews dataBase={ReviewsData[1]} imgs={Pics}/>
    <Banner txt={'Para mi será un gusto acompañarlos en su proceso de cambio este 2022, gracias por su confianza. ❤'}/>
        </>
    )
}

export default Services;