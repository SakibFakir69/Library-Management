import { useState } from 'react'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Function from './layouts/Function'


function App() {
 

  return (
    <div>
    <nav>
        <Navbar/>

    </nav>

    <div className='bg-color'>
      <Function/>
    </div>

      <main>
        <Outlet/>
      </main>

    </div>
  )
}

export default App
