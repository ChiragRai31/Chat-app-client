import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex flex-col justify-center items-center py-3 h-30 shadow-md bg-stone-900'>
            <img 
              src={logo}
              alt='logo'
              width={90}
              height={60}
            />
            <div>
            <h4 className='text-orange-400 font-mono font-semibold'>Type08</h4> 
            </div>
        </header>

        { children }
    </>
  )
}

export default AuthLayouts