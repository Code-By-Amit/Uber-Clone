import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDetails } from '../components/CaptainDetails'
import { RidePopup } from '../components/RidePopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ConfirmRidePopup } from '../components/ConfirmRidePopup'

export const CaptainHome = () => {
  const [ridePopUpPannel,setRidePopUpPannel] = useState(true);
  const ridePopUpPannelRef = useRef(null);

  const [confirmRidePopUpPannel,setConfirmRidePopUpPannel] = useState(false );
  const confirmRidePopUpPannelRef = useRef(null);

    useGSAP(()=>{
    if(ridePopUpPannel){
      gsap.to(ridePopUpPannelRef.current,{
        translateY: '0%',
      })
    }else{
      gsap.to(ridePopUpPannelRef.current,{
        translateY: '100%',
      })
    }
  },[ridePopUpPannel])

    useGSAP(()=>{
    if(confirmRidePopUpPannel){
      gsap.to(confirmRidePopUpPannelRef.current,{
        translateY: '0%',
      })
    }else{
      gsap.to(confirmRidePopUpPannelRef.current,{
        translateY: '100%',
      })
    }
  },[confirmRidePopUpPannel])

  return (
    <div className='h-screen'>
      <div>
        <img className='w-14 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="..\src\assets\Images\map.png" alt="" />
      </div>


      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>


      <div ref={ridePopUpPannelRef} className='fixed w-full z-10  translate-y-full bottom-0  bg-white px-3 py-10 pt-12'>
        <RidePopup setConfirmRidePopUpPannel={setConfirmRidePopUpPannel} setRidePopUpPannel={setRidePopUpPannel}/>
      </div>

      <div ref={confirmRidePopUpPannelRef} className='fixed w-full z-10 h-screen translate-y-full bottom-0  bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopup setConfirmRidePopUpPannel={setConfirmRidePopUpPannel} setRidePopUpPannel={setRidePopUpPannel}/>
      </div>

    </div>
  )
}
