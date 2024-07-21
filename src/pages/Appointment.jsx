import { useRef, useState } from 'react';
import { gettingCalendarInfo, creatingANewEvent, makingPayment } from '../../routes/CalendarRoutes'

import PaymentForm from '../components/PaymentForm'

function Appointment() {
  const appointmentData = useRef();

  const [test, setTest] = useState('Agenda tu Consulta en Línea desde mi Página');
  const [myEvent, setMyEvent] = useState({});
  const [summaryValidator, setOrderSummaryValidator] = useState(false);

    // Inicializa el estado con un valor definido
    const [quantity, setQuantity] = useState(1);

    // Función para manejar cambios en el input
    const handleChange = (event) => {
      setQuantity(event.target.value);
    };

  const sendAppointmentData = (e) => {
    e.preventDefault();
    const service = appointmentData.current.service.value

    const pricing = function () {
      switch (service) {
        case 'Primera Consulta - EN LÍNEA':
          return 100;
          break;
        case 'Consulta de Seguimiento - EN LÍNEA':
          return 200;
          break;
        case 'Primera Consulta - PRESENCIAL':
          return 300;
          break;
        case 'Consulta de Seguimiento - PRESENCIAL':
          return 300;
          break;
      }
    }

    const servicePrice = pricing(service);
const others = 300;
const iva = servicePrice * 0.16;
const total = (servicePrice + others + iva) * quantity;

    let currentEvent = {
      date: appointmentData.current.date.value,
      hour: appointmentData.current.hour.value,
      service: appointmentData.current.service.value,
      quantity: quantity,
      email: appointmentData.current.email.value,
      name: appointmentData.current.name.value,
      number: appointmentData.current.number.value,
      comments: appointmentData.current.comments.value,
      price: servicePrice,
      others: others,
      iva: iva,
      total: total 
    }
    localStorage.setItem('currentEvent', JSON.stringify(currentEvent));
    setMyEvent(currentEvent);
    creatingANewEvent(currentEvent, setTest, setOrderSummaryValidator)
  }

  return (
    <>
      {/* <div className={`contact-content`}>
        <div id="calendar_section" style={{ position: 'relative', width: '70%', paddingTop: '75%' }}>
        <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FMexico_City&bgcolor=%23ffffff&showTitle=0&showPrint=0&showCalendars=0&showTz=0&showTabs=0&src=Y2U4Yjg3NGQ4MmFkM2VlM2U0ODQ2NmRmNzE1NmJiZjc4NmE1YjA5MzZiZDk3ZGZkZWZjYWM5YTg0NzlhNTA0MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23009688"
        style={{
          border: '0',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '80%',
          frameborder: '0',
          scrolling: 'no'
        }}

      />
        </div>
        <div className="contact-form" style={{ backgroundColor: 'var(--graduation-3)' }}>
          <h4 style={{ color: 'var(--white-5)', margin: '2rem auto', textAlign: 'center', width: '90%' }}>
            {test}
          </h4>
          {!summaryValidator ? (
            <form id="appointment_form" ref={appointmentData} onSubmit={sendAppointmentData}>
              <label htmlFor="service">Elije tu servicio</label>
              <select id="service" name="service">  
                <option value="Primera Consulta - EN LÍNEA">Primera Consulta - EN LÍNEA</option>
                <option value="Consulta de Seguimiento - EN LÍNEA">Consulta de Seguimiento - EN LÍNEA</option>
                <option value="Primera Consulta - PRESENCIAL">Primera Consulta - PRESENCIAL</option>
                <option value="Consulta de Seguimiento - PRESENCIAL">Consulta de Seguimiento - PRESENCIAL</option>
              </select>
              <br />
              <input type="number" id="quantity" name="quantity" min="1" max="10" step="1"         value={quantity} // Mantiene el valor definido
        onChange={handleChange}/>
              <input type="date" id="date" name="date" min="2024-01-01" max="2024-12-31" required />
              <br />

              <label htmlFor="hour">Hora</label>
              <select id="hour" name="hour" required>
                <option className="hour" value="11:00:00">11:00 AM</option>
                <option className="hour" value="12:00:00">12:00 PM</option>
                <option className="hour" value="13:00:00">01:00 PM</option>
                <option className="hour" value="14:00:00">02:00 PM</option>
                <option className="hour" value="15:00:00">03:00 PM</option>
                <option className="hour" value="16:00:00">04:00 PM</option>
                <option className="hour" value="17:00:00">05:00 PM</option>
                <option className="hour" value="18:00:00">06:00 PM</option>
                <option className="hour" value="19:00:00">07:00 PM</option>
              </select>
              <br />

              <input type="text" placeholder="Nombre" maxLength="30" name="name" id="name" required />
              <br />

              <input type="email" placeholder="Correo" maxLength="40" name="email" id="email" required />
              <br />

              <input type="tel" placeholder="Teléfono (Opcional)" maxLength="15" name="number" id="number" required />
              <br />

              <textarea
                placeholder="Comentarios adicionales"
                maxLength="1000"
                name="comments"
                id="comments"
              ></textarea>
              <br />

              <input
                type="submit"
                name="send"
                value="Agendar"
                id="send"
                style={{
                  backgroundColor: 'var(--complementary-4)',
                  color: 'var(--complementary-2)',
                  maxWidth: 'none'
                }}
                />
            </form>
          ) :
            (
              <div className="order-summary">
                <div>
                <table>
    <thead>
        <tr>
            <th colSpan="2">Por favor verifica la información de tu pedido antes de continuar.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Servicio: 
              {myEvent.service} <br /> 
            Fecha: {myEvent.date} <br />
            Hora: {myEvent.hour} <br/>
            </td>
            <td>$ {myEvent.price}.00 MXN</td>
        </tr>
        <tr>
        <td>Otros cargos</td>
        <td>$ {myEvent.others}.00 MXN</td>
        </tr>
        <tr>
          <td>IVA</td>
          <td>$ {myEvent.iva}.00 MXN</td>
        </tr>
        <tr>
          <td>Total por {myEvent.quantity} {myEvent.quantity === 1 ? `persona`: `personas`}</td>
          <td>$ {myEvent.total}.00 MXN</td>
        </tr>
    </tbody>
</table>
</div>
<div>
<ul>
  <li><a onClick={()=>{makingPayment(myEvent)}}>Pagar con Paypal</a></li>
</ul>
</div>
              </div>
            )}
        </div>
      </div> */}

      <PaymentForm/>
    </>
  )
}

export default Appointment;