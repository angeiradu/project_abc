import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className=' flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2'>Manage Data Analytics Centrally</h1>
                <p>huhtuh5uth5uhtu5htu5htu5htu5htu5ynhjnjthgbhtg
                    tgthguthuthgjntjntngujthguthguih6guit6gui6i6
                    tgnguithuy6h6guihgnjtgnjgbbnjgguthuthgthgtuhgut
                    tgthtuhguthu
                </p>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics