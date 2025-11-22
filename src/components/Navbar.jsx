import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="px-18 flex justify-between items-center h-14">
                <div className="logo font-bold text-2xl">
                    <span className="">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/ &gt;</span>
                </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:text-green-500 font-bold' href='/'>Home</a>
                        <a className='hover:text-green-500 font-bold' href='#'>About</a>
                        <a className='hover:text-green-500 font-bold' href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar