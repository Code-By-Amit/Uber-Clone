import React from 'react'

export const VehiclePannel = ({setVehiclePannel,setConfirmRidePannel }) => {
  return (
    <div>
          <h5 onClick={()=>{setVehiclePannel(false)}} className='text-center p-3 w-[93%] absolute  top-0'>  <i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-xl font-semibold my-4'>Choose a Vehicle</h2>
      
        <div onClick={()=>{setConfirmRidePannel(true)}} className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-1 justify-between'>
          <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
         <div className='w-1/2 ml-1 '>
            <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 min away </h5>
            <p className='font-normal text-[0.64rem] text-gray-600'>Affortable, Compact rides</p>
         </div> 
         <h2 className='text-md font-semibold'>₹193.20</h2>
        </div>

        <div onClick={()=>{setConfirmRidePannel(true)}} className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-1 justify-between'>
          <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="" />
         <div className='w-1/2 ml-2 '>
            <h4 className='font-medium text-sm'>Bike <span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>1 min away </h5>
            <p className='font-normal text-[0.64rem] text-gray-600'>Affortable, Compact rides</p>
         </div> 
         <h2 className='text-md font-semibold'>₹65.05</h2>
        </div>

        <div onClick={()=>{setConfirmRidePannel(true)}} className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-1 justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
         <div className='w-1/2 ml-2 '>
            <h4 className='font-medium text-sm'>Auto <span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>5 min away </h5>
            <p className='font-normal text-[0.64rem] text-gray-600'>Affortable, Compact rides</p>
         </div> 
         <h2 className='text-md font-semibold'>₹120.17</h2>
        </div>

    </div>
  )
}
