import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

export const CaptainLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
   
    const {setCaptain} = useContext(CaptainDataContext)
    const navigate = useNavigate();

    const submitHandler =async (e) => {
        e.preventDefault();
        const captainData = {
            email: email,
            password: password
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData)
        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home') 
        }
        setEmail('');
        setPassword('')
    }
    return (
        <div className='p-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-1' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                <form onSubmit={submitHandler}>
                    <h3 className='text-base font-medium mb-1'>What's your Email</h3>
                    <input className='bg-[#eeeeee] rounded px-4 py-1 mb-1 border w-full placeholder:text-base' value={email} onChange={e => { setEmail(e.target.value) }} type="email" required placeholder='email@example.com' />
                    <h3 className='text-base font-medium mb-1'>Enter Password</h3>
                    <input className='bg-[#eeeeee] rounded px-4 mb-5 py-1 border w-full placeholder:text-base' value={password} onChange={e => { setPassword(e.target.value) }} type="password" required placeholder='password' />
                    <button className='bg-[#111] mb-2 text-white font-semibold rounded px-3 py-1 border w-full text-base'>Login</button>
                </form>
                <p className='text-center text-xs'>
                    join a fleet?
                    <Link className='text-blue-600' to='/captain-signup'> Register as a Captain</Link>
                </p>
            </div>

            <div>
                <Link to='/login' className='bg-[#d5622d] mb-2 flex items-center justify-center text-white font-semibold rounded px-3 py-1 border w-full text-base'>Sign as User</Link>
            </div>
        </div>
    )
}
