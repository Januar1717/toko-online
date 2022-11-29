import React from 'react'
import { Link } from 'react-router-dom'

const Upbar = () => {
    return (
        <div className='flex flex-col-reverse w-full h-16 bg-gray-100 justify-center'>
            <div className='flex flex-row-reverse mx-12'>
               <Link to="/">
               <h1 className='ml-12'>Login</h1>
               </Link> 
                <h1>Keranjang: 0</h1>
            </div>
        </div>
    )
}

export default Upbar