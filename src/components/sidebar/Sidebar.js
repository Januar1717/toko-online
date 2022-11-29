import React from 'react'
import { FaStore, FaBookOpen, FaCarAlt, FaShip, FaPlane } from 'react-icons/fa'

const Sidebar = () => {
  const kategori = [
    {name: "Darat", icon: <FaCarAlt /> },
    {name: "Air", icon: <FaShip /> },
    {name: "Udara", icon: <FaPlane /> }

  ]

  return (
    <div className='h-screen border-r w-64 px-4 bg-blue-600'>
      <div className='flex flex-row justify-center items-center pt-8 text-white'>
          <FaStore className='-ml-6' size={32} />
          <h1 className='ml-2 font-bold'>Toko Online</h1>
      </div>
      <div className='mt-3 border-b-2 border-0 border-blue-400 ' />
      <div className='flex flex-row py-5 items-center text-white'>
        <FaBookOpen className='mr-2' />
        <div className=''>Menu</div>
      </div>
      <div className='border-b-2 border-0 border-blue-400 ' />
      <div className='flex flex-row py-5 items-center text-white'>
        <ul className='space-y-5'>
          {kategori.map((val, index) => {
            return <li key={index} className="flex flex-row items-center">
              <div className='mr-2'>{val.icon}</div>
              <div>{val.name}</div>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar