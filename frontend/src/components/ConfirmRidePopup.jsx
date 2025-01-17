import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ConfirmRidePopup = ({ setConfirmRidePopUpPannel, setRidePopUpPannel }) => {
    const [otp,setOtp]= useState('');
    const submitHandler =(e) =>{
        e.preventDefault();
        console.log(otp)
    }
    return (
        <div className='h-screen'>
            <h5 onClick={() => { setRidePopUpPannel(false) }} className='text-center p-3 w-[93%] absolute  top-0'>  <i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h2 className='text-xl font-semibold my-2'>Finish This Ride</h2>

            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4'>
                <div className='flex gap-4 items-center  '>
                    <img className='h-12 w-12 rounded-full object-cover' src="data:image/png;base64,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" alt="" />
                    <h5 className='text-xl font-medium '>Harsh Patel</h5>
                </div>

                <h5 className='text-lg font-semibold'>4.5 KM</h5>
            </div>
            <div className='flex gap-3 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-base text-gray-600 -mt-1'>Kankariya Talab, Ahmdabad</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-map-pin-user-line"></i>
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
                <div className="mt-6 w-full">
                    <form onSubmit={submitHandler}>
                        <input className='bg-[#eee] rounded-lg px-6 py-3 font-mono border w-full' type="number" value={otp} onChange={(e)=>{setOtp(e.target.value)}} placeholder='Enter Otp' />
                        <div className='w-full'>

                            <Link to='/captain-riding' onClick={() => {
                            }} className='w-full mt-6 flex justify-center text-white bg-green-600 font-semibold p-2 rounded-lg'>Confirm</Link>
                            <button onClick={() => {
                                setConfirmRidePopUpPannel(false)
                                setRidePopUpPannel(false)
                            }} className='w-full text-white bg-red-600 mt-2 font-semibold p-2 rounded-lg'>Ignore</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
