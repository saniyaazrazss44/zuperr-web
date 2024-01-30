import React from 'react'
import './CompanyRegistration.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const CompanyRegistration = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-16 pt-16'>
                <h1 className='w-full text-center text-2xl font-semibold pb-10 px-4'>
                    Company Registration Request
                </h1>

                <form className='px-8 sm:px-28 pt-4 pb-24'>
                    <div className="grid gap-6 mb-6 md:grid-cols-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">Company Name</label>
                            <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Current Company Name" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">Contact no</label>
                            <input type="number" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Contact no" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">Email</label>
                            <input type="email" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">Pan number</label>
                            <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pan Number" required />
                        </div>
                    </div>
                    <div>
                        <h1 className='w-full text-xl font-semibold pb-4'>Company Address</h1>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-black">Address</label>
                        <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Address" required />
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">City</label>
                            <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">State</label>
                            <select id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected="">Select State</option>
                                <option value="TV">TV/Monitors</option>
                                <option value="PC">PC</option>
                                <option value="GA">Gaming/Console</option>
                                <option value="PH">Phones</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">Country</label>
                            <input type="email" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-black">Zip Code</label>
                            <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zip Code" required />
                        </div>
                    </div>
                    <div>
                        <h1 className='w-full text-xl font-semibold pb-4'>Hiring Preferences</h1>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-4">
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-black">Your Name</label>
                            <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-black">Your Role</label>
                            <input type="text" id="" className="border border-gray-400  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-black bg-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Role" required />
                        </div>
                    </div>

                    <button type="submit" className="text-white bg-btnBlue hover:bg-btnDarkBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </form>

            </div>
            <Footer />
        </div>
    )
}

export default CompanyRegistration