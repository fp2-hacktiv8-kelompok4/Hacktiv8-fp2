import Login from './pages/Login/Login'
import Footer from './components/Footer'
import { Routes, Route} from 'react-router-dom'

import homePage from './pages/homePage'
import Header from './components/Header/Header'
import cart from './pages/cart'
import homePageAdmin from './pages/admin/homePageAdmin'
import rekapPenjualan from './pages/admin/rekapPenjualan'

function App() {

  return (
    <>
      <div>
      <Header />
      <div className='flex flex-col justify-center items-center min-h-screen '>
        <Routes>
           <Route path='/' Component={homePage} />
           <Route path='/login' Component={Login}  />
           <Route path='/cart' Component={cart}  />
           <Route path='/admin' Component={homePageAdmin}  />
           <Route path='/admin/rekap' Component={rekapPenjualan}  />
        </Routes>
        </div>
      <Footer/>
      </div>
    </>
  )
}

export default App
