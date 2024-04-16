import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact (){
  const form = useRef();
  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const emailKey = import.meta.env.VITE_EMAIL_KEY;
  const emailTemplateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, emailTemplateID, form.current, {
        publicKey: emailKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
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
        <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
    </div>
        </>
    )
}

export default Contact;