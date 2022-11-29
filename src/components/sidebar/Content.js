import React from 'react'
import Slider2 from './Slider2'
import Upbar from './Upbar'

const Content = () => {
  return (
    <section className='px-1 flex-1 h-screen'>
        <div className='content flex flex-col h-screen overflow-y-scroll'>
            <div><Upbar /></div>
            <div><Slider2 /></div>
        </div>
    </section>
  )
}

export default Content