function NotFound ({setPage}){
    return(
        <div style={{ height: '80vh', display: 'grid', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} className="content">
        <p style={{ textAlign: 'center' }}>
          <br />Desafortunadamente no pudimos encontrar esta parte del sitio.
        </p>
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'var(--font-2)',
            fontSize: '25vw',
            color: 'var(--graduation-1)',
            margin: '1vw auto',
            padding: 0,
          }}
        >
          404
        </p>
        <a style={{ textAlign: 'center', fontSize: 'var(--text-subheader)' }} onClick={()=>setPage('index')}>Volver</a><br /><br />
      </div>
    )
}

export default NotFound;