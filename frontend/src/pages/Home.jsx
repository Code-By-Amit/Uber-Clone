import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <div className='h-screen pt-8 flex justify-between flex-col bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1658933321272-90bdf581ed45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx0cmFmZmljJTIwbGlnaHR8ZW58MHx8MHx8fDA%3D)]  w-full'>
            <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4'>
                <h2 className='text-xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='w-full flex justify-center items-center bg-black text-white py-2 rounded  mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}
