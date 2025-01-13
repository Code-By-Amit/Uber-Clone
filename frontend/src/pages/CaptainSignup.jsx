import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

export const CaptainSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')

    const { captain, setCaptain } = useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newCaptain = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);

        if (response.status === 201) {
            const data = response.data;
            setCaptain(data.captain);
        }
        setEmail('');
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
    }
    return (
        <div className='p-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={submitHandler}>

                    <h3 className='text-base font-medium mb-1'>What's our Captain's Name</h3>
                    <div className='flex gap-2 mb-5'>
                        <input className='bg-[#eeeeee] rounded w-1/2 px-4 py-1 border text-sm placeholder:text-sm' value={firstName} onChange={e => { setFirstName(e.target.value) }} type="text" required placeholder='First' />
                        <input className='bg-[#eeeeee] rounded w-1/2 px-4 py-1 border text-sm placeholder:text-sm' value={lastName} onChange={e => { setLastName(e.target.value) }} type="text" placeholder='Last' />
                    </div>
                    <h3 className='text-base font-medium mb-1'>What's our Captain's Email</h3>
                    <input className='bg-[#eeeeee] rounded px-4 py-1 mb-5 border w-full text-sm placeholder:text-sm' value={email} onChange={e => { setEmail(e.target.value) }} type="email" required placeholder='email@example.com' />
                    <h3 className='text-base font-medium mb-1'>Enter Password</h3>
                    <input className='bg-[#eeeeee] rounded px-4 mb-5 py-1 border w-full text-sm placeholder:text-sm' value={password} onChange={e => { setPassword(e.target.value) }} type="password" required placeholder='password' />

                    <h3 className='text-base font-medium mb-2'>Vehicle Information</h3>
                    <div className='flex gap-2 mb-2'>
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-xs'
                            type="text"
                            placeholder='Vehicle Color'
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value)
                            }}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-xs'
                            type="text"
                            placeholder='Vehicle Plate'
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value)
                            }}
                        />
                    </div>
                    <div className='flex gap-4 mb-7'>
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-xs'
                            type="number"
                            placeholder='Vehicle Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                        />
                        <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-xs placeholder:text-xs'
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                        >
                            <option value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="bike">Bike</option>
                        </select>
                    </div>


                    <button className='bg-[#111] mb-2 text-white font-semibold rounded text-sm px-3 py-1 border w-full'>Create Account</button>
                </form>
                <p className='text-center text-xs'>
                    Already Have an Account?
                    <Link className='text-blue-600' to='/captain-login'> Login Here</Link>
                </p>
            </div>

            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Service</span>  apply.</p>
            </div>
        </div>
    )
}
