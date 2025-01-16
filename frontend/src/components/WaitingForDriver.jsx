import React from 'react'

export const WaitingForDriver = ({ setWaitingForDriver,setVehicleFound }) => {
    return (
        <div>
            <div>
                <h5 onClick={() => { setWaitingForDriver(false) }} className='text-center p-3 w-[93%] absolute  top-0'>  <i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>

                <div className='flex items-center justify-between'>
                    <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -my-1 '>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
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

                </div>
                
            </div>
        </div>
    )
}
