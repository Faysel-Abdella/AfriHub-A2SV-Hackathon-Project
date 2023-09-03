import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navigation from '../components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

function Tabs (){

  const isActive = "recommendation";
  console.log(isActive === "recommendation")
  console.log(isActive)

  return(
    <div className='container my-5'>
      <ul className="nav nav-tabs">
        <li className={isActive === "recommendation" ? 'nav-item active' : 'nav-item'} onClick={() => {isActive = "recommendation"}}>
          <a className="nav-link" href="/dashboard">Recommended Jobs</a>
        </li>
        <li className={isActive == "posts" ? 'nav-item active' : 'nav-item'} onClick={() => {isActive = "posts"}}>
          <a className="nav-link" href="/dashboard/posts">Posts</a>
        </li>
        <li className={isActive == "addjobs" ? 'nav-item active' : 'nav-item'} onClick={() => {isActive = "addjobs"}}>
          <a className="nav-link" href="/dashboard/addjobs" >Add Job</a>
        </li>
      </ul>
    </div>
  )
}

const Dashboard = ( ) => {
  return (
    <>
      <Navigation />
      <Tabs />
      <Outlet />
      <div className='my-5'>.</div>
      <Footer />
    </>
  )
}

export default Dashboard