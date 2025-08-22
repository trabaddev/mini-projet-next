"use client" 

import React from 'react'

type Props = {
    children : React.ReactNode;
    title: string;
}

export default function Card({children, title }: Props) {
  return (
    <div className='w-full min-w-[80%] border-2 shadow-lg rounded-lg bg-gray-200 p-6 flex flex-col items-center justify-center'> 
        <h2 className='text-blue-500 text-4xl'>{title} </h2>
        {children}
    </div>
  )
}