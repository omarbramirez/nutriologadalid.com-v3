import Wall from '../assets/images/wall.png'
function Renewal(){
    return (
        <>
  
<div style={{ height: '80vh', display: 'grid', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
      <p style={{ textAlign: 'center' }}>
        <br />Esta parte de la página se encuentra en construcción en estos momentos...
      </p>
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-2)',
          fontSize: '25vw',
          color: 'var(--graduation-1)',
          margin: '1vw auto',
          padding: '0',
        }}
      >
        <img style={{ width: '200px' }} src={Wall} alt="logo" />
      </div>
      <a style={{ textAlign: 'center', fontSize: 'var(--text-subheader)' }} href="/">Volver</a><br /><br />
    </div>
        </>
    )
}

export default Renewal;