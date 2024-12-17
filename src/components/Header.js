import React from 'react'
import { logo } from './utils/constants'

const Header = () => {
  return (
    <div className='flex absolute w-screen '>
        <div>
            <img src={logo} className=' ml-5 h-20 w-40' alt='logo' />
        </div>
        <div>

        </div>
    </div>
  )
}

export default Header
