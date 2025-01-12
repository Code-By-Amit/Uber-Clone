import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const {user,setUser} = useContext(UserContext)
    console.log(user);

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        setEmail('');
        setPassword('')
    }
    return (
        <div className='p-5 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-14 mb-4' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <form onSubmit={submitHandler}>
                    <h3 className='text-base font-medium mb-1'>What's your Email</h3>
                    <input className='bg-[#eeeeee] rounded px-4 py-1 mb-1 border w-full placeholder:text-base' value={email} onChange={e => { setEmail(e.target.value) }} type="email" required placeholder='email@example.com' />
                    <h3 className='text-base font-medium mb-1'>Enter Password</h3>
                    <input className='bg-[#eeeeee] rounded px-4 mb-5 py-1 border w-full placeholder:text-base' value={password} onChange={e => { setPassword(e.target.value) }} type="password" required placeholder='password' />
                    <button className='bg-[#111] mb-2 text-white font-semibold rounded px-3 py-1 border w-full text-base'>Submit</button>
                </form>
                <p className='text-center text-sm'>
                    New here?
                    <Link className='text-blue-600' to='/signup'> Create Account</Link>
                </p>
            </div>

            <div>
                <Link to='/captain-login' className='bg-[#10b461] mb-2 flex items-center justify-center text-white font-semibold rounded px-3 py-1 border w-full text-base'>Sign as Captain</Link>
            </div>
        </div>
    )
}
