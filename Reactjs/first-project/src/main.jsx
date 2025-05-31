import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Courses from './componets/Courses.jsx'
// import datascience from './assets/dta.webp'
import fullstack from './assets/Full-Stack-Developer.jpg'
// import python from './assets/pyth.jpg'
import Card from './componets/Card.jsx'


createRoot(document.getElementById('root')).render(
<>
     {/* <App /> */}
    {/* <Courses name="Full-Stack" image={fullstack} desc="This is full stack course"/>
   
    <Courses name="Data Science" image={datascience} desc="This is Data Science course"/>
    <Courses name="Python" image={python} desc="This is Python course" /> */}
    
    <Card>
        <div>
            Passing Childen as a Props
        </div>
        <div className='container'>
    <p className='para'>This is full stack course</p>
    <img className='img' src={fullstack}   />
    <p>{} </p>
    </div>
    </Card>
</>

)
