import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './components/Counter.jsx'
import FetchData from './components/FetchData.jsx'
import Hookform from './components/Hookform.jsx'

createRoot(document.getElementById('root')).render(
    
    // <App />
    // <Counter/>
    // <FetchData/>
    <Hookform/>
)
