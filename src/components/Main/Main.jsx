import React from 'react'
import './Main.css'
import SignIn from '../SignIn/SignIn'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div className='main mt-16 pt-16 h-screen'>
                <div className='flex justify-around items-center px-24'>
                    <div className='pl-6 w-full flex flex-col items-start gap-8'>
                        <div className=''>
                            <h1 className='main_text text-white font-black w-full flex flex-col'>
                                <span className='w-full'>
                                    Ready to hire
                                    like you're in 2050 ?
                                </span>
                                <span className='w-full'>
                                    We're revolutionising recruitment.
                                </span>
                                <span className='w-full'>
                                    Stay turned
                                </span>
                            </h1>
                        </div>
                        <div className=''>
                            <Link to='/post-job'><button className='bg-btnBlue text-white text-xl font-bold px-6 py-3 rounded-lg'>Post a job</button></Link>
                        </div>
                    </div>

                    <div>
                        <SignIn />
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Main