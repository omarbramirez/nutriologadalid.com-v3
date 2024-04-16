import Banner from '../components/Banner.jsx'

function Aboutme (){
    return(
        <>
         <div className="header-aboutme aboutme">
        <div className="calltoaction-header-aboutme">
          <h2>Soy Valeria</h2>
          <p>Soy nutrióloga y soy originaria de Toluca, México.<br />
            Bienvenidos y bienvenidas a esta comunidad saludable.</p>
        </div>
      </div>
      <div className="storytelling bio-storytelling">
        <h3>¿Quién soy?</h3>
        <p>Especialista en dieta cetogénica y salud gastrointestinal con 7 años de experiencia en consulta nutricional clínica.<br /><br />
          Nutrióloga concentrada en enfermedades como diabetes, hipertensión, afecciones gastrointestinales y pérdida de peso.<br /><br />
          Apasionada del asesoramiento nutricional con el objetivo de ayudarte a cumplir metas y mejorar tu salud de una forma simple y flexible.<br /><br />
          Entusiasta de realizar actividades al aire libre como correr o pasear en espacios llenos de naturaleza (tales como el bosque o la playa). Fiel amante del vino. Fan de mi país y de todas sus riquezas naturales.</p>
        <b>7 años de experiencia en Consulta Nutricional.</b>
        <b>2 años de Nutrición Clínica en pacientes con Cáncer Ginecológico.</b>
      </div>
      <div className="list">
        <h2>Formación y Experiencia</h2>
        <br />
        <p className="list-element">Licenciatura en Nutrición por el Campus Universitario Siglo XXI.</p>
        <p className="list-element">Diplomado en Acupuntura Humana.</p>
        <p className="list-element">Certificación en Dieta Cetogénica por el Colegio Mexicano de Nutrición Clínica y Terapia Nutricional.</p>
        <p className="list-element">Certificación en Salud Gastrointestinal por el Instituto de Especialización en Medicina Funcional.</p>
        <p className="list-element">Certificación en Suplementación Nutricional por el Colegio Mexicano de Nutrición Clínica y Terapia Nutricional.</p>
      </div>
      <a id="floating_icon" className="fa-brands fa-whatsapp" href="whatsapp://send?text= &phone=+527293318885&abid=+5217225848839"></a>
      <Banner txt={'La comunicación nutriólogo-paciente es lo más importante para tener un tratamiento exitoso. Siempre pregunta todas tus dudas sobre el tratamiento; si quieres cambiar algo o lo que sea que se te ocurra.'}/>
        </>
    )
}

export default Aboutme;