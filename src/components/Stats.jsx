function Stats ({title, dataBase, page, Img}){
    return (
        <>
        <div className={`stats ${page}`}>
        <h1>{title}</h1>
        <div className={`stats-wrap ${page}`}>

        <ul>

        {dataBase.map((data, i)=>(
            <li key={`${page}-stat-${i}`} >
            <div style={{margin: '5em 0em'}}>
                <span className={`${page}-stat`}>
                    <em className={`stat-number ${page}-stat-number`}>{data.stat}</em>
                    <b className={`stat-headline ${page}-stat-headline`}>{data.headline}</b>
                </span>
                <p className={`stat-description ${page}-stat-description`}>{data.description}</p>
            </div>
            </li>
        ))
    }
    </ul>
        <img className={`stat-img`} src={Img} alt={page} />
    </div>
        </div>
        </>
    )
}

export default Stats