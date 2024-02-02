import React from 'react'
import './PostJob.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'

const PostJob = () => {
    return (
        <div>
            <Navbar />
            <div className='mt-16 pt-16 flex items-center justify-center'>
                <div className='w-2/3 pb-24'>
                    <div className='main_post_job bg-white w-full px-28'>
                        <h1 className='w-full text-start text-gray-500 pt-10 pb-5 text-3xl font-semibold '>Job Details</h1>

                        <div className='border border-gray-300'></div>
                        <form className="pb-20 pt-10">
                            <div className='pb-8 flex flex-col gap-8'>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Email</label>
                                    <input type="email" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="Your Email" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Job Title</label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="e.g., Product Designer" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Location</label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="e.g., Thane" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Job Region</label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="e.g., Thane" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Job Type</label>
                                    <select id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white ">
                                        <option>Select</option>
                                        <option>Remote</option>
                                        <option>Work From Home</option>
                                        <option>Onsite</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Job Description</label>
                                    <textarea id="" rows="4" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="Job description"></textarea>
                                </div>

                                <div>
                                    <h1 className='w-full pb-5 text-start text-gray-500 text-3xl font-semibold '>Company Details</h1>

                                    <div className='border border-gray-300'></div>
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Company Name</label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="Company Name" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Tagline
                                        <span className='text-gray-600'>&nbsp;(Optional)</span>
                                    </label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="Tagline" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Company Description
                                        <span className='text-gray-600'>&nbsp;(Optional)</span>
                                    </label>
                                    <textarea id="" rows="4" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="Description"></textarea>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Website
                                        <span className='text-gray-600'>&nbsp;(Optional)</span>
                                    </label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="Website URL" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Facebook Username
                                        <span className='text-gray-600'>&nbsp;(Optional)</span>
                                    </label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="https://www.facebook.com/" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Twitter Username
                                        <span className='text-gray-600'>&nbsp;(Optional)</span>
                                    </label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="https://twitter.com/" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">LinkedIn Username
                                        <span className='text-gray-600'>&nbsp;(Optional)</span>
                                    </label>
                                    <input type="text" id="" className="border border-gray-400  text-sm rounded-lg  block w-full p-2.5 text-black bg-white " placeholder="https://www.linkedin.com/" required />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-black">Upload file</label>
                                    <input type="file" className="border border-gray-400  text-sm rounded-lg  block w-full text-black bg-white" id="" />
                                </div>
                            </div>
                            <button type="submit" className="text-white bg-btnBlue hover:bg-btnDarkBlue font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Post Job</button>
                        </form>


                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostJob