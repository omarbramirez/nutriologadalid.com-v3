import Paypal from '../assets/images/methods/paypal.png'
import VisaMaster from '../assets/images/methods/visamaster.png'
import Oxxo from '../assets/images/methods/oxxo.png'
import Money from '../assets/images/methods/money.png'

function PaymentMethods ({setPage}){
    const paymentMethodList = [[Paypal, 'paypal'], [VisaMaster, 'visamaster'], [Oxxo, 'oxxo'], [Money, 'money']]
    return (
        <>
            <h1 style={{color: 'var(--black-5)'}}>Métodos de Pago</h1>
        <div>
            <h3 className={`payment-method-headline`}>
                <b>¡Estás a punto de cambiar tu vida! </b><br/>

Elige tu método de pago favorito y sigue estas sencillas instrucciones.</h3>            
            <ul className={`payment-methods-list`}>
                {paymentMethodList.map((method, i) =>(
                <li key={`method-${i}`} className={`method`}><a 
                onClick={()=>setPage(`${method[1]}`)}>
                    <img src={method[0]} alt={`${method[1]}`} className={`payment-method`}/>
                </a>
                </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default PaymentMethods;