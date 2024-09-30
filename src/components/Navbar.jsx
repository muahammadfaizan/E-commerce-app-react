import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-primary text-primary-content">
  <button className="btn btn-ghost text-xl">daisyUI</button>
  </div>
  <div className='flex justify-center gap-2 mt-5'>
   <button className='btn btn-primary'>
    <Link to='Home'>Admission form</Link></button>
   <button className='btn btn-primary'>
    <Link to='VerifyUser'>Admission Verfication</Link></button>
   </div>
    </>
  )
}

export default Navbar