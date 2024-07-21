function PaymentSuccess ({mainEvent, mainDate}){
    return(
        <>
    <div className="content">
    <p>EL PAGO FUE EXITOSO</p>
    <p>{mainEvent.service}</p>
    <p>{mainDate}</p>
    </div>
    </>
    )
}

export default PaymentSuccess;