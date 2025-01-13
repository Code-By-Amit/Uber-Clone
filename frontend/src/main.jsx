import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { UserContextProvider } from './context/UserContext.jsx'
import { CaptainContext } from '../src/context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
 // <StrictMode>
    <UserContextProvider>
      <CaptainContext >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CaptainContext>
    </UserContextProvider>
   // </StrictMode>, 
)
