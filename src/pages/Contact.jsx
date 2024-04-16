function Contact (){
    return(
        <>
         <div className="content contact-content">
      <div className="contact-calltoaction">
        <div style={{ textAlign: 'center' }}>
          <p>
            Si estás buscando un <i style={{ color: 'var(--black-1)' }}>cambio positivo</i> en tu vida que te haga ver y sentir mejor,<br />
            para mí será un gusto enseñarte y acompañarte en el proceso.<br /><br />
            <i className="fas fa-phone" style={{ color: 'var(--black-1)' }}></i>+52 1 729 331 8885<br /><br />
            <i className="fas fa-map-marker-alt" style={{ color: 'var(--black-1)' }}></i>5 De Mayo, Número 19, Esquina Con Malinche, San Lorenzo Tepaltitlan 50010, Toluca de Lerdo, Méx.
          </p>
        </div>
      </div>

      <div className="contact-form" style={{ backgroundColor: 'var(--graduation-3)' }}>
        <h4 style={{ color: 'var(--white-5)', marginBottom: '1.5rem' }}>Déjame todas las dudas que tengas</h4>
        <form action="/mail-sent" method="get" acceptCharset="ISO-8859-1">
          <input type="text" placeholder="Nombre" maxLength="30" name="name" required id="nombre" /><br />
          <input type="email" placeholder="Correo" maxLength="40" name="email" required id="email" /><br />
          <textarea type="text" placeholder="Mensaje" maxLength="2000" name="message" required id="message"></textarea><br />
          <input type="submit" name="send" value="Enviar" id="send" />
        </form>
      </div>
    </div>
        </>
    )
}

export default Contact;