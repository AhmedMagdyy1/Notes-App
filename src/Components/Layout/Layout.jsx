import React from 'react'
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'
import SideBar from '../SideBar/SideBar'

export default function Layout() {
  return (
   <>
   
   <div className="container">
    
   <div className="row">
   <SideBar/>
   <div className='w-75'>
   <SignIn/>
   <Register/>
   </div>
    </div>
   </div>
   </>
  )
}
