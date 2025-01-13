import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import 'remixicon/fonts/remixicon.css'
import { LocationSearchPannel } from '../components/LocationSearchPannel'

export const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);

  const [vehiclePannel,setVehiclePannel] = useState(false);
  const vehiclePannelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();

  }

  useGSAP(function () {
    if (panelOpen) {
      gsap.to(pannelRef.current, {
        height: "70%",
        padding:24
        // opacity:1
      });
      gsap.to(pannelCloseRef.current,{
        opacity:1
      });
    } else {
      gsap.to(pannelRef.current, {
        height: "0%",
        padding:0
        // opacity:0
      });
      gsap.to(pannelCloseRef.current,{
        opacity:0
      })
    }

  },[panelOpen])


  useGSAP(()=>{
    if(vehiclePannel){
      gsap.to(vehiclePannelRef.current,{
        translateY: '0%',
      })
    }else{
      gsap.to(vehiclePannelRef.current,{
        translateY: '100%',
      })
      console.log('vehicle pannel',vehiclePannel)
    }
  },[vehiclePannel])

  return (
    <div className='relative'>
      <img className='w-14 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

      <div onClick={()=>{setVehiclePannel(false)}} className='w-screen h-screen'>
        <img  className='w-full h-full object-cover' src="..\src\assets\Images\map.png" alt="" />
      </div>

      <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white relative'>
          <h5 ref={pannelCloseRef} onClick={()=>setPanelOpen(false)} className='absolute opacity-0 text-2xl right-6 top-5'>
             <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-xl font-semibold mb-4'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className='line absolute h-16 w-1 top-[45%] left-9 bg-gray-900 rounded-full'></div>
            <input className='bg-[#eeee] px-8 py-2 w-full mb-3 text-lg rounded-lg placeholder:text-base' type="text" onFocus={() => { setPanelOpen(true) }} value={pickup} onChange={(e) => { setPickup(e.target.value) }} placeholder='Add a pick-up location' />
            <input className='bg-[#eeee] px-8 py-2 w-full text-lg rounded-lg placeholder:text-base' type="text" onClick={() => { setPanelOpen(true) }} value={destination} onChange={(e) => { setDestination(e.target.value) }} placeholder='Enter your destination' />
          </form>
        </div>

        <div ref={pannelRef} className=' bg-white h-0'>
          <LocationSearchPannel setPanelOpen={setPanelOpen} setVehiclePannel={setVehiclePannel}/>
        </div>


      </div>

      <div ref={vehiclePannelRef} className='fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-8'>
        <h5 onClick={()=>{setVehiclePannel(false)}} className='text-center p-3 w-[93%] absolute  top-0'>  <i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
        <h2 className='text-xl font-semibold my-4'>Choose a Vehicle</h2>
        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-1 justify-between'>
          <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s" alt="" />
         <div className='w-1/2 ml-1 '>
            <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 min away </h5>
            <p className='font-normal text-[0.64rem] text-gray-600'>Affortable, Compact rides</p>
         </div> 
         <h2 className='text-md font-semibold'>₹193.20</h2>
        </div>

        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-1 justify-between'>
          <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTJw6dzEo1MYXOAbONCG1oL82rxU_Bitb-g&s" alt="" />
         <div className='w-1/2 ml-2 '>
            <h4 className='font-medium text-sm'>Bike <span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>1 min away </h5>
            <p className='font-normal text-[0.64rem] text-gray-600'>Affortable, Compact rides</p>
         </div> 
         <h2 className='text-md font-semibold'>₹65.05</h2>
        </div>

        <div className='flex w-full border-2 mb-2 active:border-black rounded-xl items-center p-1 justify-between'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
         <div className='w-1/2 ml-2 '>
            <h4 className='font-medium text-sm'>Auto <span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>5 min away </h5>
            <p className='font-normal text-[0.64rem] text-gray-600'>Affortable, Compact rides</p>
         </div> 
         <h2 className='text-md font-semibold'>₹120.17</h2>
        </div>


      </div>
    </div>
  )
}
