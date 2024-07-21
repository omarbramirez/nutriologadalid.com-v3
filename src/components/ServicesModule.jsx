import Check from '../assets/icons/check.svg'

function ServicesModule ({title, dataBase,style}){
    return(
        <div className={`services-module ${style}`}>
        <h1>{title}</h1>
        <div className={`services-module-flex`}>
            {dataBase.map((data, i)=>(
                <div key={`${i}`} className="calltoaction-services-module">
                <div></div>
                <h3 style={{display:'block', textAlign: 'left'}}>{data.title}</h3>
                <span className={`servicesmodule-pricing`}>
                <em className={`servicesmodule-number`}>{data.price}</em>
                <p>por día</p>
                </span>
                <p className={`servicemodule-description`}>{data.description}
                </p>
                <ul>
                    <li style={{display:'block', textAlign: 'left'}}><b>Características:</b></li>
                    {data.features.map((feature, i)=>(
                        <li key={`feature-${i}`} className={`servicemodule-feature`}><img src={Check} alt={`check-circle`} /><p >{feature}</p></li>
                    ))
                    }
                </ul>
                <a className={`button servicesmodule-button`}>Adquirir ahora</a>
            </div>
            ))

            }
        </div>
    </div>
    )
}

export default ServicesModule;