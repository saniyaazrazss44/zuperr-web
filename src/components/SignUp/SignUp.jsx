import React from 'react'
import './SignUp.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-16 pt-8 h-screen pb-24 main-signUp'>

                <section className="w-full">
                    <div className="flex flex-col items-center justify-center px-6 lg:py-0">

                        <div className="w-full bg-btnBlue rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div>
                                        <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 rounded focus:ring-3 focus:ring-primary-300 bg-white dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>
                                    <button type="submit" className=" text-black bg-white hover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Create an account</button>
                                    <p className="text-sm font-light text-white">
                                        Already have an account? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
                                    </p>
                                </form>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
            <Footer />
        </div>
    )
}

export default SignUp