import ReviewsData from '../assets/data/reviews.json'
import User01 from '../assets/images/testimonials/mish.jpg'
import User02 from '../assets/images/testimonials/pau.jpg'
import User03 from '../assets/images/testimonials/valeria.jpg'
import User04 from '../assets/images/testimonials/ricardo.jpg'
import Women from '../assets/images/testimonials/women.jpg'
import User05 from '../assets/images/testimonials/brenda.jpg'
import User06 from '../assets/images/testimonials/maggie.jpg'

import Proof01 from '../assets/images/testimonials/ricardo_002.jpeg'
import Proof02 from '../assets/images/testimonials/ricardo_003.jpeg'
import { useState } from 'react'
import Banner from '../components/Banner.jsx'

function Testimonials() {
    const imgs = [User01, User02, User03, [User04, [Proof01, Proof02]], Women, User05, User06]

    const[indexProof, setProof] = useState(0)
    return (
        <>
            <h1>Testimoniales</h1>
            {/* <iframe
                className="video"
                src="https://www.youtube.com/embed/x5AiarGNKYc?autoplay=1&mute=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe> */}
            <ul className="testimonials" style={{margin: '0', padding: '5rem 0'}}>
                {ReviewsData[2].map((data, i) => (
                    <li key={`user-${i}`} className={`testimonial`} style={{margin: '8%'}}>
                        {data.evidence ? 
<img src={imgs[i][0]} alt="user" className="user" />    
                        :
<img src={imgs[i]} alt="user" className="user" />

                        }
                        <div className={`review`}>
                            <p>{data.review}</p>
                            <b className={`user_name`}>{data.user}</b>
                        </div>
                        {data.evidence &&
                        <div className="wrap">
                                <ul className="proofs">
                                        {imgs[i][1].map((proof, i)=>(
                                    <li key={`proof-${i}`} className={`proof proof-1 ${indexProof === i && 'active'}`}>
                                            <img src={proof} alt="proof" />
                                    </li>
                                        )
                                        )
                                        }
                                </ul>
                                        

                                <ul className="dot-container nav-proofs">
                                    {imgs[i][1].map((proof, i)=>(
                                    <li key={`proof-${i}`} className={`dot proof_dot proof-1 ${indexProof === i && 'active'}`} onClick={()=>{setProof(i)}}></li>
                                    ))}
                                </ul>
                            </div>
                        }
                    </li>
                ))
                }
            </ul>
            <Banner txt={'Todos los menús son deliciosos 😋 y lo mejor de todo es que he visto los cambios que necesitaba y he mejorado mi alimentación ¡Gracias! 🧡'}/>
        </>
    )
}

export default Testimonials;