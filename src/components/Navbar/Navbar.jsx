import React from 'react'
import './Navbar.css'
import ZupperLogo from '../../assets/zupperLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div className='bg-navBg w-full flex items-center justify-between px-24 shadow-md fixed top-0 left-0 z-10'>
                <Link to='/'>
                    <div className='w-full flex gap-4 items-center justify-start'>
                        <img className='w-14' src={ZupperLogo} alt="Zuperr" />
                        <h1 className='text-2xl'>Zuperr</h1>
                    </div>
                </Link>
                <div className='w-full'>
                    <ul className='flex items-center justify-end'>
                        <li className='px-6 py-6 hover:text-btnBlue text-black font-semibold cursor-pointer'>Employer</li>
                        <li className='px-6 py-6 hover:text-btnBlue text-black font-semibold cursor-pointer'>Job Seeker</li>
                        <li>
                            <Link to='/company-registration'><button className='bg-btnBlue hover:bg-btnDarkBlue cursor-pointer px-6 py-3 rounded-lg text-white font-semibold'>Company Registration</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar