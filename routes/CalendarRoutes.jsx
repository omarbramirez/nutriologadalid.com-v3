import axios from "axios";
const baseURL =import.meta.env.VITE_REACT_APP_API_URL


export const makingPayment = async (myEvent) => {
  try {
    const response = await axios.post(`${baseURL}/create-payment`, myEvent);
    const { approvalUrl } = response.data;
    if (approvalUrl) {
      window.location.href = approvalUrl; // Redirige al usuario a PayPal
    } else {
      console.error('No approval URL found');
    }
  } catch (error) {
    console.error('Error creating payment:', error);
  }
};

export const gettingCalendarInfo =async ()=>{
  await axios.get(`${baseURL}/getting-calendar-info`).then(async res => {
    console.log(res.data);
  }).catch(error => {
    console.error('Error:', error);
  });
}



export const creatingANewEvent = async (myEvent, setTest, setOrderSummaryValidator)=>{
  try{
    const myEventValidated = await axios.post(`${baseURL}/create-a-new-appointment`, myEvent)
    console.log(myEventValidated.data)
    //tengo que trabajar desde aquí para cambiar el estado 
    if(myEventValidated.data){
      setOrderSummaryValidator(true)
      setTest('Revisemos tu pedido')
    } else setTest('El horario ya está ocupado')
    // myEventValidated.data ? makingPayment(myEvent) : setTest('El horario ya está ocupado')
  }catch (error) {
        console.error('Error creating payment:', error);
      }
}