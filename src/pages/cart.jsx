import React,{Fragment} from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/index'

const cart = () => {
  return (
    <Fragment> 
      <Navbar />
      <div className='flex justify-center items-center min-h-screen bg-slate-200'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab voluptatem ea debitis facere laborum quo nostrum repellendus rem tempore harum, sit fugiat quidem repellat quaerat velit magni veniam, incidunt repudiandae!</p>
      </div>
      <Footer />
    </Fragment>
  )
}

export default cart