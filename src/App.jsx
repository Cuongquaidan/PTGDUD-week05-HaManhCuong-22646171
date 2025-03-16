
import Footer from './components/Footer'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
        <Header></Header>
        <section className='w-full min-h-screen'>
           <Outlet></Outlet>
        </section>
       
        <Footer></Footer>
    </>
  )
}

export default App
