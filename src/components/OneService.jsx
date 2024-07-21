function OneService ({title, OneServiveImg ,page, button,headline,description}){
    return (
        <>
        <div className={`oneservice`}>

        <h1 className={`oneservice-title`}>{title}</h1>
        <div className={`oneservice-wrap`}>
        <div className={`oneservice-module`}>
        <a className={`button oneservice-button`}>{button}</a>
        <b className={`oneservice-headline`}>{headline}</b>
        <p className={`oneservice-description`}>{description}</p>
        </div>
        <div className="oneservice-img-container">
        <img src={OneServiveImg} alt={`${page} main image`} className={`oneservice-img`} />
        </div>
        </div>
        </div>
        </>
    )
}

export default OneService;