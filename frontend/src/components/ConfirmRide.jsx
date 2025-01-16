import React from 'react'

export const ConfirmRide = ({ setVehicleFound, setVehiclePannel ,setConfirmRidePannel}) => {
    return (
        <div>
            <h5 onClick={() => { setConfirmRidePannel(false) }} className='text-center p-3 w-[93%] absolute  top-0'>  <i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
            <h2 className='text-xl font-semibold my-4'>Confirm Your Ride</h2>
            <div className='flex gap-3 justify-between flex-col items-center'>
                <img className='h-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
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
                <button onClick={() => {
                    setVehicleFound(true)
                    setVehiclePannel(false)
                    setConfirmRidePannel(false)
                }} className='w-full mt-5 bg-green-600 font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
        </div>
    )
}
