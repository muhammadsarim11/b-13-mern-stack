import React from 'react'
import Head from './Head'

const Navbar = (test) => {

   
  return (
    <div>
  
  <nav>
    <div className="logo">
<h1>{test.data}</h1>
    </div>
    <Head/>
  </nav>
  
    </div>
  )
}

export default Navbar
