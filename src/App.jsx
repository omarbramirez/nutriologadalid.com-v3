import Header from "./bases/Header"
import Footer from "./bases/Footer"
import Content from "./bases/Content"
import RenewalFullscreen from "./components/RenewalFullscreen.jsx"
import { useState, useEffect } from 'react'



function App() {

  const [page, setPage] = useState('index');
  const [mobileFullscreen, setFullscreen]=useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);


  

  return (
    <>
      <div>
        { mobileFullscreen && 
          <RenewalFullscreen setFullscreen={setFullscreen}/>
        }
        <Header page={page} setPage={setPage} />
          <Content page={page} setPage={setPage} setFullscreen={setFullscreen}/> 
           <Footer setPage={setPage}/>
      </div>
    </>
  )
}

export default App
