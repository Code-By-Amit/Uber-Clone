import React from 'react'

export const CaptainDetails = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://t4.ftcdn.net/jpg/08/53/07/37/360_F_853073742_s0I2xKQU9I6aK3YUdQDMt9HL6rAuQLsQ.jpg " alt="" />
                    <h4 className='text-lg font-medium'>Harsh Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹240.33</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex justify-center p-3 mt-6 bg-gray-100 rounded-md items-start '>
                <div className="text-center">
                    <i className=" text-3xl mb-2 ri-timer-2-line"></i>
                    <h5 className='font-medium text-lg'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online.</p>
                </div>
                <div className="text-center">
                    <i className="text-3xl mb-2 ri-speed-up-line"></i>
                    <h5 className='font-medium text-lg'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online.</p>
                </div>
                <div className="text-center">
                    <i className=" text-3xl mb-2 ri-booklet-line"></i>
                    <h5 className='font-medium text-lg'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online.</p>
                </div>
            </div>
        </div>
    )
}
