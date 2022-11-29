import React from 'react'
import Content from './sidebar/Content'
import Sidebar from './sidebar/Sidebar'

function Beranda() {
    return (
            <div className='w-full min-h-screen flex flex-row'>
                <Sidebar />
                <Content />
            </div>
    )
}

export default Beranda