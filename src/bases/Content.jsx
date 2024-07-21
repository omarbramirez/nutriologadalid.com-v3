import Index from '../pages/Index.jsx'
import Aboutme from '../pages/Aboutme.jsx';
import Appointment from '../pages/Appointment.jsx';
import Contact from '../pages/Contact.jsx'
import Policy from '../pages/Policy.jsx';
import Services from '../pages/Services.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import PaymentSuccess from '../pages/PaymentSuccess.jsx';
import PaymentCancel from '../pages/PaymentCancel.jsx';
import Renewal from '../pages/Renewal.jsx';
import Gens from '../pages/Gens.jsx';
import NotFound from './NotFound.jsx'
import PaymentSteps from '../components/PaymentSteps.jsx';
import { useEffect, useState } from 'react'
import axios from "axios";
const baseURL =import.meta.env.VITE_REACT_FRONTEND_URL;

function Content ({page, setPage, setFullscreen}){
  const [mainEvent, setMainEvent] = useState({})
  const [mainDate, setMainDate] = useState(' ');

  useEffect(() => {
    const handlePaymentResponse = async () => {

      const currentURL = window.location.href;

      if (currentURL.includes('payment-success')) {
        try {
          const response = await axios.get(`${baseURL}/payment-success`);
          if(response.status === 200){
            const currentEvent = localStorage.getItem('currentEvent');
    if (currentEvent) {
      const formatEventDate = (event) => {
        const date = new Date(event.date);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Intl.DateTimeFormat('es-ES', options).format(date);
      };
      setMainEvent(JSON.parse(currentEvent));
      setMainDate(formatEventDate(JSON.parse(currentEvent)))
    }
    console.log(currentEvent)
            setPage('payment-success');
          }
        } catch (error) {
          console.error('Error al procesar el pago:', error);
          setPage('testimonials');
        }
      } else if (currentURL.includes('payment-cancel')) {
        try {
          const response = await axios.get(`${baseURL}/payment-cancel`);
          console.log('cancel', response);
          if(response.status === 200){
            setPage('payment-cancel');
          }
          } catch (error) {
          console.error('Error al procesar el pago:', error);
          setPage('contact');
        }
      }
    };

    handlePaymentResponse();
  }, []);


    return(
        <>
        <div className= {`${page}-content content`}>
            { 
            page === 'index' ? <Index setPage={setPage}/> :
              page === 'renewal' ? <Renewal setPage={setPage} page={page} setFullscreen={setFullscreen}/> :
              page === 'gens' ? <Gens setPage={setPage}/>:  
              page === 'services' ? <Services setPage={setPage}/> :
              page === 'testimonials' ? <Testimonials setPage={setPage}/>:
              page === 'contact' ? <Contact setPage={setPage}/> :
              page === 'payment-success' ? <PaymentSuccess setPage={setPage} mainEvent={mainEvent} mainDate={mainDate}/> :
              page === 'payment-cancel' ? <PaymentCancel setPage={setPage}/> :
              page === 'aboutme' ? <Aboutme setPage={setPage}/> :
              // page === 'appointment-module' ? <Appointment setPage={setPage}/> :
              page === 'privacypolicy' ? <Policy setPage={setPage}/> :
              page === 'paypal' || page === 'visamaster' || page === 'oxxo' || page === 'money' ? <PaymentSteps page={page}/> :
            <NotFound setPage={setPage}/>
            }
        </div>
        </>
    )
}

export default Content;