import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios' 
import { UserContext } from '../context/UserContext';

export const UserSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    

    const {user ,setUser} = useContext(UserContext)
    const navigate = useNavigate();

    const submitHandler = async(e) => {
        e.preventDefault();
        const newUser = {
            fullname:{
                firstname:firstName,
                lastname:lastName
            },
            email:email,
            password:password
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);

        if(response.status === 201){
            const data = response.data
            setUser(data.user);
            navigate('/home')
        }
        setEmail('');
        setPassword('')
        setFirstName('')
        setLastName('')
    }
    return (
        <div className='p-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-4' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={submitHandler}>

                    <h3 className='text-base font-medium mb-1'>What's your Name</h3>
                    <div className='flex gap-2 mb-2'>
                        <input className='bg-[#eeeeee] rounded w-1/2 px-4 py-1 border text-sm placeholder:text-sm' value={firstName} onChange={e => { setFirstName(e.target.value) }} type="text" required placeholder='First' />
                        <input className='bg-[#eeeeee] rounded w-1/2 px-4 py-1 border text-sm placeholder:text-sm' value={lastName} onChange={e => { setLastName(e.target.value) }} type="text" placeholder='Last' />
                    </div>
                    <h3 className='text-base font-medium mb-1'>What's your Email</h3>
                    <input className='bg-[#eeeeee] rounded px-4 py-1 mb-1 border w-full text-sm placeholder:text-sm' value={email} onChange={e => { setEmail(e.target.value) }} type="email" required placeholder='email@example.com' />
                    <h3 className='text-base font-medium mb-1'>Enter Password</h3>
                    <input className='bg-[#eeeeee] rounded px-4 mb-5 py-1 border w-full text-sm placeholder:text-sm' value={password} onChange={e => { setPassword(e.target.value) }} type="password" required placeholder='password' />
                    <button className='bg-[#111] mb-2 text-white font-semibold rounded text-sm px-3 py-1 border w-full'>Create Account</button>
                </form> 
                <p className='text-center text-xs'>
                    Already Have an Account?
                    <Link className='text-blue-600' to='/login'> Login Here</Link>
                </p>
            </div>

            <div>
                <p className='text-[10px] leading-tight'>By proceding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affilates to the number provider.</p>
            </div>
        </div>
    )
}
