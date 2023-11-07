import React, {Fragment} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'

const homePage = () => {
  return (
    <Fragment> 
      <Navbar />
      <div className='flex justify-center items-center min-h-screen bg-slate-200'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptatem ea debitis facere laborum quo nostrum repellendus rem tempore harum, sit fugiat quidem repellat quaerat velit magni veniam, incidunt repudiandae! lolololo</p>
      </div>
      <Footer />
    </Fragment>
  )
}

export default homePage