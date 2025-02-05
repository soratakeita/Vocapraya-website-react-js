import { useState } from 'react'

function Header() {

  return (
    <>
    <div className='flex flex-row max-w-6xl justify-between mx-auto'>
    <ul>
        <li><img className='w-20' src="/logo.png"></img></li>
    </ul>
    <ul className='flex flex-row gap-x-8 items-center gap-x-[50px] text-[20px] font-bold'>
        <li ><a className='text-[#ff6ea2] hover:text-[#f62c85]' href="#">Artist</a></li>
        <li className='text-[#ff6ea2] hover:text-[#f62c85]'>Song</li>
    </ul>
    <ul className='list-none flex flex-row gap-x-8 items-center'>
        <li className='bg-[#ff6ea2] px-10 py-5 rounded-lg text-white font-bold'>Store</li>
    </ul>
    </div>
    </>
  )
}

export default Header
