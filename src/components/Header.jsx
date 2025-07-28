import React from 'react'
import { BsGlobeCentralSouthAsia  } from "react-icons/bs";

const Header = () => {
  return (
    <header className='bg-red-400'>
        {/* Container */}
        <div className="container mx-auto px-4">
            {/* Wrapper */}
            <div className="flex justify-center place-items-center gap-2 py-4">
                <BsGlobeCentralSouthAsia className='text-4xl text-white'/>
                <h1 className='text-3xl text-white'>My Travel Journal</h1>
            </div>
        </div>
    </header>
  )
}

export default Header