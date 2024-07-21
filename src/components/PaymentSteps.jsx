import Methods from '../assets/data/paymentmethods.json'
import Paypal from '../assets/images/methods/paypal.png'
import VisaMaster from '../assets/images/methods/visamaster.png'
import Oxxo from '../assets/images/methods/oxxo.png'
import Money from '../assets/images/methods/money.png'

import Sample1 from '../assets/images/methods/samples/paypal1.jpg'
import Sample2 from '../assets/images/methods/samples/paypal2.jpg'
import Sample3 from '../assets/images/methods/samples/paypal3.jpg'

function Payment({page}){
    const samples = [
        [Paypal,Sample1,Sample2,Sample3],
        [VisaMaster,Sample1,Sample2,Sample3],
        [Oxxo,Sample1,Sample2,Sample3],
        [Money,Sample1,Sample2,Sample3]
    ]
    return(
        <>
        <div className={`payment-steps payment-steps-${page}`}>
            {Methods.map((method, index) => (
                method.method === page && (
                    <div key={index}>
                        <div className={'landing-message'}>                   
                        <img src={samples[index][0]} alt={`${page} method logo`} className={`method-logo`} />
                        
                        <b className={`step-headline`}>
                                Sigue estás sencillas instrucciones para completar tu pago.
                                </b>    
                        </div>
                        <ul>
                            {method.steps.map((step, i)=>(
                                <li key={`step-${i}`} className={`step`}>
                                    <div>
                                    <div className={`step-number`}>{i+1}</div>
                                    <h3 className={`payment-steps-headline`}>
                                        {step}
                                        </h3>
                                    </div>
                                        <img src={samples[index][i+1]} alt={`${page} step`} className={`visual-step`} />
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                )
            ))}
        </div>
    </>
    )
}

export default Payment