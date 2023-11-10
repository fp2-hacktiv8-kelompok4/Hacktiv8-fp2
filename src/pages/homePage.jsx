import React, {Fragment} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Header/Navbar'
import HeaderSlider from '../components/slider/HeaderSlider'
import LatestProducts from '../components/Products/LatestProducts'


const homePage = () => {
  return (
    <Fragment> 
      <Navbar />
      <HeaderSlider />
      <LatestProducts />
      <Footer />
    </Fragment>
  )
}

export default homePage