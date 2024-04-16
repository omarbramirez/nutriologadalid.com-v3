import Header from "./bases/Header"
import Footer from "./bases/Footer"
import Content from "./bases/Content"
import { useState, useEffect } from 'react'


function App() {

  const [page, setPage] = useState('index');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  

  return (
    <>
      <div>
        <Header page={page} setPage={setPage} />
          <Content page={page} setPage={setPage}/> 
           <Footer setPage={setPage}/>
      </div>
    </>
  )
}

export default App
