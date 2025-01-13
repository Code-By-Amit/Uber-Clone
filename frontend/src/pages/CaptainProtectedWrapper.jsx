import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UNSAFE_decodeViaTurboStream, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';

export const CaptainProtectedWrapper = ({ children }) => {
    const { setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true)
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        } else {
            axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if (response.status == 200) {
                    setCaptain(response.data.captain)
                    setIsLoading(false);
                }
            }).catch((err) => {
                console.log(err)
                navigate('/captain-login')
            })
        }
    }, [token]);

    if (isLoading) {
        return <div>Loading.......</div>
    }
    return (
        <>
            {children}
        </>
    )
}
