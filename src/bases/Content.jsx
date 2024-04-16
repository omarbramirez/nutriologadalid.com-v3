import Index from '../pages/Index.jsx'
import Aboutme from '../pages/Aboutme.jsx';
import Appointment from '../pages/Appointment.jsx';
import Contact from '../pages/Contact.jsx'
import Policy from '../pages/Policy.jsx';
import Services from '../pages/Services.jsx';
import Testimonials from '../pages/Testimonials.jsx';
import NotFound from './NotFound.jsx'

function Content ({page, setPage}){
    return(
        <>
        <div className= {`${page}-content content`}>
            { page === 'index' ? <Index setPage={setPage}/> :
              page === 'services' ? <Services setPage={setPage}/> :
              page === 'testimonials' ? <Testimonials setPage={setPage}/>:
              page === 'contact' ? <Contact setPage={setPage}/> :
              page === 'aboutme' ? <Aboutme setPage={setPage}/> :
              page === 'appointment-module' ? <Appointment setPage={setPage}/> :
              page === 'privacypolicy' ? <Policy setPage={setPage}/> :
            <NotFound setPage={setPage}/>
            }
        </div>
        </>
    )
}

export default Content;