import Login from './pages/Login/Login'
import { Routes, Route} from 'react-router-dom'

import homePage from './pages/homePage'
import cart from './pages/cart'
import homePageAdmin from './pages/admin/homePageAdmin'
import rekapPenjualan from './pages/admin/rekapPenjualan'
import Navbar from './components/Header/Navbar'

function App() {

  return (
    <>
      <div>
      <div>
        <Routes>
           <Route path='/' Component={homePage} />
           <Route path='/login' Component={Login}  />
           <Route path='/cart' Component={cart}  />
           <Route path='/admin' Component={homePageAdmin}  />
           <Route path='/admin/rekap' Component={rekapPenjualan}  />
           <Route path='nav' Component={Navbar} />
        </Routes>
        </div>
      </div>
    </>
  )
}

export default App
