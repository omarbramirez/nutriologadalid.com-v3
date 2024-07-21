import {CardElement, Elements, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const CLIENT_SECRET = import.meta.env.STRIPE_CLIENT_SECRET

const stripePromise = loadStripe('pk_test_51PXDWYFxHVihXbZx9EfgzeK5Gd0iGvUDXbMLNPVnuRQySNdXwL6J8JqQWUIv2YWyJqYZ42DaShLczY4QHWch1Qkt002soAhGS8');

const CheckoutForm = ()=>{

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const {error, payment} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

  }

  return (
    <form onSubmit={handleSubmit} className='card card-body'>
      <div><img src="https://i.pinimg.com/236x/79/1e/ae/791eae0285dd8b911182c207c9e417bf.jpg" alt="" /></div>
    <CardElement/>
    <button>
      Pagar con Targeta
    </button>
  </form>
  )
}
// const options = {
// // passing the client secret obtained from the server
//   clientSecret: CLIENT_SECRET,
// };
 function PaymentForm() {

  return (
    <div>
      {/* <p>Loading...</p> */}
    <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
    </div>
  );
};

export default PaymentForm;
