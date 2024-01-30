import React from 'react'
import './Footer.css'
import Facebook from '../../assets/icons8-facebook-48.png'
import Twitter from '../../assets/icons8-twitter-48.png'
import LinkedIn from '../../assets/icons8-linkedin-48.png'
import Instagram from '../../assets/icons8-instagram-48.png'
import Gmail from '../../assets/icons8-gmail-48.png'
import Download from '../../assets/icons8-download-48.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-btnBlue text-white px-12 pt-16'>
                <div className='footer_content w-full flex justify-center gap-24 items-start leading-8 font-medium py-12 px-24 text-base'>
                    <div>
                        <ul>
                            <li className='font-black'>Search trending</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-black'>Zuperr</li>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-black'>Support</li>
                            <li>Support</li>
                            <li>Privacy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='font-black'>Contact Us</li>
                        </ul>
                    </div>
                </div>

                <div className='border border-gray-400 w-full'></div>

                <div className='flex justify-between items-end py-12'>
                    <div className='flex flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <img className="w-6" src={Gmail} alt="support" />
                            <span>
                                <span className='cursor-pointer hover:underline underline-offset-2'>Support@zuperr.co</span> | <span className='cursor-pointer hover:underline underline-offset-2'>marketing@zuperr.co</span>
                            </span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img className="w-6" src={Download} alt="download" />
                            <span className='cursor-pointer hover:underline underline-offset-2'>Download app</span></div>
                        <div className='flex items-center gap-4'>
                            <span>Stay Connected</span>
                            <a href='https://www.facebook.com/'><img className="w-8" src={Facebook} alt="social-icons" /></a>
                            <a href='https://www.instagram.com/'><img className="w-8" src={Instagram} alt="social-icons" /></a>
                            <a href='https://twitter.com/'><img className="w-8" src={Twitter} alt="social-icons" /></a>
                            <a href='https://www.linkedin.com/'><img className="w-8" src={LinkedIn} alt="social-icons" /></a>
                        </div>
                    </div>
                    <div className='leading-8'>
                        <div>Web Accessiblity | Privacy Statement | Terms of Use | Feedback</div>
                        <div>©2024 zuperr. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer