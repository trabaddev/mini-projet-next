
import React from 'react'

type Props = {}

export default function Nav({}: Props) {
  return (
    <nav>
         <ul className='flex space-x-4 p-4 bg-gray-800 text-white'>
          <li className='hover:underline cursor-pointer'>Home</li>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Services</li>
          <li className='hover:underline cursor-pointer'>Contact</li>   
        </ul>
    </nav>
  )
}