import React from 'react'
import './SignIn.css'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div>
            <div className=''>
                <section className="w-full flex items-center justify-center">
                    <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0 ">

                        <div className="w-96 bg-navBg  rounded-lg shadow-lg md:mt-0 xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-black md:text-2xl ">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Username</label>
                                        <input type="email" name="email" id="email" className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-none" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 border-none" required="" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4  rounded  focus:ring-3 focus:ring-primary-300  dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label className="text-black ">Remember me</label>
                                            </div>
                                        </div>
                                        <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                    </div>

                                    <button type="submit" className="w-full text-white bg-btnBlue hover:bg-btnDarkBlue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

                                    <Link to='/sign-up'>
                                        <p className="flex gap-2 text-sm py-4 font-light text-black">
                                            Don’t have an account yet? <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</p>
                                        </p>
                                    </Link>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>
            </div>


        </div>
    )
}

export default SignIn