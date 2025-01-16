import React from 'react'
import { Link } from 'react-router-dom'

export const Riding = () => {
    return (
        <div className='h-screen'>
                <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                   <i class=" text-lg font-medium ri-home-5-line"></i>
                </Link>
           
            <div className='h-1/2'>
                <img className='h-full w-full object-cover' src="..\src\assets\Images\map.png" alt="" />
            </div>


            <div className='h-1/2 p-5'>

                <div className='flex items-center justify-between'>
                    <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -my-1 '>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-3 justify-between flex-col'>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-base text-gray-600 -mt-1'>Kankariya Talab, Ahmdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-base text-gray-600 -mt-1'>Cash Cash</p>
                        </div>
                    </div>

                </div>

                <button className='w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg text-white'>Make a Payment</button>
            </div>
        </div>
        // </div >
    )
}
