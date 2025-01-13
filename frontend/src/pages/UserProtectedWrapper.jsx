import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import axios from 'axios';

export const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { setUser } = useContext(UserContext)
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          if (response.status == 200) {
            const data = response.data;
            setUser(data.user);
            setIsLoading(false)
          }
        }).catch(err => {
          console.log(err);
          localStorage.removeItem('token');
          navigate('/login')
        })

    }
  }, [token]);


  if (isLoading) {
    return <div>Loading.....</div>
  }
  return (
    <>
      {children}
    </>
  )
}
