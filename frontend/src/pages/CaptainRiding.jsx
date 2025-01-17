import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FinishRide } from '../components/FinishRide';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const CaptainRiding = () => {
     
    const [finishRidePanel,setFinishRidePanel] = useState(false);
    const finishRidePanelRef = useRef(null);

    useGSAP(()=>{
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            translateY: '0%',
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            translateY: '100%',
          })
        }
      },[finishRidePanel])

      
    return (
        <div className='h-screen'>
            <div>
                <img className='w-14 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/capatin-home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className=" text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>

            <div className='h-4/5'>
                <img className='h-full w-full object-cover' src="..\src\assets\Images\map.png" alt="" />
            </div>


            <div onClick={setFinishRidePanel} className='h-1/5 p-6 flex items-center relative justify-center bg-yellow-400'>
                <h5 className='text-center w-[95%] absolute top-0'>  <i className=" text-3xl text-black ri-arrow-up-wide-line"></i></h5>
                <div className='flex items-center justify-between w-full'>
                    <h4 className='text-xl font-semibold'>4km Away</h4>
                    <button className=' bg-green-600 font-semibold p-2 text-white px-8 rounded-lg'>Complete Ride</button>
                </div>
            </div>

            <div ref={finishRidePanelRef} className='fixed w-full z-10 h-5/6  bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
                <FinishRide  setFinishRidePanel={setFinishRidePanel}/>
            </div>
            
        </div>

    )
}
