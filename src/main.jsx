import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cat from './components/Cat/Cat'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cat />
    <App />
    <ToastContainer
      position="top-right"
      autoClose={3000} 
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
<<<<<<< HEAD
      theme="dark" 
      />
=======
      theme="dark" />
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7
  </StrictMode>,
)
