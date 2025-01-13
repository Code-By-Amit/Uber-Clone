import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.post(`${import.meta.env.VITE_BASE_URL}/users/logout`,{}, {
            withCredentials: true,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token')
                navigate('/login')
            }
        })
    }, [navigate])  
    return (
        <div>UserLogout</div>
    )
}
