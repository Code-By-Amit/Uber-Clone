import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react"
import 'remixicon/fonts/remixicon.css'
import { LocationSearchPannel } from '../components/LocationSearchPannel'
import { VehiclePannel } from '../components/VehiclePannel'
import { ConfirmRide } from '../components/ConfirmRide'
import { LookingForDriver } from '../components/LookingForDriver'
import { WaitingForDriver } from '../components/WaitingForDriver'

export const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const pannelRef = useRef(null);
  const pannelCloseRef = useRef(null);

  const confirmRidePannelRef = useRef(null);
  const [confirmRidePannel, setConfirmRidePannel] = useState(false)
  
  const [vehiclePannel,setVehiclePannel] = useState(false);
  const vehiclePannelRef = useRef(null)
  
  const [vehicleFound,setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null)

  const waitingForDriverRef = useRef(null);
  const [waitingForDriver,setWaitingForDriver] = useState(false)

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
    }
  },[vehiclePannel]);



  useGSAP(()=>{
    if(confirmRidePannel){
      gsap.to(confirmRidePannelRef.current,{
        translateY: '0%',
      })
    }else{
      gsap.to(confirmRidePannelRef.current,{
        translateY: '100%',
      })
    }
  },[confirmRidePannel])


  useGSAP(()=>{
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        translateY: '0%',
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        translateY: '100%',
      })
    }
  },[vehicleFound])


  useGSAP(()=>{
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        translateY: '0%',
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        translateY: '100%',
      })
    }
  },[waitingForDriver])

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

      <div ref={vehiclePannelRef} className='fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <VehiclePannel setVehiclePannel={setVehiclePannel} setConfirmRidePannel={setConfirmRidePannel}/>
      </div>

      <div ref={confirmRidePannelRef} className='fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <ConfirmRide setVehiclePannel={setVehiclePannel} setConfirmRidePannel={setConfirmRidePannel} setVehicleFound={setVehicleFound} />
      </div>

      <div ref={vehicleFoundRef} className='fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      <div ref={waitingForDriverRef} className='fixed w-full z-10  bottom-0  bg-white px-3 py-6 pt-12'>
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver} setVehicleFound={setVehicleFound}/>
      </div>

    </div>
  )
}
